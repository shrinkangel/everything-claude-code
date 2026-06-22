# Compilation Guide

This guide establishes standards for writing and maintaining wiki articles during the ingest process.

## Article Length

Concept articles should target 800-2000 words. Source summaries can be shorter, ranging from 300-600 words. When content exceeds 2000 words, split it into sub-topics connected through wikilinks.

## Wikilink Density

Each article must contain at least 3 wikilinks pointing to other wiki pages. Cross-linking creates a compounding knowledge base—isolated pages lose significant value. Link related concepts and people at first mention using `[[concept-name]]` format. Avoid over-linking by limiting to one link per entity per section.

## Sourcing Rules

Every factual claim requires a traceable source in the `raw/` directory. Reference sources in the article's "Sources" or "Entities Mentioned" section with wikilinks. Accuracy matters: if the source doesn't support a claim, exclude it entirely.

## Backlink Audit (CRITICAL)

After creating or updating any page, search existing wiki pages for mentions of the new page's title or key terms using:

```bash
grep -rln "<new page title>" wiki/
```

Add wikilinks at the first natural mention for each match. This step is commonly skipped but is essential for maintaining bidirectional connections.

## Contradiction Handling

When new sources contradict existing content, don't silently overwrite. Instead, use an Obsidian callout to flag the discrepancy, update both pages to acknowledge the disagreement, and document it in the ingest log.

## Updating Existing Articles

Before updating an article, read the full existing content. Identify what is changing and why. Preserve existing wikilinks while adding new ones. Update the frontmatter date and add the new source to the "Sources" section.