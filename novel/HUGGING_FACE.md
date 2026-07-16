# Hugging Face Assistance Policy

Hugging Face models may assist with structure, comparison, and line editing. They are not sources of biography facts.

## Models identified during setup

- [Qwen/Qwen2.5-7B-Instruct](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct) — recommended general-purpose local editor when sufficient hardware is available.
- [Qwen/Qwen3-8B](https://huggingface.co/Qwen/Qwen3-8B) — larger optional model for outline comparison and chapter diagnostics.
- [kixlab/DiscoverLLM-creative-writing-Qwen3-8B](https://huggingface.co/kixlab/DiscoverLLM-creative-writing-Qwen3-8B) — experimental creative-writing adapter; never use it to add events, dialogue, or motives.

## Allowed tasks

- compare two chapter structures
- identify repeated sentences
- flag unclear chronology
- extract dates and named projects from approved text
- shorten padded language
- propose alternate sentence order
- check whether a draft follows `VOICE.md`

## Prohibited tasks

- generating memories
- filling timeline gaps with plausible events
- inventing dialogue
- making psychological or medical conclusions
- turning speculation into fact
- publishing model output without Steven's review

## Prompt pattern

> Edit only the supplied text. Preserve the author's meaning and first-person voice. Remove repetition and filler. Do not add facts, dialogue, motives, diagnoses, dates, or sensory details. Mark any unclear chronology with `[VERIFY]`.

## Compute status

Model discovery is available through the connected Hugging Face Hub. Hugging Face Jobs could not run during setup because the connected account did not have sufficient prepaid compute credit. The book workflow therefore remains usable without paid remote inference.
