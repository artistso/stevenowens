# Conclusion

The twenty-three repositories of artistso and the public identity @soquarky form a coherent body of work when read as a system rather than as isolated claims. The system’s center is creative software: a long, iterative effort to build a free, local-first, stylus-native drawing and animation environment whose interface orbits the canvas instead of colonizing it. Its most mature expression is InkFrame v5 and the Glass Horizon design system. Its developmental history is preserved across SoCreate, InkFrame, Nexus Canvas, and smaller prototypes.

Around that center are research, satire, advocacy, and autobiography. The quantum-information work seeks to convert metaphoric intuitions into operational recoverability constraints. SynapShield demonstrates the productive and dangerous power of simulation rhetoric: it can organize a speculative biomedical idea, but it cannot substitute for biological or clinical validation. Gutty demonstrates how public humor can become executable formal play. Public-interest writing and personal statements demonstrate that the author uses technical production as a form of witness and agency.

The corpus’s weakness is not lack of imagination. It is insufficient separation among epistemic states and textual genres. Ideas, implementations, tests, simulations, personal accounts, and real-world claims sometimes appear with the same confidence and on the same page. The remedy is not to make the work timid. It is to make its evidence architecture as inventive as its interface architecture.

The SoQuarky system can therefore be stated as a compact constitution. The user owns the work. The canvas remains primary. The interface should serve the body. AI may assist the studio but should not invisibly appropriate the artwork. Public speech can generate research, but publication must translate intensity into evidence. Personal testimony should be preserved with dignity and context. Every repository should say what it is, what it is not, what has been tested, and what remains possible.

Under that constitution, the portfolio becomes more than a collection of experiments. It becomes an independent studio with a research program, a flagship product, an archive, and a defensible public voice.

# Appendix A. Complete Repository Census

The following table records all twenty-three public repositories returned for the connected GitHub owner affiliation on July 15, 2026. Classification reflects the available metadata, README evidence, and known project lineage. “Underdocumented” means that the audit did not find enough public explanation to make a stronger claim.

| Repository | Size KB | Category | Audit interpretation | Status class |
|---|---:|---|---|---|
| Astrothorge | 3,171 | Experimental / underdocumented | Title-only README; substantive repository, limited public explanation | Legacy / supporting |
| Constraints-on-Information-Partitioning-in-Quantum-Gravitational-Bounces | 181 | Quantum-information research | Proposal and formalization program; README is minimal | Research / concept |
| Draw | 442 | Creative-software prototype | Early drawing application / experiment | Legacy / supporting |
| gutty | 1,816 | Satirical computational essay | Dangle Axiom: mathematical play, simulation, and social-media-derived humor | Satirical formalization |
| inkframe | 8,402 | Native Android creative software | Kotlin, Compose, OpenGL ES; active predecessor line | Active / substantial prototype |
| Inkframes | 225 | Legacy creative-software iteration | Early InkFrame lineage | Legacy / supporting |
| inkframesv5 | 37,809 | Mature creative-software system | Current flagship: browser/PWA/Android, offline-first, radial interface | Canonical active |
| inkseige | 39 | Minimal experiment | Underdocumented concept repository | Minimal / underdocumented |
| mono | 0 | Empty scaffold | No substantive public corpus at audit date | Empty scaffold |
| nexus_canvas | 5,507 | Architecture manifesto / prototype | Rust + React Native + ECS vision for digital art | Architecture manifesto |
| Pages | 0 | Empty scaffold | No substantive public corpus at audit date | Empty scaffold |
| quantumg | 59 | Creative-software prototype | Drawing/animation application despite quantum-oriented name | Minimal / underdocumented |
| quantum_frames | 90 | Creative-software prototype | Early animation-frame experiment | Minimal / underdocumented |
| qwess | 63 | Minimal / underdocumented | Insufficient public documentation for firm classification | Minimal / underdocumented |
| Risingsmoke | 4 | Minimal / underdocumented | Insufficient public documentation for firm classification | Minimal / underdocumented |
| socreate | 11,395 | Comprehensive Android art system | Kotlin/MVI feature-rich design and implementation corpus | Active / substantial prototype |
| socreateapp | 5,758 | Build-and-release infrastructure | Android APK/GitHub Actions template lineage | Legacy / supporting |
| SoCreatev1 | 19,673 | AI Studio / legacy iteration | Large early iteration; generic AI Studio deployment shell in README | Legacy / supporting |
| SoCreatev2 | 15,035 | Functional Android art prototype | Local-first Phase 1 drawing, frames, save/load, OpenGL tiles | Active / substantial prototype |
| SoCreatev3 | 0 | Empty scaffold | No substantive public corpus at audit date | Empty scaffold |
| stevenowens | 0 | Empty identity scaffold | No substantive public corpus at audit date | Empty scaffold |
| synapshield | 1,890 | Speculative biomedical research | Hydrogel/PDE concept; simulation claims require independent validation | Research / concept |
| whitepapers | 85 | Research tooling and papers | Validator and reproducible technical-note workflow | Research / concept |

Total GitHub-reported size: 111,644 KB. Repository size is not a measure of correctness or originality.

# Appendix B. Evidence Classification Protocol

Every active repository should include a `CLAIMS.md` file or machine-readable claims registry. Each claim should have a unique identifier, exact text, state, evidence, owner, date, and next validation step. Claims should be small enough to test. “The app is professional” is not testable. “The application exports a 1920 × 1080 MP4 at 24 fps from a 120-frame project on device X without a crash” is testable.

- **IMPLEMENTED:** links to source path and release or commit.
- **TESTED:** links to test name, workflow run, environment, and expected result.
- **DECLARED:** identifies a design commitment or roadmap item without implying completion.
- **SPECULATIVE:** identifies a hypothesis, simulation, analogy, or proposed mechanism.
- **AUTOBIOGRAPHICAL:** identifies first-person testimony and does not present it as independently adjudicated fact.
- **SATIRICAL:** identifies humor, parody, or fictional formalization.

README status tables should be generated from this registry. Badges should link to evidence. When evidence changes, the registry changes first and the public status is regenerated. This reverses the current tendency for prose to outrun implementation.

# Appendix C. Recommended Portfolio Architecture

A canonical `artistso/portfolio` or equivalent hub should contain the following structure:

```text
README.md          # One-page public map
PROJECTS.md        # Canonical projects and status
RESEARCH.md        # Papers, validators, claim states
PUBLICATIONS.md    # Located records only
SOCIAL_ARCHIVE.md  # Platform links and owned transcripts
ETHICS.md          # Local-first, privacy, AI, testimony rules
SECURITY.md        # Agent and release governance
archive/           # Superseded project map
profiles/          # Short bios for each public identity/brand
site/              # Static portfolio source
```

Each active repository should use a common header: purpose, canonical status, evidence level, latest release, successor/predecessor, privacy model, AI role, and contact. Legacy repositories should begin with a banner linking to the successor. Research repositories should begin with a claim-state warning appropriate to the domain.

# Appendix D. Publication Roadmap

| Priority | Working title | Venue type | Minimum evidence package |
|---|---|---|---|
| Release paper | InkFrame: A Local-First Radial Animation Studio for Android and the Web | Software paper / HCI demo | Release, architecture, usability protocol, privacy audit |
| Interface study | Orbital Timelines for Frame-by-Frame Animation | HCI workshop or preprint | Controlled comparison with linear timeline |
| Methods note | Claim-State Registries for AI-Assisted Independent Research | Software-engineering / research-integrity note | Schema, generator, case studies |
| Agentic practice | Directing Coding Agents in a One-Person Public Studio | Empirical case study | PR corpus, review metrics, failure taxonomy |
| Quantum note | Recoverability Bounds in Controlled Bounce-Channel Models | Mathematical physics / quantum information | Definitions, toy channels, theorem or obstruction, reproducible code |
| Biomedical concept | Sensitivity Analysis of a Hypothetical Gut-Brain Hydrogel Model | Computational concept report | Uncertainty, solver convergence, parameter provenance, explicit nonclinical scope |
| Digital humanities essay | From Livestream Postulate to Executable Satire | Media studies / creative coding | Gutty case study and social archive |

# References

Agre, Philip E. 1997. “Toward a Critical Technical Practice: Lessons Learned in Trying to Reform AI.” In *Social Science, Technical Systems, and Cooperative Work*, edited by Geoffrey C. Bowker, Susan Leigh Star, William Turner, and Les Gasser. Mahwah, NJ: Lawrence Erlbaum.

Chen, Zhi, Wei Ma, and Lingxiao Jiang. 2025. “Unveiling Pitfalls: Understanding Why AI-Driven Code Agents Fail at GitHub Issue Resolution.” arXiv:2503.12374.

Dabbish, Laura, Colleen Stuart, Jason Tsay, and Jim Herbsleb. 2012. “Social Coding in GitHub: Transparency and Collaboration in an Open Software Repository.” *Proceedings of CSCW 2012*.

Ellis, Carolyn, Tony E. Adams, and Arthur P. Bochner. 2011. “Autoethnography: An Overview.” *Forum Qualitative Sozialforschung / Forum: Qualitative Social Research* 12 (1).

Kleppmann, Martin, Adam Wiggins, Peter van Hardenberg, and Mark McGranaghan. 2019. “Local-First Software: You Own Your Data, in Spite of the Cloud.” *Proceedings of the 2019 ACM SIGPLAN International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software*.

Nissenbaum, Helen. 2001. “How Computer Systems Embody Values.” *Computer* 34 (3): 118–120.

Ogenrwot, Daniel, and John Businge. 2026. “How AI Coding Agents Modify Code: A Large-Scale Study of GitHub Pull Requests.” arXiv:2601.17581.

Robbes, Romain, Théo Matricon, Thomas Degueule, Andre Hora, and Stefano Zacchiroli. 2026. “Agentic Much? Adoption of Coding Agents on GitHub.” arXiv:2601.18341.

Rosner, Daniela K. 2018. *Critical Fabulations: Reworking the Methods and Margins of Design*. Cambridge, MA: MIT Press.

Star, Susan Leigh, and Karen Ruhleder. 1996. “Steps Toward an Ecology of Infrastructure: Design and Access for Large Information Spaces.” *Information Systems Research* 7 (1): 111–134.

Suchman, Lucy A. 1987. *Plans and Situated Actions: The Problem of Human-Machine Communication*. Cambridge: Cambridge University Press.

artistso. 2026. “InkFrame Studio — The Glass Horizon.” GitHub repository README, `artistso/inkframesv5`. Accessed July 15, 2026.

artistso. 2026. “InkFrame Studio.” GitHub repository README, `artistso/inkframe`. Accessed July 15, 2026.

artistso. 2026. “SoCreate — Animate Your Imagination.” GitHub repository README, `artistso/socreate`. Accessed July 15, 2026.

artistso. 2026. “SoCreate — Professional Drawing & Animation Studio for Android.” GitHub repository README, `artistso/SoCreatev2`. Accessed July 15, 2026.

artistso. 2026. “Project Abstract: Nexus Canvas v2.0.” GitHub repository README, `artistso/nexus_canvas`. Accessed July 15, 2026.

artistso. 2026. “SynapShield: Parkinson’s Interception Technology.” GitHub repository README, `artistso/synapshield`. Accessed July 15, 2026. Cited as a repository claim source, not as independent clinical validation.

artistso. 2026. “The Dangle Axiom (TDA) v2.0.0.” GitHub repository README, `artistso/gutty`. Accessed July 15, 2026.

artistso. 2026. “Constraints on Information Partitioning in Quantum-Gravitational Bounces.” GitHub repository, `artistso/Constraints-on-Information-Partitioning-in-Quantum-Gravitational-Bounces`. Accessed July 15, 2026.

artistso. 2026. “whitepapers.” GitHub repository, `artistso/whitepapers`. Accessed July 15, 2026.

Owens, Steven Michael Allen. 2026. Creator-supplied first-person public-interest commentary concerning the 988 crisis-response system. Treated in this dissertation as testimony and criticism, not independently adjudicated fact.

## Repository URLs

The machine-readable census in [`data/repositories.json`](../data/repositories.json) contains the complete set of repository URLs and evidence classifications used by the publication site.
