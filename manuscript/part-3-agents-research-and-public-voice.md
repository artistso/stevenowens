# Agentic Authorship: Human Vision, Machine Labor, Public Trace

> *No AI is embedded in InkFrame itself. Agent Mode drives the repo from outside.* **— InkFrame v5 README**

## 7.1 AI outside the canvas

The most conceptually precise AI position in the portfolio is the distinction between AI in production and AI in the product. InkFrame explicitly rejects AI inside the artwork while documenting agent workflows outside the application. This position avoids a false binary. The studio can use AI to scaffold modules, write tests, inspect CI, revise documentation, and manage releases without making generative inference a condition of drawing.

This boundary is philosophically significant. The user’s mark remains a direct consequence of hand, tool, and rendering system. AI contributes to the environment in which the mark is made, not to the semantic content of the mark. The distinction will not resolve every controversy, but it provides a coherent basis for consent and attribution.

## 7.2 The repository as a multi-agent workplace

The READMEs name Arena AI, Jules, GitHub CLI agents, and external workflows as collaborators or intended operators. The repository is therefore designed not only for human contributors but for machine-readable ramp-up. AGENT files, canonical roadmaps, CLIs, release checks, and deterministic commands reduce the context required for a new agent to act. This is a genuine software-engineering innovation at the scale of an individual studio.

Recent empirical research suggests that coding-agent adoption on GitHub became broad within months, with agent-assisted commits tending to be larger and focused on features and bug fixes (Robbes et al. 2026). Another large-scale study found substantial differences between agentic and human pull requests in commit counts and files touched (Ogenrwot and Businge 2026). These findings make the SoQuarky workflow timely, but they also explain why repository governance matters. Larger changes are harder to review, especially when the human author is directing several agents across branches.

## 7.3 Authorship is direction plus acceptance

In agentic software production, authorship cannot be reduced to keystrokes. The human author selects the problem, defines the values, chooses among architectures, rejects outputs, accepts risk, and publishes the result. Agents contribute implementation labor, synthesis, and sometimes design alternatives. The resulting authorship is closer to directing, editing, and systems architecture than to solitary typing.

This does not absolve the human author of technical responsibility. Publication is an act of acceptance. If an agent invents a dependency, copies incompatible code, exposes a secret, or marks a stub complete, the repository owner remains responsible for the merged state. The portfolio’s strongest future practice is therefore a visible chain: issue or specification, agent branch, tests, review summary, human acceptance, and release evidence.

## 7.4 Governance requirements

- Least-privilege tokens and branch-scoped permissions for agents.

- No secrets in prompts, READMEs, issue bodies, or generated archives.

- Required CI for tests, license checks, dependency review, and documentation links.

- Small pull requests with one claim of completion at a time.

- A provenance note identifying substantial agent contribution without pretending the agent is legally responsible.

- Human review of every status badge, scientific claim, and release artifact.

This governance does not diminish the experimental character of the studio. It protects it. Agentic speed is valuable only when the archive remains intelligible after the conversation that produced it has disappeared.

CHAPTER 8

# Speculative Science and the Discipline of Claim States

> *A simulation is evidence about a model, not automatic evidence about the world.* **— Epistemic rule**

## 8.1 Three scientific modes

The research repositories operate in three distinct modes. The quantum-gravity work seeks formal constraints on information localization and recoverability in bounce models. The whitepapers repository develops validators, technical notes, dimensional inference, and reproducible publication workflows. SynapShield proposes a biomedical hydrogel intervention and presents PDE simulations, publication metadata, and clinical-style rhetoric. Gutty’s Dangle Axiom uses mathematics as satire, moving between trigonometry, bridges, robotics, fluid dynamics, and a comedic “ego” model.

These modes should not be evaluated by one standard. Formal quantum work is judged by definitions, assumptions, proofs, counterexamples, and relation to literature. Biomedical intervention claims require biological plausibility, materials characterization, toxicology, preclinical evidence, regulatory pathways, and clinical validation. Satirical mathematics is judged by whether the formal play is internally clear and whether the joke is honestly labeled. The current portfolio sometimes places all three behind the same visual language of equations, badges, tests, and “validated” status. The dissertation’s claim-state lattice is designed to prevent that visual similarity from becoming epistemic confusion.

## 8.2 The claim-state lattice

| **State**                   | **Meaning**                                      | **Permitted language**             | **Required evidence**                                 |
|-----------------------------|--------------------------------------------------|------------------------------------|-------------------------------------------------------|
| C0 Concept                  | Idea, analogy, or desired mechanism              | proposes, imagines, hypothesizes   | Clear problem and assumptions                         |
| C1 Formalized               | Equations, schema, or algorithm defined          | defines, derives under assumptions | Notation, dimensions, derivation                      |
| C2 Implemented              | Executable artifact exists                       | implements, computes               | Code, version, environment                            |
| C3 Internally tested        | Tests or simulations pass specified checks       | passes test X in environment Y     | Test code, logs, seeds, expected results              |
| C4 Independently reproduced | External party reproduces result                 | independently reproduced           | Independent repository or report                      |
| C5 Domain validated         | Real-world or field-specific validation achieved | validated for stated domain        | Appropriate empirical, clinical, or operational study |

## 8.3 Quantum recoverability

The quantum-gravity project’s strongest reformulation is its movement away from metaphors of uniformly distributed information and toward operational recoverability. Recoverability asks a concrete question: given a channel, subsystem, algebra, or observer restriction, which information can be reconstructed, with what error, and under which dimensional or central constraints? This vocabulary belongs to quantum information theory and can be stress-tested first on controlled channels before being applied to speculative gravitational bounces.

The methodological sequence should remain conservative. Define the channel and code space. Test erasure and amplitude-damping toy models. State recovery metrics. Separate finite-dimensional obstructions from gravitational interpretation. Only then connect results to black-to-white-hole or bounce scenarios. The value of this program is not that it has already solved quantum gravity; it is that it converts a broad intuition into falsifiable subproblems.

## 8.4 SynapShield

SynapShield is rhetorically the most consequential project because its README presents a proposed intervention for Parkinson’s disease, a long-duration hydrogel, drug release, alpha-synuclein trapping, numerical reductions, a medRxiv submission claim, a pending DOI, and “passed” validation language. The repository contains simulations and formal models, which can be valuable. What those simulations establish, however, is behavior inside specified equations and parameters. They do not establish injectability, long-term biocompatibility, drug stability, absence of systemic toxicity, disease interception, or clinical efficacy.

The project should therefore be reframed as a computational concept study. Every result should identify parameter sources, uncertainty ranges, mesh or solver convergence, sensitivity analysis, and failure modes. Publication badges should not imply acceptance or a DOI before those exist. The medical ambition can remain intact while the language becomes more exact: “simulated reduction under stated model assumptions” is stronger scholarship than “intercepts Parkinson’s disease” because it identifies the actual evidence.

## 8.5 The Dangle Axiom

Gutty demonstrates a different path from speech to formal artifact. A humorous line—“the wrangle of the angle is how one knows the lengths of their dangle”—becomes a repository containing trigonometric relations, engineering examples, a CLI, and tests. Its originality lies in the translation itself. It turns social-media absurdism into executable literature.

The repository should be labeled computational satire or mathematical comedy. Some equations may be standard identities; some cross-domain extensions may be simplified; the “human ego simulation” is not a validated cognitive-science model. Clear labeling would make the project more defensible and funnier. Satire loses little by admitting it is satire; it gains freedom from the burden of pretending to be an enterprise engineering framework.

## 8.6 Research integrity as creative infrastructure

Claim discipline is not an external academic constraint imposed on creativity. It is a creative technology. Once each statement carries a state, the portfolio can be more ambitious because readers know where imagination ends and evidence begins. A speculative hypothesis can be published early. A simulation can be celebrated. A negative result can become a contribution. The archive becomes cumulative rather than promotional.

CHAPTER 9

# Social Media as Laboratory, Stage, and Archive

> *The live post is not merely promotion; it is often the first prototype.* **— Media-theory finding**

## 9.1 A distributed public identity

The SoCreate README explicitly connects the developer identity to Soquarky, FunFYP, FPY.Lovely, Soquarky.Click, and artistso.com. This multiplicity is not unusual for a creator, but in this corpus the aliases perform different institutional functions. GitHub stores durable technical artifacts. Social platforms host speech, demonstrations, comedy, criticism, and audience interaction. Websites promise a canonical public face. The handle @soquarky operates as a bridge across those surfaces.

The dissertation’s inability to retrieve a complete post archive is itself analytically important. Platform speech is fragile. Search indexing is inconsistent, access can require authentication, and posts may be difficult to export in a form that preserves context. GitHub, by contrast, offers versioned files and permanent URLs. The portfolio’s ideas will remain historically legible only if important social-media material is periodically converted into an owned archive.

## 9.2 The post-to-repository pipeline

Gutty documents a post-to-repository pipeline: a spontaneous June 2026 livestream phrase becomes equations, application domains, CLI commands, and tests. Public improvisation generates a candidate concept; GitHub performs secondary formalization.

Creative software follows the same pattern more quietly. Interface metaphors, names, and product philosophies circulate conversationally before entering roadmaps or READMEs. Social media functions as ideation, user research, naming laboratory, and motivational accountability. Because live speech can move into technical documentation too quickly, the pipeline needs a deliberate translation stage.

## 9.3 Genres of the @soquarky public voice

- Demonstration: showing a build, interface, drawing, animation, or technical concept.

- Improvisation: generating phrases, characters, jokes, or theories in real time.

- Testimony: narrating personal experience and asking the public to witness it.

- Advocacy: criticizing institutions, procedures, data practices, or coercive systems.

- Instruction: explaining tools, workflows, or technical ideas to an audience.

- Recruitment: inviting collaborators, funders, testers, or supporters into a project.

A coherent strategy should preserve these genres rather than flatten them into one feed. Demonstrations need proof and links; testimony needs context and care; advocacy needs sources; comedy needs room to remain absurd; instruction needs searchable archives. Playlists, site sections, or labels can keep the unified handle intelligible.

## 9.4 Social media as peer environment

The SoQuarky studio often receives feedback through live audiences and AI conversations rather than laboratories, seminars, or disciplinary review. This is fast and available, but not equivalent to domain peer review. Audience attention can identify resonance, not mathematical correctness or biomedical efficacy. AI can generate objections and tests, not independent accountability within the same production loop. Social response is formative evidence; external expert review is validation evidence.

## 9.5 The owned archive

The recommended archive is a repository or static site with dated transcripts, captions, screenshots, platform URLs, project links, and notes on what each post generated. It would turn ephemeral posts into a research notebook and let future studies analyze the sequence rather than infer it from surviving artifacts.

CHAPTER 10

# Autobiography, Advocacy, and Public Witness

> *Personal experience is data, but not all personal statements are independently verified facts.* **— Autoethnographic boundary**

## 10.1 Why testimony enters technical documents

The portfolio repeatedly treats software as evidence of personhood, memory, competence, endurance, and moral claim. The personal statement embedded in the InkFrame v5 README makes this explicit: the application is presented not only as a tool but as something created through adversity and given publicly so the author will be remembered. A separate creator-supplied article frames criticism of the 988 crisis system, data practices, escalation procedures, and coercive intervention as first-person public-interest commentary.

From an autoethnographic perspective, this fusion is intelligible. Autoethnography connects personal experience to cultural and institutional structures and can challenge dominant scripts (Ellis, Adams, and Bochner 2011). The repository becomes a site where a personal narrative and a technical artifact authenticate one another: the story explains why the software matters, and the software demonstrates continuing agency.

## 10.2 The ethical cost of fusion

The same fusion can expose the author and obscure the product. A person who arrives to evaluate an animation application may encounter traumatic claims before build instructions. A collaborator may not know whether to respond as engineer, witness, advocate, clinician, or friend. Search engines may index sensitive testimony indefinitely. Technical criticism may feel like disbelief of the person, while concern about the statement may be interpreted as rejection of the software.

The solution is architectural separation, not erasure. The repository homepage should explain the product, evidence, build, license, privacy, and status. A clearly linked AUTHOR_STATEMENT.md can preserve the testimony in the author’s own words with a content note and explicit evidentiary framing. A public-interest essays repository can hold longer advocacy. Separation gives each text a proper audience and prevents one genre from involuntarily governing the interpretation of another.

## 10.3 Advocacy and data sovereignty

The critique of scripted crisis response and data extraction belongs to the same ethical world as local-first creative software. Both resist systems in which institutions collect language, classify a person, and control the conditions of participation. In one domain the issue is a user’s artwork and account; in another it is a caller’s words and institutional record. The specific factual claims require independent investigation, but the thematic continuity is clear: sovereignty over one’s own information is a foundational concern.

This continuity can become a serious research program in humane systems design. What would crisis-response software look like if it preserved caller agency, made scripts transparent, minimized data collection, and allowed correction of institutional summaries? What would consent and provenance mean in a high-stakes conversation? The portfolio’s technical experience with local storage, audit trails, and user-controlled reports could support prototypes—provided that legal, clinical, and ethical experts participate from the beginning.

## 10.4 Humor, cats, and affective infrastructure

The wider creator identity includes absurdist comedy, affectionate animal-centered material, detective parody, and playful world-building. These are not peripheral to the technical portfolio. They provide affective infrastructure: reasons to make, recognizable characters, and a public language less brittle than formal research prose. The Dangle Axiom demonstrates how humor can generate code. InkFrame’s animated-cat demo demonstrates how intimate subject matter can demonstrate a technical feature.

A coherent portfolio should not force comedy to justify itself as research. It should recognize that humor maintains audience, memory, and creative continuity. The institutional task is to label genres without ranking them.

CHAPTER 11
