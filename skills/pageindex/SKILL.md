---
name: pageindex
description: Vectorless, reasoning-based RAG for PDF documents — generate hierarchical tree index for structured retrieval.
trigger: /pageindex
---

# /pageindex

Generate a hierarchical tree-structure index from a PDF or Markdown document. The index captures document structure with chapter/section titles, page ranges, and AI-generated summaries. Output is saved to `results/<name>_structure.json`.

## Usage

```
/pageindex <pdf_path>                                             # index a PDF
/pageindex <pdf_path> --enable-ocr yes                          # for scanned PDFs
/pageindex <pdf_path> --enable-ocr yes --enable-vision-validation yes  # validate text
/pageindex <pdf_path> --max-pages-per-node 5                      # more granular nodes
/pageindex <md_path>                                             # index a Markdown file
```

## What pageindex is for

PageIndex builds a tree index that mirrors how human experts navigate documents. Instead of chunking text and using vector similarity, it:
1. Extracts the table of contents structure from PDFs or uses Markdown headings
2. Groups pages into logical nodes (chapters, sections)
3. Generates AI summaries for each node
4. Returns a JSON tree with page ranges and summaries

Use it for:
- Long technical documents where you need to find relevant sections quickly
- Books or manuals where structure matters more than semantic search
- RAG pipelines that need structured context retrieval
- Understanding the layout of an unfamiliar document

---

## What You Must Do When Invoked

Parse the invocation to extract:
1. The file path (PDF or Markdown)
2. Any `--enable-ocr yes|no` flag (default: no)
3. Any `--enable-vision-validation yes|no` flag (default: no)
4. Any other options

If no file path is provided, ask the user: "Which PDF or Markdown file would you like to index?"

---

### Step 1 - Validate environment

The PageIndex project lives at `/home/alex/桌面/pageindex/` and uses a Python virtualenv at `.venv/`. The tiktoken library needs `TIKTOKEN_CACHE_DIR` set to avoid SSL network errors — pre-cached files exist at the project's `.tiktoken_cache/` directory.

```bash
PAGEINDEX_DIR="/home/alex/桌面/pageindex"

# Detect Python interpreter from the project venv
if [ -f "$PAGEINDEX_DIR/.venv/bin/python3" ]; then
    PYTHON="$PAGEINDEX_DIR/.venv/bin/python3"
elif [ -f "$PAGEINDEX_DIR/.venv/bin/python" ]; then
    PYTHON="$PAGEINDEX_DIR/.venv/bin/python"
else
    echo "ERROR: Python interpreter not found in $PAGEINDEX_DIR/.venv/"
    exit 1
fi

# Set tiktoken cache to avoid SSL errors
export TIKTOKEN_CACHE_DIR="$PAGEINDEX_DIR/.tiktoken_cache"

echo "Environment OK | Python: $PYTHON"
```

---

### Step 2 - Validate the file

```bash
PAGEINDEX_DIR="/home/alex/桌面/pageindex"
FILE_PATH="USER_PROVIDED_PATH"

if [ ! -f "$FILE_PATH" ]; then
    echo "ERROR: File not found: $FILE_PATH"
    exit 1
fi

# Detect file type
case "$FILE_PATH" in
    *.pdf) FILE_TYPE="pdf" ;;
    *.md|*.markdown) FILE_TYPE="md" ;;
    *) echo "ERROR: Unsupported file type. Use .pdf, .md, or .markdown"; exit 1 ;;
esac

echo "File: $FILE_PATH ($FILE_TYPE)"
```

Replace `USER_PROVIDED_PATH` with the actual path provided by the user.

---

### Step 3 - Run pageindex

```bash
PAGEINDEX_DIR="/home/alex/桌面/pageindex"
export TIKTOKEN_CACHE_DIR="$PAGEINDEX_DIR/.tiktoken_cache"
PYTHON="$PAGEINDEX_DIR/.venv/bin/python3"
FILE_PATH="USER_PROVIDED_PATH"
ENABLE_OCR="no"
VISION_VALIDATION="no"

# Build the command based on file type
if [ "$FILE_TYPE" = "pdf" ]; then
    CMD="$PYTHON \"$PAGEINDEX_DIR/run_pageindex.py\" --pdf_path \"$FILE_PATH\""
else
    CMD="$PYTHON \"$PAGEINDEX_DIR/run_pageindex.py\" --md_path \"$FILE_PATH\""
fi

# Add optional flags if user provided them
if [ "$ENABLE_OCR" = "yes" ]; then
    CMD="$CMD --enable-ocr yes"
fi

if [ "$VISION_VALIDATION" = "yes" ]; then
    CMD="$CMD --enable-vision-validation yes"
fi

# Run from the project directory (required for module imports)
cd "$PAGEINDEX_DIR"
eval $CMD
```

If the command fails, see Error Handling below.

---

### Step 4 - Report results

On success, the script prints `Tree structure saved to: <output_file>`. Read the output JSON and present a summary.

```bash
# Extract output file from the last line of output
# Expected: Tree structure saved to: ./results/<name>_structure.json
```

Present the results to the user:

```
PageIndex complete.

Results saved to: <output_file>

Tree structure summary:
  <N> sections indexed
  Pages covered: <start> - <end>

Top-level sections:
  1. <Section Title A> (pages <start>-<end>) — <summary excerpt...>
  2. <Section Title B> (pages <start>-<end>) — <summary excerpt...>
  3. <Section Title C> (pages <start>-<end>) — <summary excerpt...>
  ...
```

Read the output JSON (`./results/<name>_structure.json`) and generate a concise summary showing the top-level structure with page ranges and brief summaries.

---

## All Options

| Option | Default | Description |
|--------|---------|-------------|
| `--pdf_path <path>` | required | Path to PDF file (mutually exclusive with --md_path) |
| `--md_path <path>` | required | Path to Markdown file (mutually exclusive with --pdf_path) |
| `--model` | Pro/MiniMaxAI/MiniMax-M2.5 | Model to use for summarization |
| `--toc-check-pages` | 20 | Number of pages to check for table of contents (PDF only) |
| `--max-pages-per-node` | 10 | Maximum pages per node (PDF only) |
| `--max-tokens-per-node` | 20000 | Maximum tokens per node (PDF only) |
| `--if-add-node-id` | yes | Add node ID to each node |
| `--if-add-node-summary` | yes | Add AI summary to each node |
| `--if-add-doc-description` | yes | Add document description |
| `--if-add-node-text` | no | Include full text per node |
| `--enable-ocr` | no | Use PaddleOCR for scanned PDFs (yes/no) |
| `--enable-vision-validation` | no | Validate extracted text with vision model (yes/no) |

Markdown-only options:
| Option | Default | Description |
|--------|---------|-------------|
| `--if-thinning` | no | Apply tree thinning |
| `--thinning-threshold` | 5000 | Minimum token threshold for thinning |
| `--summary-token-threshold` | 200 | Token threshold for generating summaries |

---

## Error Handling

### SSL/Tiktoken Errors

If you see errors like `SSLEOFError` or `ModuleNotFoundError: No module named 'tiktoken'`:

The pre-cached tiktoken files are at `/home/alex/桌面/pageindex/.tiktoken_cache/`. Ensure `TIKTOKEN_CACHE_DIR` is set to this directory before running. This should already be handled in Step 1, but verify the environment variable is being passed correctly in Step 3.

### Missing Dependencies

If you see import errors like `ModuleNotFoundError: No module named 'pageindex'`:

Ensure you are running from the project directory (`/home/alex/桌面/pageindex/`). The script uses `from pageindex import *` so it must be run from the project root with PYTHONPATH set correctly.

### OCR Service Errors

If `--enable-ocr yes` is set but the PaddleOCR service is not running:

```
Error: PaddleOCR HTTP service not available
```

To use OCR, start the service first:
```bash
docker compose -f /home/alex/桌面/pageindex/docker-compose.paddleocr.yml up -d --build
# Or for GPU:
docker compose -f /home/alex/桌面/pageindex/docker-compose.paddleocr.yml -f /home/alex/桌面/pageindex/docker-compose.paddleocr.gpu.yml up -d --build
curl http://127.0.0.1:8001/health
```

Then run pageindex with `PAGEINDEX_PADDLEOCR_BASE_URL=http://127.0.0.1:8001` set.

### File Not Found

If the PDF file path is relative, the script may fail to find it. Always use absolute paths when possible.

---

## Output Format

The output JSON has this structure:

```jsonc
{
  "doc_name": "filename.pdf",
  "structure": [
    {
      "title": "Chapter/Section Title",
      "start_index": 1,
      "end_index": 5,
      "node_id": "0000",
      "summary": "AI-generated summary of this section..."
    },
    // ... more nodes, possibly nested under "nodes" field
  ]
}
```

Fields:
- `title`: Section or chapter heading
- `start_index`: Starting page number (1-indexed)
- `end_index`: Ending page number
- `node_id`: Hierarchical ID (e.g., "0000", "0001", "000100")
- `summary`: AI-generated summary of the section content
- `nodes`: Nested child nodes (if the section has subsections)

---

## Examples

### Basic PDF indexing
```
/pageindex /path/to/document.pdf
```

### Scanned PDF with OCR
```
/pageindex /path/to/scanned_document.pdf --enable-ocr yes
```

### More granular node splitting
```
/pageindex /path/to/document.pdf --max-pages-per-node 5
```

### Markdown file indexing
```
/pageindex /path/to/document.md
```
