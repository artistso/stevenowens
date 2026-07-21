# AI Chat Archive Ingestion Protocol

## Purpose

This protocol defines how historical AI conversations are preserved, indexed, analyzed, and selectively promoted into the public `artistso/stevenowens` corpus.

The governing rule is strict:

> Raw chat exports are private source records. They do not belong in this public repository.

The public repository may contain schemas, validators, empty templates, approved summaries, source ledgers, and publication-ready derivatives. It must not contain raw account exports, private conversations, credentials, third-party personal information, or unreviewed autobiographical evidence.

## Recommended acquisition order

Use the highest-fidelity source available, in this order:

1. native platform data export;
2. complete conversation JSON exported by the platform or an archival tool;
3. a structured JSON reconstruction generated inside the original chat;
4. plain-text or Markdown transcript;
5. PDF only when no machine-readable source exists.

Do not convert valid JSON into PDF. PDF is a presentation format, not an archival interchange format. Conversion usually discards message identifiers, timestamps, role metadata, branching, attachments, model names, and reliable machine parsing.

## Private archive layout

The following layout belongs in an encrypted local archive or genuinely private repository, not in `artistso/stevenowens`:

```text
chat-vault/
  raw/
    chatgpt/
    claude/
    gemini/
    copilot/
    other/
  packages/
  normalized/
  summaries/
  manifests/
  logs/
```

### `raw/`

Store the untouched source export. Never edit it. Preserve the original filename and calculate a SHA-256 digest.

### `packages/`

Group exports into manageable ZIP archives by platform and time range. Example:

```text
chat-archive_chatgpt_2021-2023_part-001.zip
chat-archive_chatgpt_2024_part-001.zip
chat-archive_mixed_legacy_part-001.zip
```

A practical package target is approximately 50–200 MB, but content boundaries and platform upload constraints take precedence.

### `normalized/`

Store one normalized JSON document per conversation, or newline-delimited JSON (`.jsonl`) when processing very large collections.

### `summaries/`

Store machine-generated extraction records separately from source transcripts. A summary is a derivative interpretation, not a replacement for the original record.

### `manifests/`

Every package should have one manifest conforming to `schemas/chat-archive-manifest.schema.json`.

## Normalized conversation minimum

Each normalized conversation should preserve:

- stable conversation identifier;
- source platform;
- conversation title;
- creation and update timestamps when available;
- ordered messages;
- message role or author;
- message timestamp when available;
- original text without silent correction;
- attachment references and filenames;
- model name when available;
- parent or branch identifiers when available;
- source-file path and SHA-256 digest;
- explicit flags for missing or reconstructed fields.

Do not merge multiple conversations into one synthetic transcript. Preserve conversation boundaries and provenance.

## Per-chat analytical derivative

A later extraction pass may create a compact record such as:

```json
{
  "conversation_id": "source-stable-id",
  "source_sha256": "64-character digest",
  "title": "Original title",
  "date_range": {
    "start": "2024-01-01T00:00:00Z",
    "end": "2024-01-01T01:00:00Z"
  },
  "purpose": "Why this conversation existed",
  "important_facts": [],
  "decisions": [],
  "projects": [],
  "people": [],
  "claims_requiring_verification": [],
  "privacy_flags": [],
  "follow_up_tasks": [],
  "public_release_candidate": false,
  "extractor": {
    "system": "AI system name",
    "model": "model identifier",
    "generated_at": "2026-01-01T00:00:00Z"
  }
}
```

Every derivative must point back to the source conversation and source digest.

## Batch ingestion workflow

1. Collect native exports and existing chat-generated JSON files.
2. Keep the raw files unchanged.
3. Remove duplicate byte-identical files by SHA-256, while preserving a duplicate ledger.
4. Package files by platform and date range.
5. Generate a manifest for each package.
6. Validate JSON syntax, UTF-8 decoding, file sizes, and hashes.
7. Normalize conversations without rewriting their content.
8. Run per-chat extraction into separate summary records.
9. Build a cross-chat index of projects, dates, decisions, unresolved questions, and source references.
10. Review privacy and factual status before any material enters the public repository.
11. Promote only approved, redacted, provenance-preserving derivatives.

## Public promotion rules

A source-derived record may enter `artistso/stevenowens` only when all of the following are true:

- publication purpose is defined;
- private and third-party identifiers are removed;
- testimony, interpretation, repository evidence, and independently verified fact are distinguished;
- exact source provenance is retained in the private ledger;
- unsupported claims are marked conservatively;
- Steven Owens has approved the public wording.

## Recommended transfer method for AI analysis

For large collections, transfer ZIP packages containing original JSON plus a manifest. Do not paste conversations one at a time unless a single conversation requires immediate focused work.

Recommended priority:

1. one small representative package to validate the schema and extraction quality;
2. chronological or project-specific batches;
3. full-corpus indexing after the ingestion format is stable.

## Failure rules

- Never overwrite the original export.
- Never treat an AI-generated summary as the source of record.
- Never infer missing dates, speakers, quotations, or identities without marking the field as inferred.
- Never publish a raw archive merely because it has been compressed or converted to PDF.
- Never place private source data on a public branch, pull request, issue, release, or Git object.
