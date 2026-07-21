# Robust AI Chat Export Prompt

## Purpose

This prompt is for asking older AI chat windows to produce a portable conversation export when the platform does not provide a native data export.

Native exports remain preferred. Use this prompt only for reconstructed exports created inside a chat window.

## Why base64 is required

Large conversational transcripts often contain quotation marks, Markdown, code fences, backslashes, Unicode symbols, LaTeX, shell commands, newlines, and partial JSON examples. These frequently break strict JSON when copied out of an AI chat.

To reduce this failure mode, the raw message body should be stored in `content_base64` rather than `content`.

`content_preview` may be included for human scanning, but it is not the source of record.

## Prompt

Copy the following into the source chat window:

```text
Export this conversation as strict valid JSON.

Return only JSON. Do not use Markdown. Do not wrap the answer in a code fence.

Use this exact top-level structure:
{
  "export_format": "ai-chat-reconstruction-v1-base64",
  "export_created_at": "ISO-8601 timestamp or null",
  "source_platform": "platform name or unknown",
  "conversation_title": "title or null",
  "timestamp_policy": "native | estimated | mixed | unavailable",
  "transcript": [],
  "analysis_summary": "",
  "audit": {
    "unsupported_claims": [],
    "contradictions": [],
    "hallucination_risks": [],
    "follow_up_tasks": []
  }
}

For each transcript message, use this object shape:
{
  "sequence_index": 0,
  "role": "user | assistant | system | tool | unknown",
  "timestamp": "native ISO-8601 timestamp or null",
  "timestamp_estimated": "estimated ISO-8601 timestamp or null",
  "confidence": "high | medium | low",
  "content_base64": "base64-encoded UTF-8 message body",
  "content_preview": "first 160 characters only, JSON-escaped",
  "attachments": [],
  "notes": []
}

Rules:
- `content_base64` is required for every message.
- `content_preview` is only a preview and may be truncated.
- Preserve roles exactly when known.
- Preserve original order.
- Do not silently correct spelling, equations, code, or wording.
- Do not invent timestamps. If timestamps are unavailable, use null and explain in notes.
- Mark estimated timestamps with low or medium confidence.
- Put mathematical, legal, medical, financial, or technical correctness concerns in `audit`, not in the transcript.
- Do not claim any proof, theorem, setup command, or citation is valid unless it has been independently verified.
- If you cannot base64 encode accurately, return a JSON array of messages where `content_base64` is null and add `"export_error": "base64 encoding unavailable"` at the top level.

Before finalizing, internally check that the output parses as strict JSON.
Return only the JSON object.
```

## Validation checklist

A reconstructed export is usable only if all of the following are true:

- the pasted text parses as strict JSON;
- every message has a role;
- every message has a sequence index;
- every message has either `content_base64` or an explicit export error;
- raw content is not silently corrected;
- any estimates are labeled;
- audit claims are separated from transcript content.

## Failure handling

If the generated export still fails strict JSON parsing:

1. save the pasted output as a broken source artifact in the private vault;
2. do not edit the raw pasted output in place;
3. run a repair pass into a separate normalized file;
4. record the repair operation and original digest;
5. treat the repaired file as derivative, not as the original source.
