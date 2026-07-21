# Steven Owens / @soquarky

This repository is the public life, work, book, and publication home of **Steven Michael Allen Owens / @soquarky**.

It presents:

- a public autobiography and accomplishment record
- a chronological first-person memoir-novel project
- **The SoQuarky System**, an independent dissertation-style monograph
- an evidence-aware map of the `artistso` GitHub portfolio
- a static public website configured for Netlify
- correction, privacy, source-control, and claim-state protocols

> **Scope note:** This is an independent public record and scholarly portfolio study. It is not represented as a degree awarded by an accredited university. First-person testimony is identified as testimony; repository claims are identified as repository claims; scientific and medical proposals are not treated as validated merely because they contain equations, simulations, code, or publication-style formatting.

## Public architecture

- `index.html` — public landing page centered on Steven Owens and the larger authorship system
- `life.html` — visual life-and-work page
- `LIFE_AND_WORK.md` — public autobiography and accomplishment record
- `novel.html` — public memoir-novel project page
- `novel/` — timeline, outline, voice rules, source ledger, model policy, and chapter workspace
- `MANUSCRIPT.md` — web-readable dissertation-style monograph
- `data/repositories.json` — census of 23 public repositories
- `docs/AI_CHAT_ARCHIVE_INGESTION.md` — private-source ingestion and public-promotion protocol for historical AI chats
- `docs/AI_CHAT_EXPORT_PROMPT.md` — robust base64 prompt for reconstructed AI-chat exports
- `schemas/chat-archive-manifest.schema.json` — machine-readable package manifest for private chat archives
- `schemas/ai-chat-reconstruction.schema.json` — schema for reconstructed chat exports using base64 message bodies
- `CITATION.cff` and `codemeta.json` — machine-readable publication metadata
- `netlify.toml` — zero-build Netlify configuration
- `.github/ISSUE_TEMPLATE/` — correction and evidence workflows
- `PRIVACY.md` — mandatory private-source/public-output boundary

## Memoir-novel method

The provisional book title is **The Life I Built**. The book is organized as a chronological first-person memoir-novel with 18 provisional chapters.

The production order is:

1. place the event in `novel/TIMELINE.md`
2. record its sources and confidence in `novel/SOURCE_LEDGER.md`
3. draft in Steven's first-person voice
4. check the draft against `novel/VOICE.md`
5. verify dates, sequence, names, and quotations
6. publish only after Steven approves the wording

The project prohibits invented dialogue, invented motives, composite people presented as real, unsupported biographical facts, and generic inspirational filler.

## Hugging Face assistance

Hugging Face models may assist with chronology checks, repetition detection, outline comparison, and constrained line editing. They are not biography sources and may not generate memories or fill timeline gaps. See [`novel/HUGGING_FACE.md`](novel/HUGGING_FACE.md).

The current recommended open-model editing option is `Qwen/Qwen2.5-7B-Instruct`, with `Qwen/Qwen3-8B` as a larger optional diagnostic model when suitable hardware is available. The book remains fully usable without remote paid inference.

## What the public record covers

The public record connects the person to the work across:

- SoCreate, Nexus Canvas, InkFrame, and InkFrame v5 / The Glass Horizon
- independent quantum-information and gravitational-bounce research programs
- SynapShield as a speculative biomedical modeling project
- Gutty / The Dangle Axiom as executable mathematical satire
- social video, livestreaming, art, music experiments, podcasting, commentary, and advocacy
- AI-assisted development governed by human purpose, review, and evidence

## Claim-state lattice

| Level | Meaning |
|---|---|
| C0 | Idea, aspiration, or informal concept |
| C1 | Written specification or design record |
| C2 | Implemented code or executable artifact |
| C3 | Automated tests, CI, benchmark, or internal validation |
| C4 | Independent reproduction or external technical review |
| C5 | Domain validation, peer review, clinical validation, field validation, or equivalent |

The lattice prevents plans, implementations, simulations, tests, replications, and real-world results from being presented as interchangeable.

## Privacy boundary

This is a **public-output repository**, not the raw Life OS source vault. Do not commit medical or benefits records, private uploads, exact contact or location data, account exports, private-person files, inbox captures, credentials, or unreviewed autobiographical evidence. See [`PRIVACY.md`](PRIVACY.md).

Visibility is created through approved summaries, public project evidence, dated milestones, and clear testimony labels—not through indiscriminate disclosure of private documents.

## Historical AI chat archives

Historical AI conversations should be preserved as original JSON or native platform exports in an encrypted local archive or genuinely private repository. Do not convert machine-readable exports to PDF, and do not commit raw chat archives to this public repository.

Use [`docs/AI_CHAT_ARCHIVE_INGESTION.md`](docs/AI_CHAT_ARCHIVE_INGESTION.md) for the batch-ingestion workflow, [`docs/AI_CHAT_EXPORT_PROMPT.md`](docs/AI_CHAT_EXPORT_PROMPT.md) for reconstructed chat exports, [`schemas/chat-archive-manifest.schema.json`](schemas/chat-archive-manifest.schema.json) for package integrity metadata, and [`schemas/ai-chat-reconstruction.schema.json`](schemas/ai-chat-reconstruction.schema.json) for base64 transcript validation. Only reviewed, redacted, provenance-preserving derivatives may be promoted into this public corpus.

## Local development

No package installation or build step is required.

```bash
python -m http.server 8080
```

For Netlify CLI development:

```bash
netlify dev
```

## Netlify deployment

The Netlify project **`soquarky-system`** has been created and the production name `soquarky-system.netlify.app` is reserved. The repository is configured as a zero-build static site with the repository root as its publish directory.

A production deploy still requires one of these secure operations:

- connect `artistso/stevenowens` to the Netlify project through the Netlify dashboard, or
- run a deployment with a Netlify authentication token stored as a secret outside Git history

Never commit a Netlify token or one-time deployment credential to this repository.

## Corrections and evidence

Use GitHub Issues to report factual corrections, repository-classification corrections, accessibility defects, biographical corrections, timeline corrections, or evidence that changes a C0–C5 classification.

## Authorship

**Steven Michael Allen Owens**  
Public identity: **@soquarky**  
GitHub corpus: [artistso](https://github.com/artistso)

## License

Copyright © 2026 Steven Michael Allen Owens. All rights reserved. See `LICENSE.md`.
