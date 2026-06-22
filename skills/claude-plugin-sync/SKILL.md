---
name: claude-plugin-sync
description: 同步 everything-claude-code fork 仓的 upstream 更新——main 走 merge，定制分支走 rebase，自动 push 到 origin
trigger: /claude-plugin-sync
---

# /claude-plugin-sync

把 `~/.claude/plugins/everything-claude-code/`（fork 自 arabicapp/everything-claude-code）的上游更新同步到本地并 push 回自己的 fork。

## 何时使用

- 几周没拉上游，想看看 arabicapp 有没有新 skill/rule
- 上游修复了某个 bug，你想应用
- 给自己的 alex-local-customizations 分支更新基础

## 前置条件

- 已在 GitHub fork 上游到自己账号
- 已有两个 remote：`origin`（你的 fork）+ `upstream`（原仓库）
- 当前在 `main` 或 `alex-local-customizations` 分支

Run: `git remote -v`
Expected: 同时看到 origin 和 upstream

## 工作流

1. **预检**：检测当前分支、`origin`/`upstream` 存在
2. **fetch**：`git fetch upstream`
3. **策略选择**（按当前分支）：
   - `main` → `git merge upstream/main --no-edit`
   - 其他（alex-local-customizations 等）→ `git rebase upstream/main`
4. **冲突检测**：若 `git diff --name-only --diff-filter=U` 非空，列出冲突文件并 exit 4
5. **push**：`git push origin <current-branch>`（不 force）

## 使用

```bash
/claude-plugin-sync                  # 按当前分支自动选策略
/claude-plugin-sync --rebase-all     # 强制 rebase
/claude-plugin-sync --merge-all      # 强制 merge
```

## 退出码

- 0 = 成功
- 4 = 冲突（需手工解决后重跑）
- 其他 = 异常（看 stderr）

## 冲突处理

冲突时脚本不自动解决，会打印冲突文件清单。处理流程：

```bash
# 1. 编辑冲突文件
# 2. git add <已解决文件>
# 3. git rebase/merge --continue  (或 --abort 撤销)
# 4. 重跑 /claude-plugin-sync 走 push 步骤
```

## 不做什么

- 不处理 `skills/book-to-skill/`、`skills/latex-document-skill/` 等内嵌子仓
- 不自动 `--force` push
- 不动 fork 仓的 `main` 分支上游同步（那是 merge-only）

## 关联 skill

- `/claude-dotfiles-sync` — 同步 dotfiles 配置
- `/claude-bootstrap` — 新机器恢复