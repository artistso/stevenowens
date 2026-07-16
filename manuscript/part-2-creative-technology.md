# Repository Archaeology: Twenty-Three Public Repositories

> *The archive is not a pile. It is a sequence whose order has been obscured.* **— Repository-archaeology premise**

## 3.1 The corpus at a glance

At first glance, the repository names suggest discontinuity: SoCreate, InkFrame, Nexus Canvas, Draw, quantumg, quantum_frames, synapshield, gutty, and multiple nearly empty titles. Read longitudinally, however, the portfolio resolves into lineages. The largest is a creative-software lineage concerned with drawing, animation, brush behavior, layers, frame timelines, stylus ergonomics, export, and release engineering. A second lineage concerns formal research and whitepapers. A third contains rhetorical or satirical experiments that translate social-media language into mathematical form. A fourth contains identity and publishing scaffolds.

The crucial archaeological finding is that repository duplication is often developmental memory. SoCreate v1, SoCreate v2, socreate, inkframe, Nexus Canvas, and inkframesv5 are not six unrelated attempts to build the same thing. They record shifts in implementation strategy: from generated shells and expansive feature lists, through a functional local-first Android core, toward a native Compose/OpenGL architecture, a Rust/ECS manifesto, and finally a web-first application shipped inside a thin Android shell. The sequence reveals changing judgments about what can be built, tested, distributed, and maintained from the available environment.

*Figure image omitted from the text-only web edition; the caption and analysis are preserved below.*

Figure 3. Reconstructed creative-software lineage.

## 3.2 Maturity is uneven but informative

InkFrame v5 is the best-documented and most internally disciplined repository in the audited corpus. Its README distinguishes the shipping WebView build from legacy native Kotlin modules, documents an external agent mode, names the absence of AI inside the artwork, specifies offline autosave, identifies supported export paths, and warns that a historical headless converter is not validated against the current archive schema. That last sentence is especially important: it demonstrates the ability to say not currently supported. In a portfolio where ambition is abundant, a precise negative statement is a mark of maturity.

SoCreate v2 occupies a different evidentiary state. Its README describes a functional Phase 1 core: actual drawing, erasing, fill, tiled OpenGL upload, onion skinning, local save/load, frames, and undo/redo. It also explicitly names limitations, including approximate tile projection and future priorities. The larger socreate repository presents a far broader feature matrix and architecture, but it also names pending Hilt wiring, pending DAOs, a stub renderer, and placeholder activities. Read together, the repositories show a recurring tension between the complete product imagined in documentation and the smaller functional core that can be defended.

Nexus Canvas is best read as an architecture manifesto. It declares a high-performance Rust, ECS, React Native, JSI, Skia, and GPU-compute system and labels many milestones complete. The document’s value lies in synthesis: it articulates event logs, dirty-rectangle caching, vector-raster hybridity, macros, CRDT-compatible collaboration, and performance governance. Its risk lies in presenting an agent instruction set and an implementation status table with similar certainty. The appropriate scholarly category is declared architecture unless tests and releases independently establish the claimed state.

## 3.3 The long tail

The long tail includes small or underdocumented repositories such as inkseige, qwess, Risingsmoke, quantumg, and quantum_frames, along with the title-only Astrothorge README. These should not be inflated into mature projects, but neither should they be deleted reflexively. They may contain naming experiments, abandoned architectures, or conceptual seeds. The correct intervention is archival triage: add a one-paragraph status note, identify whether the repository is active, superseded, preserved for history, or safe to archive, and point to the canonical successor.

Four zero-size repositories—mono, Pages, SoCreatev3, and stevenowens—currently function as empty namespace reservations. Their existence is not harmful, but unexplained emptiness increases cognitive load. Each should either receive a minimal archival README or be archived. A portfolio becomes legible not by pretending every experiment succeeded, but by telling the truth about what each artifact became.

## 3.4 Quantitative concentration and qualitative identity

The GitHub-reported aggregate size is approximately 111,644 KB. More than half of that total is concentrated in InkFrame v5 and the two largest SoCreate iterations. This concentration supports an important conclusion: creative software is not merely one interest among many. It is the material center of the portfolio. Quantum research, biomedical speculation, satire, and civic commentary are significant, but the repeated investment of code, documentation, tests, Android build infrastructure, and interface design identifies the drawing-and-animation studio as the body of work’s strongest durable spine.

That spine supplies a way to organize everything else. Scientific whitepapers can become a research division. Social commentary can become a public-interest publication division. Experimental games can become a lab. The portfolio does not require a single topic. It requires a visible constitution and a canonical map.

CHAPTER 4

# Creative Software as the Constitutional Core

> *No account, no network, no AI in your artwork.* **— InkFrame v5 README**

## 4.1 The recurring product problem

Across the creative-software lineage, the product problem remains stable: professional drawing and animation on Android should feel immediate, spatially intelligible, stylus-native, and free from recurring extraction. The target device is frequently a Samsung Galaxy Tab, and the target user is an artist who expects pressure, tilt, palm rejection, high refresh rate, large canvases, layers, onion skinning, frame timing, and reliable export. The project repeatedly compares itself to Procreate, Clip Studio Paint, Toon Boom, FlipaClip, ibisPaint, HiPaint, Aseprite, and related tools. These comparisons are sometimes rhetorically overextended, but they reveal a rigorous act of feature observation.

The corpus does not merely copy feature lists. It repeatedly asks what those applications assume about the shape of a workspace. Conventional professional software inherits the desktop: rectangular windows, docked panels, menu bars, palettes, property inspectors, and timelines. The SoQuarky lineage treats those arrangements as contingent rather than natural. The canvas should remain perceptually primary. Tools should appear around the hand, orbit the work, or withdraw into a glass-like periphery.

## 4.2 From native ambition to hybrid pragmatism

The native inkframe repository represents a technically ambitious architecture: Kotlin, Jetpack Compose, OpenGL ES 3.0, pure-Kotlin math, a document model, a paint engine, and feature modules. Its README presents a GPU-accelerated bitmap animation studio and foregrounds privacy and offline operation. This architecture is attractive because it offers direct control over rendering and Android input. It is also expensive to complete and maintain, especially when the development environment is distributed across browser sessions, GitHub Actions, and AI agents.

InkFrame v5 resolves that constraint through a striking pragmatic reversal. The shipping application is a single-file HTML build running in any browser and inside a thin Android WebView shell, while earlier Kotlin and OpenGL modules remain in the repository as tested legacy architecture. The change is not a retreat from seriousness. It is a redefinition of the minimum durable system. One codebase can run as a browser app, PWA, and APK; IndexedDB can support frequent autosave; and the UI can evolve without repeatedly rebuilding a full native rendering stack.

The repository documents this decision explicitly. The result is a useful case study in platform strategy: the most sophisticated architecture is not always the architecture with the largest number of layers. It is the architecture that can be understood, built, tested, released, and repaired by the actual studio that owns it.

## 4.3 The Glass Horizon design system

InkFrame v5 names its design system “The Glass Horizon.” The phrase condenses several recurring visual commitments: translucent or rose-quartz controls, circular or orb-like tools, a paper-white canvas, and a horizon at which interface recedes into creative space. The README’s strongest product sentence is not a benchmark. It is the description of glowing orbs fanning around the canvas while leaving the drawing unobstructed.

This design language provides the portfolio with something most independent software projects lack: a recognizable visual theory. A product can change implementation language without losing identity because its deeper identity resides in interaction geometry. The same is true of the radial timeline, circular canvas work, named brushes, and orbiting frame concepts documented in the active development history. The interface is not merely branded after implementation; the brand is a theory of implementation.

## 4.4 Feature ambition and evidentiary discipline

The creative repositories contain very large feature matrices. Such matrices are valuable for competitive analysis and agent planning, but they require status semantics. A check mark can mean implemented, specified, scaffolded, generated, visually mocked, or merely copied into a roadmap. Without a legend, the reader cannot distinguish software from intention. The mature solution is a machine-readable feature registry with fields for owner, status, tests, platform, release, and evidence link.

InkFrame v5 already points toward this discipline through its CLI, tests, release checks, workflow documentation, archive schemas, and explicit unsupported-path warnings. The dissertation recommends treating this repository as the canonical implementation and migrating defensible concepts from earlier projects into issues, design records, or archived comparative notes rather than maintaining multiple competing “complete” applications.

## 4.5 The flagship contribution

The flagship contribution is not simply a free animation app. It is a demonstration that an individual, using a tablet-oriented workflow and AI-assisted repository engineering, can construct a coherent creative environment with privacy, build automation, export, tests, and a distinctive interaction language. The claim is strongest when stated modestly. InkFrame need not “beat” every incumbent on every dimension to matter. Its research contribution is the combination of radial ergonomics, local ownership, cross-runtime portability, and explicit separation between AI-assisted development and AI-free artwork.

CHAPTER 5

# Interface Cosmology: Circles, Orbits, and the Glass Horizon

> *The interface is an argument about where attention belongs.* **— Design proposition**

## 5.1 Against the rectangle

The most original cross-project idea is an opposition to rectangular administrative space. Timelines, layer panels, toolbars, dialogs, and property sheets are usually designed as if the artist were operating an accounting system. The SoQuarky corpus repeatedly substitutes circular, radial, Fibonacci-influenced, donut, orb, and orbital structures. These forms are sometimes justified by reach, sometimes by aesthetics, and sometimes by a larger metaphor of quantum or cosmic organization. Whatever the stated origin, the repeated form indicates a stable design research program.

A circle changes interaction in three ways. First, it can place alternatives at approximately equal reach from a center point. Second, it can preserve the canvas by wrapping controls around rather than across it. Third, it can represent sequence without reducing time to a left-to-right spreadsheet. An orbital frame timeline, for example, can make looping and recurrence perceptually primary. This is especially relevant to animation, where the endpoint returns to the beginning.

## 5.2 Embodied computing

The interface research is grounded in the body. S Pen pressure, tilt, azimuth, hover, palm rejection, high refresh rate, pinch, taps, and gesture chords recur throughout the repositories. The body is not modeled as a generic mouse pointer. It is modeled as a hand drawing on glass. This orientation aligns with situated-action research: plans and menus never fully determine action because users continuously adapt to the immediate environment (Suchman 1987). The best interface therefore reduces the distance between intention, motion, and visible mark.

The named brush system extends this embodied orientation. Brushes such as Lovely Comet, Precision Ink, Expressive Echo, Animation Cleanup, Fast Gesture, and Maximum Stabilized are not merely parameter bundles. They are performative identities. Naming gives a motor behavior a memorable conceptual character. It also creates a social language through which users can discuss line quality without reciting numerical settings.

## 5.3 Circularity as brand and research hypothesis

Circularity should be treated as a testable hypothesis rather than an unquestionable signature. A radial interface may improve reach for stylus users while reducing discoverability for beginners. It may preserve canvas area while creating occlusion near the hand. An orbital timeline may make loops intuitive while making long sequences difficult to scan. The corpus has reached the point at which aesthetic conviction should be paired with interaction research.

A defensible study would compare radial and conventional layouts on task completion time, error rate, gesture travel, canvas occlusion, learnability, and subjective creative flow. Because InkFrame runs in a browser, such experiments can be instrumented locally without collecting personally identifying data. The result could become the portfolio’s strongest conventional research contribution: not a claim that circles are universally superior, but an empirical account of when orbital interfaces help artists and when they do not.

## 5.4 The horizon as governance

The “Glass Horizon” can also be read as a governance rule. The interface should be visible enough to support action and transparent enough to disappear. The same principle applies to AI agents. They should be present enough to accelerate work and transparent enough that the human author can inspect what changed. In both cases, the horizon is the boundary between support and domination.

CHAPTER 6

# Local-First Ethics and the Politics of Ownership

> *Free forever — no subscription, no purchase price, and no advertising.* **— InkFrame v5 README**

## 6.1 Architecture as moral allocation

The local-first commitment appears across SoCreate and InkFrame with unusual clarity: no account, no telemetry, no data collection, offline operation, local save files, and no mandatory AI. These are technical choices, but they also allocate power. A cloud service controls authentication, access, retention, pricing, and discontinuation. A local application gives the user a working copy, a file, and the possibility of continued use even when the developer disappears.

Kleppmann and colleagues describe local-first software through ideals including offline work, speed, longevity, privacy, and user control (2019). The SoQuarky corpus independently arrives at many of the same values, often in more categorical language. Its repeated rejection of subscriptions and advertising is not an incidental pricing preference. It is a response to a broader experience of dependency: creative work should not be held hostage by a vendor’s account system or recurring fee.

## 6.2 The productive contradiction: local-first, not local-only

The portfolio also depends heavily on networked infrastructure. GitHub stores the repositories, Actions builds APKs, agents operate through cloud interfaces, and social media supplies audience and ideation. This is not hypocrisy. It demonstrates the difference between local-first and local-only. The artwork and core creative act can remain local while publication, collaboration, and release engineering use networks.

The critical question is which copy is authoritative. InkFrame’s design makes the user’s local project authoritative while GitHub is authoritative for source and releases. This separation is sensible. The next step is to make backup and export guarantees explicit: documented file schemas, migration tests, checksums, deterministic examples, and a small reference implementation capable of reading old archives.

## 6.3 Free software and sustainability

“Free forever” is ethically powerful and economically difficult. A project can reject subscriptions without rejecting sustainability. Grants, donations, paid support, commissioned features, institutional sponsorship, optional marketplace services, and dual licensing are possible, but each changes the social contract. The strongest path for InkFrame is to preserve a complete free core while making funding visibly additive rather than coercive.

The current portfolio sometimes treats monetization and moral compromise as equivalent. A more durable formulation distinguishes extraction from exchange. Advertising based on surveillance is extractive. Locking user files behind recurring payments is coercive. Receiving funds to maintain an open tool, produce tutorials, or support institutions can be reciprocal. A dissertation-grade portfolio should articulate this distinction before financial pressure forces an improvised answer.

## 6.4 Privacy claims require tests

Privacy promises should be made auditable. For a web/PWA/Android hybrid, this means checking network requests, WebView permissions, embedded analytics, file access, export behavior, crash reporting, and update channels. A “no network” CI test can fail the build if unapproved endpoints appear. A software bill of materials can document dependencies. Privacy then becomes not only a statement in a README but a continuously tested property.

CHAPTER 7
