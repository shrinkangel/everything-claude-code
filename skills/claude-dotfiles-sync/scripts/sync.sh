#!/usr/bin/env bash
# sync.sh — dotfiles 同步脚本
# 用法：bash sync.sh "commit message" [--no-push] [--dry-run]
set -euo pipefail

readonly LARGE_FILE_THRESHOLD="5M"
readonly LARGE_FILE_THRESHOLD_BYTES=5242880

DOTFILES_DIR="$HOME/dotfiles/claude"
DRY_RUN=false
NO_PUSH=false
MSG=""

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=true ;;
    --no-push) NO_PUSH=true ;;
    -h|--help) echo "用法: $0 \"<commit message>\" [--dry-run] [--no-push]"; exit 0 ;;
    *) MSG="$arg" ;;
  esac
done

# 1. 预检
if [[ ! -d "$DOTFILES_DIR/.git" ]]; then
  echo "✗ $DOTFILES_DIR 不是 git 仓库"; exit 1
fi
cd "$DOTFILES_DIR"

# 2. 软链健康检查
echo "=== 软链健康检查 ==="
for f in CLAUDE.md settings.json; do
  if [[ ! -L "$HOME/.claude/$f" ]]; then
    echo "⚠️  $HOME/.claude/$f 不是软链，请运行 bootstrap.sh"
  fi
done
for d in mcp-servers docs backups; do
  if [[ ! -L "$HOME/.claude/$d" ]]; then
    echo "⚠️  $HOME/.claude/$d 不是软链，请运行 bootstrap.sh"
  fi
done

# 3. 状态汇总
echo ""
echo "=== 当前变更 ==="
git status --short

if $DRY_RUN; then
  echo ""
  echo "✓ --dry-run 模式，不执行 add/commit/push"
  exit 0
fi

# 4. 检测空变更
if [[ -z "$(git status --porcelain)" ]]; then
  echo "✓ 没有变更需要提交"
  exit 1
fi

# 5. 大文件警告
LARGE_FILES=$(git status --porcelain | grep '^??' | awk '{print $2}' | xargs -I{} find "$DOTFILES_DIR/{}" -type f -size +"$LARGE_FILE_THRESHOLD" 2>/dev/null | head -5 || true)
if [[ -n "$LARGE_FILES" ]]; then
  echo ""
  echo "⚠️  以下文件 > $LARGE_FILE_THRESHOLD，请确认是否需要提交："
  echo "$LARGE_FILES"
  read -rp "继续？(y/N) " ans
  [[ "$ans" =~ ^[Yy]$ ]] || { echo "✗ 用户取消"; exit 3; }
fi

# 6. 添加 + 提交
git add -A

if [[ -z "$MSG" ]]; then
  # 自动从变更类型推测
  if git diff --cached --name-only | grep -q "^skills/"; then
    MSG="feat: 新增 skill 内容"
  elif git diff --cached --name-only | grep -q "^CLAUDE.md"; then
    MSG="docs: 更新 CLAUDE.md 全局指令"
  elif git diff --cached --name-only | grep -q "^settings.json"; then
    MSG="chore: 更新 settings.json"
  else
    MSG="chore: dotfiles 同步 $(date +%Y-%m-%d)"
  fi
  echo ""
  echo "自动 commit message: $MSG"
  read -rp "使用此 message？(回车确认 / 输入自定义) " custom
  [[ -n "$custom" ]] && MSG="$custom"
fi

# MSG must be single-line
if [[ "$MSG" == *$'\n'* ]]; then
    echo "✗ commit message 包含换行，已截断为第一行："
    MSG="${MSG%%$'\n'*}"
    echo "  $MSG"
fi
git commit -m "$MSG"

# 7. Push
if $NO_PUSH; then
  echo ""
  echo "✓ 已 commit，未 push"
  exit 0
fi

echo ""
echo "=== 推送到远程 ==="
PUSH_OUTPUT=$(git push 2>&1)
PUSH_EXIT=$?
if [[ $PUSH_EXIT -eq 0 ]]; then
  echo ""
  echo "=== 最近 3 条 commit ==="
  git log --oneline -3
else
  echo "$PUSH_OUTPUT"
  if echo "$PUSH_OUTPUT" | grep -qE 'non-fast-forward|\[rejected\]'; then
    echo ""
    echo "✗ push 冲突（非快进），请先 git pull --rebase 再 push"
    exit 2
  else
    echo ""
    echo "✗ push 失败（网络/SSH），请检查后重试"
    exit 1
  fi
fi
