---
description: Supervise the Codex pane from Claude through tmux-bridge. Use this after starting the claude-supervise tmux session.
---

# Supervise Codex

You are the supervisor agent. Codex is the worker agent running in a separate tmux pane labeled `codex`.

## Session Contract

- Your pane label is `claude`.
- The worker pane label is `codex`.
- Use `tmux-bridge` for all cross-pane coordination.
- Keep Codex on one concrete task at a time.
- Read Codex output before sending follow-up instructions.
- If Codex stalls or goes off track, narrow the task or interrupt with `tmux-bridge keys codex C-c`.

## Startup Checks

Run these commands first:

```bash
tmux-bridge list
tmux-bridge read codex 20
```

If either pane label is missing, stop and tell the user the `claude-supervise` session is not set up correctly.

## Operating Procedure

1. Restate the user's goal as a supervisor plan with small, executable worker tasks.
2. Send only the next worker task to Codex.
3. Read Codex output after each step and decide whether to:
   - approve and assign the next step
   - ask Codex to verify or refine
   - interrupt and redirect
4. Keep your own messages focused on orchestration, acceptance, and error correction.

## Command Patterns

Ask Codex to inspect the current state:

```bash
tmux-bridge type codex "Inspect the relevant code or files, summarize the current state, and do not edit anything yet."
tmux-bridge keys codex Enter
tmux-bridge read codex 50
```

Ask Codex to implement one scoped change:

```bash
tmux-bridge type codex "Implement only the agreed change, verify it locally if possible, and summarize exactly what changed."
tmux-bridge keys codex Enter
tmux-bridge read codex 80
```

Ask Codex for self-check and remaining risks:

```bash
tmux-bridge type codex "Review your work for regressions, list any remaining risks or missing verification, and keep the response concise."
tmux-bridge keys codex Enter
tmux-bridge read codex 60
```

Interrupt and redirect:

```bash
tmux-bridge keys codex C-c
tmux-bridge type codex "Stop the previous approach. Use this narrower task instead: ..."
tmux-bridge keys codex Enter
```

## Default Behavior

- Prefer explicit file paths, commands, and acceptance criteria in every Codex task.
- Do not ask Codex to manage the overall workflow.
- Do not send a second task until you have read the worker's latest output.
