---
name: claude-dotfiles-sync
description: 同步 ~/.claude/ 下的用户配置改动（CLAUDE.md、settings.json、mcp-servers、docs、rules 等）到 ~/dotfiles/claude 仓库并 push 到 GitHub 远程
trigger: /claude-dotfiles-sync
---

# /claude-dotfiles-sync

把 `~/.claude/` 下的用户配置（通过软链接映射到 `~/dotfiles/claude/`）批量提交并推送到 GitHub 远程仓库。

## 何时使用

- 修改了 `~/.claude/CLAUDE.md`（全局指令）
- 调整了 `~/.claude/settings.json`（全局设置）
- 增删了 MCP 服务、skills、rules、hooks、mcp-configs、docs
- 想为某次配置变更起一个原子化 commit 记录

## 工作流

1. **预检**：检查 `~/dotfiles/claude/.git` 是 git 仓库；`~/.claude/` 下的 5 个软链都有效
2. **状态汇总**：`git status` 列出待提交内容，分类显示：
   - 修改的文件
   - 新文件
   - 删除的文件
   - 软链断裂警告（如有）
3. **生成 commit message**：根据变更类型自动建议：
   - `feat:` 新增 skill/mcp/rule
   - `fix:` 修正配置
   - `docs:` 更新 CLAUDE.md 或 docs/
   - `chore:` 其他
4. **执行**：`scripts/sync.sh "<message>"` 完成 add + commit + push
5. **后置**：显示 `git log` 最近 3 条确认

## 使用

```
/claude-dotfiles-sync                       # 自动检测变更并提示 commit message
/claude-dotfiles-sync "feat: 新增 mcp 服务"   # 指定 commit message
/claude-dotfiles-sync --dry-run              # 只显示变更不提交
/claude-dotfiles-sync --no-push              # 只 commit 不 push
```

## 退出码

- 0 = 成功（push 完成）
- 1 = 空变更退出（无文件可提交）
- 2 = push 失败（网络/SSH/非快进）
- 3 = 用户取消（大文件确认时输入非 y）

## 软链覆盖范围

`~/dotfiles/claude/` 软链到 `~/.claude/`：

| 源（dotfiles） | 目标（~/.claude/） |
|----------------|---------------------|
| `CLAUDE.md` | `CLAUDE.md` |
| `settings.json` | `settings.json` |
| `mcp-servers/` | `mcp-servers/`（空，mmx 独立仓） |
| `docs/` | `docs/` |
| `backups/` | `backups/`（运行时数据已被 .gitignore 排除） |

被 `.gitignore` 排除但**不**软链的：`cache/`、`plugins/`、`projects/`、`homunculus/`、`session-env/`、`settings.local.json`。

## 注意事项

- **不**会触碰 `settings.local.json`（本地私有，不进 dotfiles）
- **不**会触碰 `plugins/` 下任何子仓库（各自独立）
- **不**会触碰 `projects/`（隐私，134M）
- 大文件提交前会提示确认（避免误传 .pdf/.zip 等）

## 故障排查

| 现象 | 原因 | 解决 |
|------|------|------|
| `fatal: not a git repository` | dotfiles 仓库未初始化 | 见 `claude-bootstrap` |
| `Permission denied (publickey)` | GitHub SSH key 未配 | `cat ~/.ssh/github_alex.pub` 加到 GitHub |
| `! [rejected] main -> main (non-fast-forward)` | 远程有新 commit（exit 2） | 先 `git pull --rebase` 再 push |
| 用户输入非 `y` 取消大文件确认 | 大文件警告时选择取消（exit 3） | 重新运行并输入 `y` 继续 |
| 软链显示红色/不存在 | bootstrap.sh 未跑 | `cd ~/dotfiles/claude && bash bootstrap.sh` |

## 关联 skill

- `/claude-plugin-sync` — 同步插件 fork 上游更新
- `/claude-bootstrap` — 在新机器恢复全部配置
- `/claude-upgrade` — 升级 Claude Code CLI（npm @2）
