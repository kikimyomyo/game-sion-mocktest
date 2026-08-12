// 기묘한 학습게임 공통 기록 전송
// 사용법: window.GameRecorder.submit({ game, player, score, total, answers }) (별칭: send — index.html 호환)
//
// 흐름: POST(no-cors라 응답을 못 읽음) → CONFIRM_DELAY_MS 뒤 GET read-back으로 실제 시트 반영 확인
//       확인되면 성공. 확인 안 되면 localStorage 큐(QUEUE_KEY)에 보관 → 다음 페이지 로드 때 자동 재전송.
//       조용한 유실 방지가 목적 — 실패를 삼키지 않고 큐 + 이벤트로 드러낸다.
(function () {
  const CONFIG = window.GAME_CONFIG || {};
  const ENDPOINT = CONFIG.endpoint || "";
  // 로컬 프리뷰(개발 검증)에서는 전송도 큐 적재도 하지 않는다 — 시온이 기록 오염 방지 (2026-06-10 사고 후 도입된 가드와 동일 기준)
  const IS_LOCAL_PREVIEW = ["localhost", "127.0.0.1", ""].includes(window.location.hostname);
  const QUEUE_KEY = "sion_pending_records";
  const QUEUE_MAX = 50;
  const CONFIRM_DELAY_MS = 2500;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // ---- localStorage 큐: storage 주입 가능한 순수 함수 (Node 테스트용) ----
  function makeQueue(storage, key, max) {
    function load() {
      try {
        const raw = storage.getItem(key);
        const arr = raw ? JSON.parse(raw) : [];
        return Array.isArray(arr) ? arr : [];
      } catch (e) {
        return [];
      }
    }
    function save(list) {
      try {
        storage.setItem(key, JSON.stringify(list.slice(-max)));
      } catch (e) {
        console.warn("[recorder] queue save failed", e);
      }
    }
    function enqueue(payload, attempts) {
      const list = load();
      list.push({ payload, attempts: attempts || 1, queued_at: new Date().toISOString() });
      save(list);
      return list.length;
    }
    function removeByTimestamp(ts) {
      save(load().filter((item) => item.payload && item.payload.timestamp !== ts));
    }
    function count() {
      return load().length;
    }
    return { load, save, enqueue, removeByTimestamp, count };
  }

  const queue =
    typeof window !== "undefined" && window.localStorage
      ? makeQueue(window.localStorage, QUEUE_KEY, QUEUE_MAX)
      : null;

  function broadcast(detail) {
    try {
      window.dispatchEvent(new CustomEvent("gamerecorder:status", { detail }));
    } catch (e) {
      /* CustomEvent 없는 환경(테스트 등) — 무시 */
    }
  }

  function post(body) {
    return window.fetch(ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(body),
    });
  }

  // ★ 2026-08-12: 조회 재시도. Apps Script doGet이 간헐적으로 404·타임아웃을 낸다
  // (실측 8회 중 7회 실패, 재시도하면 성공). 단발 조회로 판정하면 실제로 저장된
  // 기록도 "저장 안 됨"으로 몰려 큐에 쌓이고, 다음 접속에 다시 전송돼 같은 기록이
  // 두 줄 생긴다. 확인에 실패했다고 저장에 실패한 것이 아니다.
  const READBACK_TRIES = 3;
  const READBACK_GAP_MS = 2000;

  async function fetchRowsOnce(tab) {
    const res = await window.fetch(`${ENDPOINT}?action=get&tab=${encodeURIComponent(tab)}&v=${Date.now()}`);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const j = await res.json();
    if (!j || !j.ok || !Array.isArray(j.rows)) throw new Error("bad payload");
    return j.rows;
  }

  async function readBackConfirm(tab, ts) {
    if (!ENDPOINT || !tab || !ts) return false;
    for (let i = 0; i < READBACK_TRIES; i++) {
      try {
        const rows = await fetchRowsOnce(tab);
        if (rows.some((row) => Array.isArray(row) && String(row[0]) === ts)) return true;
        // 조회는 됐는데 아직 안 보임 — 반영 지연일 수 있어 한 번 더 본다
      } catch (e) {
        console.warn("[recorder] read-back try", i + 1, "failed:", e.message || e);
      }
      if (i < READBACK_TRIES - 1) await sleep(READBACK_GAP_MS);
    }
    return false;
  }

  function queueAndBroadcast(body, reason) {
    if (!queue) return;
    const size = queue.enqueue(body);
    console.warn("[recorder] queued (reason:", reason, ") — queue size", size);
    broadcast({ status: "queued", payload: body, queueCount: size });
  }

  async function submit(payload) {
    if (IS_LOCAL_PREVIEW) {
      console.info("[recorder] local preview — submit skip:", payload && payload.score, "/", payload && payload.total);
      return { ok: false, reason: "local-preview" };
    }
    if (!ENDPOINT || ENDPOINT.includes("PLACEHOLDER")) {
      console.warn("[recorder] endpoint not configured — skipping");
      return { ok: false, reason: "no-endpoint" };
    }
    const body = {
      game: CONFIG.game || payload.game || "unknown",
      sheet_tab: CONFIG.sheet_tab || payload.sheet_tab || CONFIG.game || "기타",
      timestamp: new Date().toISOString(),
      ...payload,
    };
    try {
      await post(body);
    } catch (e) {
      console.error("[recorder] POST failed —", e);
      queueAndBroadcast(body, "post-failed");
      return { ok: false, reason: String(e), queued: true };
    }
    await sleep(CONFIRM_DELAY_MS);
    const confirmed = await readBackConfirm(body.sheet_tab, body.timestamp);
    if (confirmed) {
      console.info("[recorder] confirmed —", body.sheet_tab, body.timestamp);
      broadcast({ status: "confirmed", payload: body, queueCount: queue ? queue.count() : 0 });
      return { ok: true, confirmed: true };
    }
    console.warn("[recorder] not confirmed within", CONFIRM_DELAY_MS, "ms — queueing:", body.sheet_tab, body.timestamp);
    queueAndBroadcast(body, "unconfirmed");
    return { ok: false, reason: "unconfirmed", queued: true };
  }

  // 큐 재전송 — 페이지 로드 시 1회 호출 용도. 성공한 것만 큐에서 제거.
  async function flushQueue() {
    if (IS_LOCAL_PREVIEW || !queue) {
      return { flushed: 0, remaining: queue ? queue.count() : 0 };
    }
    const list = queue.load();
    if (list.length === 0) return { flushed: 0, remaining: 0 };
    console.info("[recorder] flushing pending queue —", list.length, "건");
    const stillPending = [];
    let flushed = 0;
    for (const item of list) {
      const body = item.payload;
      let ok = false;
      try {
        await post(body);
        await sleep(CONFIRM_DELAY_MS);
        ok = await readBackConfirm(body.sheet_tab, body.timestamp);
      } catch (e) {
        console.warn("[recorder] queue resend failed —", e);
      }
      if (ok) {
        flushed++;
        console.info("[recorder] queue resend confirmed —", body.timestamp);
      } else {
        stillPending.push({ payload: body, attempts: (item.attempts || 1) + 1, queued_at: item.queued_at });
        console.warn("[recorder] queue resend still unconfirmed —", body.timestamp);
      }
    }
    queue.save(stillPending);
    broadcast({ status: "flush-done", flushed, remaining: stillPending.length, queueCount: stillPending.length });
    return { flushed, remaining: stillPending.length };
  }

  function getQueueCount() {
    return queue ? queue.count() : 0;
  }

  window.GameRecorder = {
    submit,
    send: submit, // index.html 호환 별칭 — submit과 완전히 같은 함수
    flushQueue,
    getQueueCount,
    _makeQueue: makeQueue, // 테스트용 export (순수 큐 로직 노드 시뮬레이션)
  };
})();
