#!/usr/bin/env bash
# 기묘한 학습게임 배포 스크립트
# 사용법: bash _template/deploy.sh <게임-폴더명>
# 예:    bash _template/deploy.sh parts-of-speech
#
# 전제 조건:
#   - gh CLI 로그인 완료 (gh auth status)
#   - wrangler 설치 및 cloudflare 로그인 (npx wrangler login)
#   - <게임-폴더명>/ 디렉터리 존재 + index.html, config.js 완성됨

set -euo pipefail

GAME="${1:-}"
if [[ -z "$GAME" ]]; then
  echo "사용법: bash _template/deploy.sh <게임-폴더명>"
  exit 1
fi

HUB="$(cd "$(dirname "$0")/.." && pwd)"
GAME_DIR="$HUB/$GAME"

if [[ ! -d "$GAME_DIR" ]]; then
  echo "폴더 없음: $GAME_DIR"
  exit 1
fi

echo "▶ 공통 JS 복사 (_shared/*.js → 게임 폴더)"
for src in "$HUB/_shared/"*.js; do
  [[ -f "$src" ]] || continue
  cp "$src" "$GAME_DIR/$(basename "$src")"
  echo "   · $(basename "$src")"
done

# 엔드포인트를 config.js에 주입 (PLACEHOLDER 치환)
# sion-mocktest는 시온 전용 spreadsheet/Apps Script 사용 (성경게임과 분리)
SION_ENDPOINT_FILE="$HOME/sys/active/기묘한_시온튜터/data/sion_endpoint.txt"
SHARED_ENDPOINT_FILE="$HUB/_shared/endpoint.txt"
if [[ -f "$SION_ENDPOINT_FILE" ]]; then
  ENDPOINT_FILE="$SION_ENDPOINT_FILE"
  echo "▶ 시온 전용 endpoint 사용: $ENDPOINT_FILE"
else
  ENDPOINT_FILE="$SHARED_ENDPOINT_FILE"
  echo "⚠ 시온 전용 endpoint 없음, 공용 endpoint 사용 (성경게임과 같은 시트로 들어감)"
  echo "  분리하려면: $SION_ENDPOINT_FILE 에 시온 전용 Apps Script URL 저장"
fi
ENDPOINT="$(grep -v '^#' "$ENDPOINT_FILE" | grep -v '^$' | head -1)"
if [[ "$ENDPOINT" == *PLACEHOLDER* ]]; then
  echo "⚠ endpoint.txt가 PLACEHOLDER 상태입니다. Apps Script URL로 교체해야 기록이 됩니다."
else
  perl -i -pe "s|https://script.google.com/macros/s/[A-Za-z0-9_-]+/exec|$ENDPOINT|g" "$GAME_DIR/config.js"
  echo "✓ endpoint 주입 완료"
fi

cd "$GAME_DIR"

# git init (처음 배포 시)
if [[ ! -d .git ]]; then
  echo "▶ git 저장소 초기화"
  git init -b main >/dev/null
  echo "node_modules/" > .gitignore
fi

git add -A
git commit -m "deploy: $GAME" --allow-empty >/dev/null

# GitHub repo (없으면 생성)
REPO_NAME="game-$GAME"
if ! gh repo view "$REPO_NAME" >/dev/null 2>&1; then
  echo "▶ GitHub repo 생성: $REPO_NAME"
  gh repo create "$REPO_NAME" --public --source=. --remote=origin --push
else
  echo "▶ GitHub push"
  git push origin main
fi

# Cloudflare Pages 프로젝트 (없으면 생성, 이미 있으면 무시)
echo "▶ Cloudflare Pages 프로젝트 확인/생성: $REPO_NAME"
npx wrangler pages project create "$REPO_NAME" --production-branch=main 2>&1 | grep -v "already exists" || true

# Cloudflare Pages 배포
echo "▶ Cloudflare Pages 배포"
npx wrangler pages deploy . --project-name="$REPO_NAME" --branch=main --commit-dirty=true

echo ""
echo "✅ 배포 완료"
echo "   프로젝트: $REPO_NAME"
echo "   프로덕션 URL: https://$REPO_NAME.pages.dev"
