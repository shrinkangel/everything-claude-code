---
name: sensevoice-subtitle
description: Transcribe video files to bilingual Chinese/English subtitles using SenseVoice, with optional LLM translation for true bilingual output.
             Use when user wants to generate SRT subtitle files from video (MP4, MKV, AVI, MOV, WMV, FLV, WebM), or translate an existing SRT to another language.
---

# sensevoice-subtitle

Transcribe video files to subtitles with the SenseVoice model, then optionally translate to a target language for **true bilingual** SRT output (target language on line 1, source on line 2).

## Two-Stage Workflow

This skill chains two scripts in `scripts/`:

| Stage | Script | Purpose |
|-------|--------|---------|
| 1. Transcribe | `sensevoice-subtitle.py` | Extract audio → SenseVoice ASR → SRT (single-language, lines duplicated as placeholders) |
| 2. Translate | `translate-srt.py` | Read SRT → batch-translate via `mmx` CLI → bilingual SRT |

You can also use stage 2 standalone on any existing SRT (YouTube auto-captions, hand-edited SRT, etc.).

---

## Stage 1 — Transcribe video to SRT

### Usage
```
/sensevoice-subtitle <video_file> [--output-dir <dir>]
```

**Examples:**
```
/sensevoice-subtitle /path/to/video.mp4
/sensevoice-subtitle /path/to/video.mkv --output-dir /path/to/output
```

### Command
```bash
cd /media/alex/Data/PROJECT/38.sensevoice语音转文字 && \
    venv/bin/python scripts/sensevoice-subtitle.py <video_file> [--output-dir <dir>]
```

Or with full path:
```bash
venv/bin/python /media/alex/Data/PROJECT/38.sensevoice语音转文字/scripts/sensevoice-subtitle.py <video_file> [--output-dir <dir>]
```

### Pipeline
1. **Audio Extraction** — `ffmpeg` extracts 16kHz mono WAV from the video
2. **Transcription** — SenseVoice generates timestamps using CTC forced alignment
3. **SRT Generation** — emits an SRT where each entry has the transcribed text on **both** lines (zh placeholder + en placeholder, identical) — this is a deliberate placeholder for stage 2.

### Output
- SRT file saved alongside the original video: `video.mp4` → `video.srt`
- Or to `--output-dir`
- Stage-1 format: source text appears twice (intentional, replaced by stage 2)

### Supported Formats
- Input video: MP4, MKV, AVI, MOV, WMV, FLV, WebM
- Output: SRT subtitle file

### Requirements
- `ffmpeg` (system package)
- SenseVoice model at `~/.cache/modelscope/hub/models/iic/SenseVoiceSmall`
- Python 3.10+ with `funasr`, `onnxruntime`

### Error Handling (stage 1)
| Error | Exit Code | Message |
|-------|-----------|---------|
| ffmpeg not found | 2 | Install with: `sudo apt install ffmpeg` |
| Model not found | 3 | Download SenseVoice model first |
| Invalid video | 4 | Unsupported format or file not found |
| Transcription failed | 1 | Check audio quality and try again |

---

## Stage 2 — Translate SRT to bilingual SRT

### Usage
```bash
venv/bin/python scripts/translate-srt.py <input.srt> [options]
```

**Examples:**
```bash
# English → Chinese (default), output: <input>.zh.srt
venv/bin/python scripts/translate-srt.py video.srt

# Custom output path
venv/bin/python scripts/translate-srt.py video.srt -o /path/to/bilingual.srt

# Different language pair
venv/bin/python scripts/translate-srt.py video.srt --source-lang en --target-lang ja

# Larger batches (fewer API calls, more context per call)
venv/bin/python scripts/translate-srt.py video.srt --batch-size 12
```

### Options
| Flag | Default | Description |
|------|---------|-------------|
| `--source-lang`, `-s` | `en` | Source language code |
| `--target-lang`, `-t` | `zh` | Target language code |
| `--output`, `-o` | `<input>.<target>.srt` | Output SRT path |
| `--batch-size`, `-b` | `8` | Entries per `mmx` API call |
| `--model` | `MiniMax-M2.7` | `mmx` model ID |
| `--temperature` | `0.3` | Sampling temperature (0.0–1.0) |

### Supported languages
`zh` (简体中文), `en` (English), `ja` (日本語), `ko` (한국어), `fr` (français), `de` (Deutsch), `es` (español), `ru` (русский), `ar` (العربية). Extend `LANG_NAMES` in the script to add more.

### Pipeline
1. **Parse SRT** — splits into entries; deduplicates consecutive identical text lines (handles the stage-1 placeholder output)
2. **Batch translate** — sends N entries per call to `mmx text chat` with a system prompt that mandates natural, professional subtitle translation; preserves proper nouns in source form
3. **Assemble bilingual SRT** — emits target language on line 1, source on line 2, per entry

### Output
- Format: target language (line 1) / source language (line 2)
- Timestamps preserved exactly
- `video.srt` → `video.zh.srt` (or wherever `-o` points)

### Requirements
- `mmx` CLI on `PATH` (see: https://github.com/MiniMax-AI/cli)
- `mmx auth status` should return logged in

### Error Handling (stage 2)
- **mmx not found**: clear error message pointing to install URL
- **API call failure**: prints `mmx` stderr, exits 1
- **Translation count mismatch**: prints expected vs got, exits 1 (rare; the LLM didn't return one block per requested entry)
- **Empty SRT**: exits 1

---

## End-to-End Recipe — True Bilingual Subtitles

```bash
cd /media/alex/Data/PROJECT/38.sensevoice语音转文字

# 1. Transcribe (stage 1)
venv/bin/python scripts/sensevoice-subtitle.py /path/to/video.mp4 \
    --output-dir /path/to/output

# 2. Translate (stage 2) — reads the SRT, writes bilingual SRT
venv/bin/python scripts/translate-srt.py /path/to/output/video.srt
# → /path/to/output/video.zh.srt
```

Processing time for a 10-minute English video:
- Stage 1 (SenseVoice): ~35 seconds
- Stage 2 (mmx, 28 entries, 4 batches): ~60 seconds
- Total: under 2 minutes

---

## Progress Output

**Stage 1:**
```
[1/3] Checking environment...
[1/3] Validating input...
[2/3] Extracting audio from video...
[3/3] Transcribing with SenseVoice...
[3/3] Generating SRT subtitle file...

Success! Subtitle saved to: /path/to/video.srt
```

**Stage 2:**
```
[1/3] Parsing /path/to/video.srt...
      28 entries found
[2/3] Translating 28 entries from English to 简体中文 (batch=8, model=MiniMax-M2.7)...
      Batch 1/4: entries 1..8 (8)
      Batch 2/4: entries 9..15 (7)
      ...
[3/3] Writing bilingual SRT to /path/to/video.zh.srt...
      15866 bytes written

Success! Bilingual SRT saved to: /path/to/video.zh.srt
```

---

## Notes

- **Processing speed (stage 1)**: ~20× realtime (12-minute video processes in ~40 seconds)
- **Language is auto-detected** by SenseVoice in stage 1; specify the source language for stage 2 (default `en`)
- **Stage 1 emits duplicated lines** as a placeholder — this is intentional, not a bug
- **For true bilingual subtitles**, run stage 2 (the recommended path going forward)
- **Stage 2 alone** works on any SRT (YouTube auto-captions, hand-edited, etc.) — not just stage 1 output
- **ASR quirks carry through**: if stage 1 transcribed "Uraine" instead of "Ukraine", stage 2 will translate "Uraine" verbatim. Spot-check stage-1 output for severe errors before translating
- **For very long videos** (60+ min, 500+ entries), consider `--batch-size 12` to reduce API call count at the cost of more output tokens per call
