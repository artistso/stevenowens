const categoryLabels = {
  "creative-technology": "Creative technology",
  research: "Research",
  experiments: "Experiments",
  publishing: "Publishing"
};

const claimStates = [
  {
    code: "C0",
    title: "Concept or aspiration",
    description: "An idea, intended capability, hypothesis, or informal proposal. It may be valuable, but it must not be reported as implemented or validated.",
    language: "Required language: proposed, intended, conceptual, or hypothesized."
  },
  {
    code: "C1",
    title: "Specification or design record",
    description: "A written architecture, formal model, roadmap, interface proposal, or research protocol exists. The specification is evidence of design work, not proof that the system operates.",
    language: "Required evidence: a dated specification, derivation, protocol, architecture document, or design artifact."
  },
  {
    code: "C2",
    title: "Implemented artifact",
    description: "Code, a build, a simulation, or an executable artifact exists. Implementation demonstrates construction, but not necessarily correctness, safety, reproducibility, or real-world efficacy.",
    language: "Required evidence: source code, versioned artifact, reproducible build instructions, or executable demonstration."
  },
  {
    code: "C3",
    title: "Internal technical validation",
    description: "Automated tests, continuous integration, numerical checks, benchmarks, or author-run validation support the implementation. This remains internal evidence.",
    language: "Required evidence: test logs, CI results, benchmark protocols, expected-value checks, or documented failure criteria."
  },
  {
    code: "C4",
    title: "Independent reproduction",
    description: "A technically capable third party has reproduced, audited, or reviewed the relevant result using sufficiently disclosed methods and artifacts.",
    language: "Required evidence: external replication, independent code review, third-party benchmark, or reproducibility report."
  },
  {
    code: "C5",
    title: "Domain validation",
    description: "The claim has passed the discipline-specific standard appropriate to its consequences: peer review, clinical validation, field testing, regulatory review, or equivalent expert scrutiny.",
    language: "Required evidence: domain-appropriate external validation."
  }
];

function createRepoCard(repo) {
  const article = document.createElement("article");
  article.className = "repo-card";
  article.dataset.category = repo.category;

  const topLine = document.createElement("div");
  topLine.className = "repo-topline";

  const category = document.createElement("span");
  category.className = "repo-category";
  category.textContent = categoryLabels[repo.category] || repo.category;

  const size = document.createElement("span");
  size.className = "repo-size";
  size.textContent = repo.footprint;
  topLine.append(category, size);

  const title = document.createElement("h3");
  title.textContent = repo.name;

  const description = document.createElement("p");
  description.textContent = repo.description;

  const evidence = document.createElement("p");
  evidence.className = "repo-evidence";
  evidence.textContent = `Repository evidence: ${repo.evidence}`;

  const link = document.createElement("a");
  link.href = repo.url;
  link.textContent = "Open repository";
  link.setAttribute("aria-label", `Open ${repo.name} on GitHub`);

  article.append(topLine, title, description, evidence, link);
  return article;
}

async function loadRepositories() {
  const grid = document.querySelector("#repo-grid");
  const status = document.querySelector("#portfolio-status");
  try {
    const response = await fetch("data/repositories.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Repository data returned ${response.status}`);
    const repositories = await response.json();
    const fragment = document.createDocumentFragment();
    repositories.forEach((repo) => fragment.append(createRepoCard(repo)));
    grid.replaceChildren(fragment);
    status.textContent = `${repositories.length} public repositories classified by primary domain.`;
  } catch (error) {
    status.textContent = "The interactive census could not load.";
    grid.innerHTML = '<p class="noscript">Open <a href="data/repositories.json">the repository census</a> directly.</p>';
    console.error(error);
  }
}

function setupFilters() {
  const filterButtons = [...document.querySelectorAll(".filter")];
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      let visible = 0;
      document.querySelectorAll(".repo-card").forEach((card) => {
        const show = selected === "all" || card.dataset.category === selected;
        card.hidden = !show;
        if (show) visible += 1;
      });
      document.querySelector("#portfolio-status").textContent = selected === "all"
        ? `${visible} public repositories classified by primary domain.`
        : `${visible} repositories in ${categoryLabels[selected]}.`;
    });
  });
}

function setupClaimLattice() {
  const buttons = [...document.querySelectorAll(".claim-button")];
  const detail = document.querySelector("#claim-detail");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const state = claimStates[Number(button.dataset.claim)];
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-checked", String(active));
      });
      detail.replaceChildren();
      const code = document.createElement("p");
      code.className = "claim-code";
      code.textContent = state.code;
      const title = document.createElement("h3");
      title.textContent = state.title;
      const description = document.createElement("p");
      description.textContent = state.description;
      const language = document.createElement("p");
      language.className = "claim-question";
      language.textContent = state.language;
      detail.append(code, title, description, language);
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadRepositories();
  setupFilters();
  setupClaimLattice();
});
