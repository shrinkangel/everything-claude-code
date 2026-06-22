---
name: superpowers-slash-aliases
description: Use when the user's message starts with /brainstorm, /plan, /execute-plan, /debug, /review, or /finish, or when they ask to invoke Superpowers with slash-style aliases in Codex
---

# Superpowers Slash Aliases

Treat supported leading slash tokens as text aliases for Superpowers skills.

## Alias Mapping

- `/brainstorm` -> `brainstorming`
- `/plan` -> `writing-plans`
- `/execute-plan` -> `executing-plans`
- `/debug` -> `systematic-debugging`
- `/review` -> `requesting-code-review`
- `/finish` -> `finishing-a-development-branch`

## Rules

1. If the message starts with a supported alias, strip that token from the front and treat the remaining text as the real task.
2. Invoke the mapped Superpowers skill before doing substantial work.
3. If the alias is present without task text, ask for the missing task in one concise sentence.
4. If the alias is unknown, explain the supported aliases briefly instead of guessing.
5. These are text aliases, not native Codex slash commands. If the aliases do not trigger, tell the user to restart Codex so it can rediscover local skills.
