# Publication Assets

The complete text-only web edition is committed to this repository. The designed binary editions are intended for attachment to a tagged GitHub release rather than committed directly to the Git history.

| File | Format | SHA-256 |
|---|---|---|
| `SoQuarky_System_Dissertation.pdf` | PDF | `8bbeee9ebd69bc563a48f6101e051b75087594c2040fc9ac987490d145ee20e3` |
| `SoQuarky_System_Dissertation.docx` | Microsoft Word | `76428de716666f3c94a0233f5a5e3d03bb9ea2e7abd4c87c075666a5030368cb` |

## Release procedure

1. Verify each local file against the checksum above.
2. Create a version tag matching `CITATION.cff`, initially `v1.0.0`.
3. Create a GitHub Release from that tag.
4. Attach both binary files without renaming them.
5. Copy the checksums into the release notes.
6. Verify that the release URLs download successfully.
7. Update the publication website with permanent release links.

The checksums identify the editions generated on July 16, 2026. Any substantive edit requires a new version and new checksums.
