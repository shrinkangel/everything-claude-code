---
name: cerul
description: Search videos by meaning across speech, visuals, and on-screen text using the Cerul AI API. Use when the user wants to find specific moments, quotes, or visual content in videos.
trigger: /cerul search
---

# /cerul search

Search across visual scenes, speech, and on-screen text in videos using the Cerul API.

## Setup

**API Key Required:** Set the `CERUL_API_KEY` environment variable with your key from [cerul.ai](https://cerul.ai).

```bash
export CERUL_API_KEY="your-api-key-here"
```

Free accounts include 100 signup credits and 10 free searches per day.

## Usage

```
/cerul search <query>                    # Basic search
/cerul search <query> --max-results 20   # Custom result limit (1-50, default 10)
/cerul search <query> --include-answer  # Include AI summary of matched evidence
```

**Examples:**
```
/cerul search "Sam Altman views on AGI timeline"
/cerul search "how transformers work attention mechanism"
/cerul search "Tesla自动驾驶技术详解"
```

## API Reference

**Endpoint:** `POST https://api.cerul.ai/v1/search`

**Request body:**
```json
{
  "query": "<natural-language-search-query>",
  "max_results": 10,
  "include_answer": false
}
```

**Response fields:**
- `results[].score` — Relevance 0.0 to 1.0
- `results[].title` — Video title
- `results[].snippet` — Short relevant excerpt
- `results[].transcript` — Full ASR text for speech-backed segments
- `results[].url` — Tracking link redirecting to source video
- `results[].timestamp_start` / `timestamp_end` — Segment timestamps
- `results[].source` — Video source (e.g., "youtube")
- `results[].speaker` — Speaker name if available
- `results[].keyframe_url` — Preview frame image URL
- `answer` — AI summary grounded in matched evidence (when `include_answer: true`)
- `credits_used` / `credits_remaining` — Usage tracking

## Output Format

Results are formatted as a markdown table:

```
## Video Search Results

**Query:** "sam altman agi timeline"
**Results:** 3 found | **Credits used:** 6 | **Credits remaining:** 994

| Score | Title | Time | Speaker | Snippet |
|-------|-------|------|---------|---------|
| 0.92 | Sam Altman on AGI Timeline | 20:23–22:25 | Sam Altman | "AGI is coming sooner than most people expect..." |
| 0.87 | OpenAI Roadmap Discussion | 45:10–46:30 | Sam Altman | "The roadmap gets clearer once model capability..." |

### Snippet Preview
> "AGI is coming sooner than most people expect, and the roadmap gets clearer once model capability and product reliability converge."
> — Sam Altman, timestamp 20:23

[View full video](https://cerul.ai/v/a8f3k2x) | [Transcript](#)
```

## Error Handling

| Error | Message |
|-------|---------|
| Missing API key | `Error: CERUL_API_KEY environment variable not set. Get your key at https://cerul.ai` |
| Invalid API key | `Error: Authentication failed. Check your CERUL_API_KEY value.` |
| Rate limited | `Error: Rate limit exceeded. Cerul allows 1 request/sec. Wait and try again.` |
| No results | `No results found for "<query>". Try different keywords.` |
| Network error | `Error: Could not connect to Cerul API. Check your internet connection.` |

## Implementation

```bash
# Check for API key
if [ -z "$CERUL_API_KEY" ]; then
    echo "Error: CERUL_API_KEY environment variable not set."
    echo "Get your free API key at https://cerul.ai"
    exit 1
fi

# Build request
QUERY=$(echo "$@" | sed 's/--include-answer//')
MAX_RESULTS=10
INCLUDE_ANSWER="false"

if echo "$@" | grep -q -- "--max-results"; then
    MAX_RESULTS=$(echo "$@" | grep -oP '(?<=--max-results )\d+')
fi

if echo "$@" | grep -q -- "--include-answer"; then
    INCLUDE_ANSWER="true"
fi

# Call API
curl -s "https://api.cerul.ai/v1/search" \
    -H "Authorization: Bearer $CERUL_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"query\": \"$QUERY\", \"max_results\": $MAX_RESULTS, \"include_answer\": $INCLUDE_ANSWER}"
```

Parse the JSON response and format as markdown table shown above.
