/* ============================================================
   Kanishk Kapoor — "The Closer"
   No loader, no cursor gimmicks — content first, motion as seasoning.
   ============================================================ */

/* -------- SELECTED WORK (outcomes) -------- */
const PROJECTS = [
  {
    idx: "01",
    title: "Peach — owned all of sales",
    tags: "Sales Lead / EdTech AI / Full cycle",
    metric: "₹1 Cr",
    metricLabel: "closed · ~40% mine",
    eyebrow: "AI for personalizing education · Sales lead",
    metrics: [
      { n: "₹1 Cr", l: "Closed in 10 months" },
      { n: "~40%", l: "Sourced by my leads" },
      { n: "50+", l: "Meetings booked in 6 months" },
    ],
    problem: "Peach is an AI platform for personalizing education — adapting learning to each student. Early-stage, selling a technical AI product to education buyers, with no repeatable pipeline yet.",
    action: "Owned the entire sales function end-to-end. Booked 50+ meetings in six months, ran discovery and demos, and translated an AI education product into plain business value for the people who sign off.",
    outcome: "The company closed ₹1 Cr in revenue over 10 months — about 40% of it traced to pipeline I sourced myself and drove through close via stakeholder management.",
  },
  {
    idx: "02",
    title: "Factory Eye — built from zero",
    tags: "Founder / Edge AI · CV / Manufacturing",
    metric: "12 in 3wks",
    metricLabel: "meetings, self-sourced",
    eyebrow: "5A Ventures · Edge-AI manufacturing · Founder",
    metrics: [
      { n: "12 / 3wk", l: "Meetings, all self-booked" },
      { n: "6", l: "Factory floor visits" },
      { n: "NDA", l: "Signed w/ Honda/Maruti supplier" },
    ],
    problem: "Indian auto-parts suppliers inspect quality by human eye — catching only 70–80% of defects with no audit trail — while enterprise machine-vision rigs cost $18K–$240K a station and stay out of reach.",
    action: "Founded it and ran the whole motion: set the GTM strategy, led factory-floor discovery myself (Munjal Showa, MACAS), priced real deployments, drove hiring of the founding hardware engineer, and built the product site — an on-device visual-inspection station (Raspberry Pi + Hailo + YOLOv8) for under $900.",
    outcome: "12 self-sourced meetings in three weeks, six factory visits, an NDA signed with a Honda/Maruti supplier, and live deployment costing in progress — approaching first revenue.",
  },
  {
    idx: "03",
    title: "RegMitra — validated it end-to-end",
    tags: "Product Validation / RegTech / 0→1 Prototype",
    metric: "15+",
    metricLabel: "CAs validated with",
    eyebrow: "5A Ventures · RegTech · Product validation",
    metrics: [
      { n: "15+", l: "CAs run through validation" },
      { n: "13", l: "Recorded validation calls" },
      { n: "3 LLMs", l: "Benchmarked vs the product" },
    ],
    problem: "Chartered Accountants are personally liable for compliance but can't track the flood of regulatory change and GST-mismatch risk — missing updates and burning 20–40 partner hours reconstructing evidence per notice.",
    action: "Led validation end-to-end: ran 13+ recorded interviews with practicing CAs, designed a blind AI-vs-expert quality test on real GST circulars, benchmarked three LLMs across 30 questions, navigated pricing (Van Westendorp), wrote a 9-gate validation roadmap, and built the working prototype — Next.js + a 17-regulator Python scraper + a deterministic applicability engine.",
    outcome: "Proved the pain and willingness-to-pay were real, showed a purpose-built tool beats raw ChatGPT/Gemini on recent circulars, and shipped a functioning 0→1 prototype.",
  },
  {
    idx: "04",
    title: "Sigil — GTM & brand from scratch",
    tags: "Co-Founder / Legal-AI / Brand + Site",
    metric: "0→1",
    metricLabel: "brand, site & motion live",
    eyebrow: "5A Ventures · Legal-AI · Co-founder",
    metrics: [
      { n: "Live", l: "sigil91.com shipped" },
      { n: "Full", l: "Brand & positioning owned" },
      { n: "0→1", l: "Prospecting engine built" },
    ],
    problem: "Fast-scaling Indian SaaS companies sign high volumes of complex, cross-border contracts with no in-house legal team — and hourly outside counsel is too slow, stalling enterprise deals.",
    action: "Co-founded and own everything commercial: defined the ICP and positioning, built the full prospecting engine — research, personalized messaging, multi-touch cadence — produced the complete brand kit, and designed, built, and shipped sigil91.com (Next.js / React / Tailwind).",
    outcome: "A live product, a brand that reads credible to legal buyers, and a founder-led outreach motion running against fast-scaling SaaS targets like Zenskar, Scrut, CloudSEK, and Leena AI.",
  },
];

/* -------- BUILT BY HAND (working software, each born from a sales need) -------- */
const BUILDS = [
  {
    name: "Peach AI SDR",
    role: "Solo build · in production at Peach",
    blurb: "An AI sales-development rep: sources leads, writes personalized cold sequences, tracks the CRM, books meetings.",
    did: "I built this solo while running sales at Peach — it became the engine behind my own outbound. Lead sourcing, voice-matched sequencing, campaign builder, CRM views. I sold with it every day, then improved what the data said was weak.",
    stack: "Next.js · Drizzle · Postgres · AI SDK",
    link: "",
    note: "Code private (company)",
    detail: "Built start-to-finish while I was the only sales hire at Peach: it pulls target leads, drafts multi-touch cold sequences tuned to my voice, manages the CRM pipeline, and books meetings. This is the tool behind the 50+ meetings — I wasn't just the user, I was the builder. The code lives in the company's private org, so no public link — happy to walk through it live.",
  },
  {
    name: "Job-Search Agent",
    role: "Solo build · open source",
    blurb: "A local-first AI agent that finds roles, scores them against my résumé, and drafts outreach in my voice.",
    did: "Designed and shipped the whole thing: multi-source job discovery (Adzuna + ATS boards), Gemini-based scoring against my real résumé, voice-matched outreach drafting, a phone-first chat UI, and a daily launchd routine. Draft-and-approve — nothing sends itself.",
    stack: "Next.js · Gemini · SQLite · Drizzle",
    link: "https://github.com/kanishkkapoor2001-coder/job-search-agent",
    note: "",
    detail: "My own job search, automated the way a seller would do it: it discovers roles across London + India, scores each against my résumé with reasons, tailors applications, drafts cold outreach in my voice from real writing samples, and scans startup news for companies worth approaching. Runs locally on free tiers, controlled from my phone. The repo is public — read the code.",
  },
  {
    name: "RegMitra prototype",
    role: "Built for validation · 5A Ventures",
    blurb: "Watches 17 Indian regulators, summarizes every circular, and tells a CA exactly which clients it hits.",
    did: "Built the scraper across 17 regulator sites, the summarization pipeline, and a deterministic applicability engine mapping circulars to client profiles — then used it in 13+ recorded validation calls to prove a purpose-built tool beats raw ChatGPT on recent regulation.",
    stack: "Python / Playwright · Next.js · pgvector · RAG",
    link: "",
    note: "Pre-launch",
    detail: "The working prototype behind the RegMitra validation: a 17-regulator Python scraper feeding a deterministic applicability engine, so a Chartered Accountant sees only the circulars that actually hit their clients. Built to answer one question honestly — is this better than ChatGPT for a practicing CA? The blind benchmark said yes.",
  },
  {
    name: "Factory Eye station",
    role: "Founder · 5A Ventures",
    blurb: "On-device visual inspection for factory floors: pass/fail on every part in under a second, audit-ready logs, no cloud.",
    did: "Set the product spec and unit economics (sub-$900 vs $18K–$240K rigs), drove the founding hardware-engineer hire, and built the product site. The hardware runs YOLOv8 on a Raspberry Pi + Hailo accelerator at the edge.",
    stack: "Raspberry Pi · Hailo · YOLOv8",
    link: "",
    note: "In pilot costing",
    detail: "An on-device visual-inspection station for auto-parts suppliers: every part graded in under a second with an audit trail, at a price a mid-size Indian supplier can actually sign. I own the spec, the pricing, the GTM, and the hiring — the sales motion and the product decisions are the same brain.",
  },
  {
    name: "sigil91.com",
    role: "Co-founder · design & build",
    blurb: "Sigil's live product site — brand kit, copy, and code, shipped end-to-end.",
    did: "Produced the complete brand kit, wrote the positioning and copy, and designed and built the site itself. The front door for our founder-led outbound.",
    stack: "Next.js · React · Tailwind",
    link: "https://sigil91.com",
    note: "",
    detail: "Sigil's public face: brand, positioning, copy, and code — all mine, shipped. It's what a legal buyer sees after my first cold touch, so it had to read credible instantly.",
  },
  {
    name: "This site",
    role: "Solo build · you're looking at it",
    blurb: "Designed and hand-coded — no template, no builder. The résumé PDF is generated from code too.",
    did: "Vanilla HTML/CSS/JS, hand-set type, scroll choreography, and the exit-intent close you'll meet if you try to leave. Deployed on GitHub Pages straight from the repo.",
    stack: "HTML · CSS · JS · GitHub Pages",
    link: "https://github.com/kanishkkapoor2001-coder/kanishk-portfolio",
    note: "",
    detail: "A sales artifact about sales: dark editorial design, one accent spent only on the numbers that matter, and an exit-intent popup that does what a closer does. Every line of it is in the public repo.",
  },
];

/* -------- TRACK RECORD -------- */
const RECORD = [
  { role: "Founder / GTM", co: "5A Ventures", desc: "Leading three ventures 0→1 — Factory Eye, RegMitra, Sigil — from strategy to sales to hiring.", year: "2026 — Now" },
  { role: "Sales Lead", co: "Peach (EdTech AI)", desc: "Owned all sales — 50+ meetings in 6 months; sourced ~40% of ₹1 Cr closed.", year: "2025 — 26" },
  { role: "Chief of Staff", co: "Iridia Medical", desc: "Ran operations and commercial motion in a technical, regulated domain.", year: "2023" },
];

/* -------- render: work -------- */
(function renderWork() {
  document.getElementById("workList").innerHTML = PROJECTS.map((p, i) => `
    <div class="work-item" data-reveal data-project="${i}">
      <div class="work-item__idx">${p.idx}</div>
      <div class="work-item__main">
        <div class="work-item__title">${p.title}</div>
        <div class="work-item__tags">${p.tags}</div>
      </div>
      <div class="work-item__metric"><b>${p.metric}</b><span>${p.metricLabel}</span></div>
      <div class="work-item__arrow">
        <svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </div>`).join("");
})();

/* -------- render: builds -------- */
(function renderBuilds() {
  document.getElementById("buildsList").innerHTML = BUILDS.map((b, i) => `
    <div class="build" data-reveal data-build="${i}">
      <div class="build__id">
        <h3 class="build__name">${b.name}</h3>
        <span class="build__role">${b.role}</span>
      </div>
      <div class="build__body">
        <p class="build__blurb">${b.blurb}</p>
        <p class="build__did"><b>What I did:</b> ${b.did}</p>
        <span class="build__stack">${b.stack}</span>
      </div>
      <div class="build__side">
        ${b.link
          ? `<a class="build__link" href="${b.link}" target="_blank" rel="noopener" data-stop>
               <span>${b.link.includes("github") ? "View code" : "Visit site"}</span>
               <svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </a>`
          : (b.note ? `<span class="build__note">${b.note}</span>` : "")}
      </div>
    </div>`).join("");
})();

/* -------- render: record -------- */
(function renderRecord() {
  document.getElementById("recordList").innerHTML = RECORD.map(r => `
    <div class="record-item" data-reveal>
      <div><div class="record-item__role">${r.role}</div><div class="record-item__co">${r.co}</div></div>
      <div class="record-item__desc">${r.desc}</div>
      <div class="record-item__year">${r.year}</div>
    </div>`).join("");
})();
document.getElementById("year").textContent = new Date().getFullYear();

/* -------- instant load (no loader screen) -------- */
requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add("loaded")));

/* -------- scroll reveals -------- */
(function reveals() {
  const els = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    els.forEach(e => e.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  els.forEach(e => io.observe(e));
})();

/* -------- counters -------- */
(function counters() {
  const counts = document.querySelectorAll(".count");
  const run = (el) => {
    const to = parseFloat(el.dataset.to || "0");
    const dec = parseInt(el.dataset.dec || "0", 10);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const dur = 1300, start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + (to * eased).toFixed(dec) + suffix;
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = prefix + to.toFixed(dec) + suffix;
    };
    requestAnimationFrame(step);
  };
  if (!("IntersectionObserver" in window)) { counts.forEach(run); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
  }, { threshold: 0.6 });
  counts.forEach(e => io.observe(e));
})();

/* -------- Lenis smooth scroll -------- */
let lenis = null;
if (window.Lenis) {
  lenis = new Lenis({ duration: 1.05, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  window.lenisInstance = lenis;
  (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })();
}
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1) {
      const t = document.querySelector(id);
      if (t) { e.preventDefault(); lenis ? lenis.scrollTo(t) : t.scrollIntoView({ behavior: "smooth" }); }
    }
  });
});

/* -------- nav scrolled state -------- */
addEventListener("scroll", () => {
  document.getElementById("nav").classList.toggle("is-scrolled", scrollY > 40);
}, { passive: true });

/* -------- modals -------- */
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
function openProject(i) {
  const p = PROJECTS[i]; if (!p) return;
  modalContent.innerHTML = `
    <div class="modal__eyebrow">${p.eyebrow}</div>
    <h3 class="modal__title">${p.title}</h3>
    <div class="modal__metrics">${p.metrics.map(m => `<div class="modal__metric"><b>${m.n}</b><span>${m.l}</span></div>`).join("")}</div>
    <div class="modal__block"><h4>The problem</h4><p>${p.problem}</p></div>
    <div class="modal__block"><h4>What I did</h4><p>${p.action}</p></div>
    <div class="modal__block"><h4>Outcome</h4><p>${p.outcome}</p></div>
    <div class="modal__tags">${p.tags}</div>`;
  openModal();
}
function openBuild(i) {
  const b = BUILDS[i]; if (!b) return;
  modalContent.innerHTML = `
    <div class="modal__eyebrow">${b.role}</div>
    <h3 class="modal__title">${b.name}</h3>
    <div class="modal__block"><h4>What it is</h4><p>${b.detail || b.blurb}</p></div>
    <div class="modal__block"><h4>What I did</h4><p>${b.did}</p></div>
    <div class="modal__tags">${b.stack}</div>
    ${b.link ? `<a class="modal__cta" href="${b.link}" target="_blank" rel="noopener"><span>${b.link.includes("github") ? "View the code" : "Visit the site"}</span><svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>` : ""}`;
  openModal();
}
function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  if (lenis) lenis.stop();
}
function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (lenis) lenis.start();
}
document.addEventListener("click", (e) => {
  if (e.target.closest("[data-stop]")) { e.stopPropagation(); return; }
  const proj = e.target.closest("[data-project]");
  if (proj) return openProject(parseInt(proj.dataset.project, 10));
  const build = e.target.closest("[data-build]");
  if (build) return openBuild(parseInt(build.dataset.build, 10));
  if (e.target.closest("[data-close]")) closeModal();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeExit(); } });

/* -------- exit-intent -------- */
const exitModal = document.getElementById("exitModal");
function openExit() {
  if (!exitModal) return;
  exitModal.classList.add("is-open");
  exitModal.setAttribute("aria-hidden", "false");
}
function closeExit() {
  if (!exitModal) return;
  exitModal.classList.remove("is-open");
  exitModal.setAttribute("aria-hidden", "true");
}
(function exitIntent() {
  if (!exitModal) return;
  let shown = false;
  const KEY = "kk_exit_shown";
  try { if (sessionStorage.getItem(KEY)) shown = true; } catch (_) {}
  document.addEventListener("mouseout", (e) => {
    if (shown) return;
    if (e.clientY <= 0 && !e.relatedTarget) {
      shown = true;
      try { sessionStorage.setItem(KEY, "1"); } catch (_) {}
      openExit();
    }
  });
  exitModal.addEventListener("click", (e) => {
    if (e.target.closest("[data-exit-close]")) closeExit();
  });
})();
