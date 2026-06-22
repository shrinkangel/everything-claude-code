---
name: claude-bootstrap
description: 在新机器恢复 Claude Code 完整配置（dotfiles 仓 + 软链 + SSH key + plugin fork + skill 备份）
trigger: /claude-bootstrap
---

# /claude-bootstrap

在新机器上一键恢复 Claude Code 配置。**必须**的 GitHub 仓库已在远端存在（本 skill 不创建仓库）。

## 前置条件

- GitHub 已创建：
  - `shrinkangel/dotfiles`（Private 仓）
  - `shrinkangel/everything-claude-code`（fork 自 arabicapp）
- GitHub 账号已添加公钥 `~/.ssh/github_alex.pub` 对应的 fingerprint
- 本地有 `git` 和 `curl`

## 使用

```bash
/claude-bootstrap                          # 交互式：脚本会提示贴 base64 私钥
/claude-bootstrap <base64_private_key>     # 命令行：直接传
```

## 工作流

1. **预检**：`command -v git && command -v curl && command -v tar`
2. **拒绝已配置机器**：若 `~/.claude/CLAUDE.md` 已是 dotfiles 软链，exit 1 防止覆盖
3. **clone dotfiles**：`git clone git@github.com:shrinkangel/dotfiles.git ~/dotfiles/claude`
4. **建立软链**：`cd ~/dotfiles/claude && bash bootstrap.sh`
5. **写 SSH 私钥**（仅当 `~/.ssh/github_alex` 不存在）：
   - 接收 base64 参数或交互式输入
   - `base64 -d > ~/.ssh/github_alex && chmod 600`
   - 重建公钥：`ssh-keygen -y -f ~/.ssh/github_alex > ~/.ssh/github_alex.pub`
   - 格式校验：以 `-----BEGIN OPENSSH PRIVATE KEY-----` 开头
6. **SSH 验证**：`ssh -T git@github.com`（期望 `Hi shrinkangel!`）
7. **clone plugin fork**：`git clone git@github.com:shrinkangel/everything-claude-code.git ~/.claude/plugins/everything-claude-code`
8. **解包 skill 备份**：`tar -xzf ~/dotfiles/claude/everything-claude-code-untracked.tar.gz -C ~/.claude/plugins/everything-claude-code/`
9. **最终验证**：
   - `ls -la ~/.claude/ | grep -E "CLAUDE|settings"`
   - `claude --version`
   - `git -C ~/.claude/plugins/everything-claude-code log --oneline -3`

## 退出码

- 0 = 全部成功
- 1 = 用户取消 / 已配置机器
- 2 = 私钥格式无效（不以 `-----BEGIN OPENSSH PRIVATE KEY-----` 开头）
- 其他 = clone/ssh 失败（看 stderr）

## ⚠️ 安全警告

- base64 私钥会在对话/终端历史中明文存在
- **强烈建议**：bootstrap 完成后立即在 https://github.com/settings/keys 删除该 key 并生成新的
- 私钥在内存和日志里至少存在 5-10 分钟

## 失败回滚

任何步骤失败时，已 clone 的目录可手动删除重试：

```bash
rm -rf ~/dotfiles/claude ~/.claude/plugins/everything-claude-code
rm ~/.claude/{CLAUDE.md,settings.json,docs,backups,mcp-servers}  # 删除可能的断链
```

## 不做什么

- 不创建 GitHub 仓库（用户手动）
- 不安装 Claude Code CLI（用户用 `npm i -g @anthropic-ai/claude-code@2`）
- 不处理内嵌子仓（`skills/book-to-skill/` 等）

## 关联 skill

- `/claude-dotfiles-sync` — 日常配置同步
- `/claude-plugin-sync` — 上游更新同步
