# Frontmatter Schemas

Each wiki page carries a short YAML header that defines its role. The header fields differ by entity type, while the creation date and tagging conventions remain consistent.

## Entity Type Schemas

### concept.md

```yaml
---
date: YYYY-MM-DD
tags: [domain]
type: concept
status: active | stale | draft
---
```

- `date` — creation date in ISO format
- `tags` — domain tag(s) for categorization
- `type` — fixed to "concept"
- `status` — "active", "stale", or "draft"

### person.md

```yaml
---
date: YYYY-MM-DD
tags: [domain, person]
type: person
status: active | stale | draft
---
```

- Same pattern as concept, but the tag list includes an extra "person" identifier
- `type` field reads "person"

### source-summary.md

```yaml
---
date: YYYY-MM-DD
tags: [domain]
type: source-summary
source-url: https://...
status: active | stale | draft
---
```

- Shares the date and domain tag
- `type` set to "source-summary"
- Adds a `source-url` pointing to the original material

### query-output.md

```yaml
---
date: YYYY-MM-DD
tags: [domain]
type: query-output
question: "<original question>"
informed-by: [[page-1], [page-2]]
status: filed | promoted
---
```

- `type` of "query"
- `question` field holds the original query text
- `informed-by` list of linked wiki articles
- `status` begins as "filed" and may later become "promoted"

## Common Fields

| Field | Description |
|-------|-------------|
| `date` | ISO format creation date (YYYY-MM-DD) |
| `tags` | Domain categorization tags |
| `status` | `active` (current), `stale` (needs review), `draft` (incomplete) |