# Privacy and publication boundary

This repository is public. Every commit, branch, pull request, issue attachment, and Git object should be treated as potentially permanent and publicly retrievable.

## Public-output rule

Only reviewed publication material belongs here. The raw Life OS archive is a private source system and must not be copied wholesale into this repository.

## Never commit

- raw upload folders or unreviewed document dumps
- medical records, imaging reports, clinical documents, or health-insurance material
- benefits, eligibility, financial, legal, or identity documents
- exact home addresses, telephone numbers, dates of birth, government identifiers, private email addresses, or credentials
- account-history exports, raw chat archives, or platform data exports
- private-person files, relationship notes, or unsorted inbox captures
- third-party personal information without documented authorization
- sensitive autobiographical allegations presented as independently verified fact

## Public-release workflow

A record may move from private source to public output only after:

1. the publication purpose and audience are defined;
2. unnecessary identifiers and third-party information are removed;
3. testimony, repository assertions, interpretation, and independently verified facts are clearly distinguished;
4. the author explicitly approves the public version;
5. the rendered page or document is reviewed before deployment.

Prefer derived summaries over raw evidence. Store the private source in an encrypted local archive or a genuinely private repository with narrowly scoped access.

## Accidental disclosure

Deleting a file in a later commit does not remove it from Git history. If sensitive material is committed:

1. stop distribution and deployment;
2. rotate any exposed credentials or identifiers that can be changed;
3. remove the material from Git history using an appropriate history-rewrite process;
4. invalidate cached deployments and release assets;
5. document the remediation without repeating the sensitive content.

## Publication assets

Designed PDF and DOCX editions may be attached to a reviewed tagged release when they contain only approved public content. Their checksums and release procedure are maintained in `PUBLICATION_ASSETS.md`.
