/* ============================================================
   Kanishk Kapoor — "The Closer"  ·  motion + interaction
   Critical path (loader / reveals / counters) is rAF-independent
   so it never blanks the page. Lenis + custom cursor are
   progressive enhancement layered on top.
   ============================================================ */

/* -------- SELECTED WORK (outcomes) — real content -------- */
const PROJECTS = [
  {
    idx: "01",
    title: "Peach — owned all of sales",
    tags: ["Sales Lead", "EdTech AI", "Outbound", "Closing"],
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
    tags: ["0→1 Founder", "Edge AI / CV", "Manufacturing"],
    metric: "12 in 3wks",
    metricLabel: "meetings, self-sourced",
    eyebrow: "5A Venture Studio · Edge-AI manufacturing · Founder",
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
    tags: ["Product Validation", "RegTech", "0→1 Prototype"],
    metric: "15+",
    metricLabel: "CAs validated with",
    eyebrow: "5A Venture Studio · RegTech · Product validation",
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
    tags: ["Legal-Tech", "Founder / GTM", "Brand + Site"],
    metric: "25+",
    metricLabel: "named target accounts",
    eyebrow: "5A Venture Studio · Legal-tech · Founder / GTM",
    metrics: [
      { n: "25+", l: "Named SaaS targets" },
      { n: "Live", l: "Landing page shipped" },
      { n: "Full", l: "Brand kit produced" },
    ],
    problem: "Fast-scaling Indian SaaS companies sign high volumes of complex, cross-border contracts with no in-house legal team — and hourly outside counsel is too slow, stalling enterprise deals.",
    action: "Owned commercial from zero: built the full prospecting engine (ICP, ranked target list, personalized messaging, multi-touch cadence), produced the complete brand kit, and built and shipped the sigil91.com landing page (Next.js / React / Tailwind).",
    outcome: "A live product site and a running founder-led outreach motion across 25+ named SaaS targets (Zenskar, Scrut, CloudSEK, Leena AI, and more) — early-stage pipeline in motion.",
  },
];

/* -------- THINGS I'VE BUILT (private projects + technical proof) -------- */
const BUILDS = [
  {
    name: "AI SDR — solo build",
    blurb: "An AI sales-development rep I built solo: sources leads, writes personalized cold sequences in my voice, and books meetings. The engine behind my own outbound.",
    stack: ["Next.js", "Drizzle", "Postgres", "AI SDK"],
    link: "",
    role: "Solo — design, build, ship",
    detail: "A personal project, start to finish. I wanted outbound that sounded like me and ran itself, so I built one: it pulls target leads, drafts multi-touch cold sequences tuned to my voice, and books meetings. Sold nothing to build it — just proof I can spec, build, and ship an AI product end-to-end, not just sell one.",
  },
  {
    name: "Job-Search Agent",
    blurb: "A local AI that finds roles, scores them against my résumé, and drafts outreach in my voice. Runs on my own laptop, on free tiers.",
    stack: ["Next.js", "Gemini", "SQLite", "Adzuna"],
    link: "",
    role: "Solo — design, build, ship",
    detail: "A private tool I built for my own search: it auto-discovers relevant roles across London + India, scores each one against my real résumé, drafts tailored applications and cold outreach in my voice, and scans startup news for companies worth approaching. Draft-and-approve — I send everything myself. Runs locally, on free tiers, controllable from my phone.",
  },
  {
    name: "UNBEATEN XI",
    blurb: "A daily cricket guessing game — build a team under the constraints, chase the streak.",
    stack: ["Vite", "React", "TypeScript"],
    link: "",
    role: "Solo — design, build, ship",
    detail: "A for-fun daily puzzle game: build a cricket XI that satisfies the day's constraints and keep your streak alive. Built solo — product, logic, and front-end.",
  },
  {
    name: "RegMitra — RegTech MVP",
    blurb: "Watches 17 Indian regulators, summarizes every circular, and tells a CA exactly which of their clients it hits.",
    stack: ["Next.js", "pgvector", "Python / Playwright", "RAG"],
    link: "",
    role: "5A Venture Studio — product + build",
    detail: "The working prototype behind the RegMitra validation: a 17-regulator Python scraper feeding a deterministic applicability engine, so a Chartered Accountant sees only the circulars that actually hit their clients. I built it to prove a purpose-built tool beats raw ChatGPT on recent regulation.",
  },
  {
    name: "Factory Eye — Edge AI",
    blurb: "On-device visual inspection: pass/fail on every part in under a second, with audit-ready logs. No cloud.",
    stack: ["Raspberry Pi", "Hailo", "YOLOv8"],
    link: "",
    role: "5A Venture Studio — founder + build",
    detail: "The product behind Factory Eye: an on-device visual-inspection station (Raspberry Pi + Hailo + YOLOv8) that grades every part in under a second with an audit trail — for under $900, versus $18K–$240K enterprise rigs. I set the spec, drove the hardware-engineer hire, and shipped the product site.",
  },
  {
    name: "Sigil — sigil91.com",
    blurb: "Legal-ops landing page for a fast-scaling-SaaS contract tool — designed, built, and shipped.",
    stack: ["Next.js", "React", "Tailwind"],
    link: "https://sigil91.com",
    role: "5A Venture Studio — brand + site",
    detail: "The live product site for Sigil, built end-to-end: brand kit, copy, and a shipped Next.js landing page — sigil91.com. The front door for a founder-led outbound motion across 25+ named SaaS targets.",
  },
];

/* -------- TRACK RECORD (verify dates before sharing) -------- */
const RECORD = [
  { role: "Founder / GTM", co: "5A Ventures", desc: "Leading three ventures 0→1 — Factory Eye, RegMitra, Sigil — from strategy to sales to hiring.", year: "2026 — Now" },
  { role: "Sales Lead", co: "Peach (EdTech AI)", desc: "Owned all sales — 50+ meetings in 6 months; sourced ~40% of ₹1 Cr closed.", year: "2025 — 26" },
  { role: "Chief of Staff", co: "Iridia Medical", desc: "Ran operations and commercial motion in a technical, regulated domain.", year: "2023" },
];

/* -------- render -------- */
(function renderWork() {
  document.getElementById("workList").innerHTML = PROJECTS.map((p, i) => `
    <div class="work-item" data-reveal data-cursor="hover" data-project="${i}">
      <div class="work-item__idx">${p.idx}</div>
      <div class="work-item__main">
        <div class="work-item__title">${p.title}</div>
        <div class="work-item__tags">${p.tags.map(t => `<span class="work-item__tag">${t}</span>`).join("")}</div>
      </div>
      <div class="work-item__metric"><b>${p.metric}</b><span>${p.metricLabel}</span></div>
      <div class="work-item__arrow">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </div>`).join("");
})();
(function renderBuilds() {
  document.getElementById("buildsGrid").innerHTML = BUILDS.map((b, i) => `
    <div class="build" data-reveal data-cursor="hover" data-build="${i}">
      <div class="build__top">
        <h3 class="build__name">${b.name}</h3>
        ${b.link ? `<a class="build__link" href="${b.link}" target="_blank" rel="noopener" data-stop aria-label="Open ${b.name}"><svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>` : `<span class="build__open" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`}
      </div>
      <p class="build__blurb">${b.blurb}</p>
      <div class="build__stack">${b.stack.map(s => `<span>${s}</span>`).join("")}</div>
    </div>`).join("");
})();
(function renderRecord() {
  document.getElementById("recordList").innerHTML = RECORD.map(r => `
    <div class="record-item" data-reveal>
      <div><div class="record-item__role">${r.role}</div><div class="record-item__co">${r.co}</div></div>
      <div class="record-item__desc">${r.desc}</div>
      <div class="record-item__year">${r.year}</div>
    </div>`).join("");
})();
document.getElementById("year").textContent = new Date().getFullYear();

/* -------- loader → reveal (timer-based, always runs) -------- */
(function loader() {
  const loaderEl = document.getElementById("loader");
  const num = document.getElementById("loaderNum");
  let v = 0;
  const tick = setInterval(() => {
    v = Math.min(100, v + Math.round(4 + Math.random() * 7));
    num.textContent = v;
    if (v >= 100) {
      clearInterval(tick);
      setTimeout(() => {
        document.body.classList.add("loaded");
        setTimeout(() => { if (loaderEl) loaderEl.style.display = "none"; }, 1000);
      }, 180);
    }
  }, 90);
})();

/* -------- scroll reveals via IntersectionObserver (rAF-free) -------- */
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

/* -------- counters via IntersectionObserver + setInterval -------- */
(function counters() {
  const counts = document.querySelectorAll(".count");
  const run = (el) => {
    if (el.dataset.arrow === "1") { el.textContent = "0→1"; return; }
    const to = parseFloat(el.dataset.to || "0");
    const dec = parseInt(el.dataset.dec || "0", 10);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const dur = 1500, start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + (to * eased).toFixed(dec) + suffix;
      if (t < 1) setTimeout(() => step(performance.now()), 16);
      else el.textContent = prefix + to.toFixed(dec) + suffix;
    };
    step(performance.now());
  };
  if (!("IntersectionObserver" in window)) { counts.forEach(run); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
  }, { threshold: 0.6 });
  counts.forEach(e => io.observe(e));
})();

/* -------- custom cursor (enhancement) -------- */
(function cursorFx() {
  const cursor = document.querySelector(".cursor");
  const dot = document.querySelector(".cursor__dot");
  const ring = document.querySelector(".cursor__ring");
  if (!cursor || window.matchMedia("(hover: none)").matches) return;
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + "px"; dot.style.top = my + "px";
  });
  (function loop() {
    rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2;
    ring.style.left = rx + "px"; ring.style.top = ry + "px";
    requestAnimationFrame(loop);
  })();
  const on = () => cursor.classList.add("cursor--hover");
  const off = () => cursor.classList.remove("cursor--hover");
  document.querySelectorAll('a, button, [data-cursor="hover"]').forEach(el => {
    el.addEventListener("mouseenter", on); el.addEventListener("mouseleave", off);
  });
})();

/* -------- magnetic buttons (enhancement) -------- */
document.querySelectorAll(".magnetic").forEach((el) => {
  el.style.transition = "transform .5s cubic-bezier(0.22,1,0.36,1)";
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width/2) * 0.25}px, ${(e.clientY - r.top - r.height/2) * 0.35}px)`;
  });
  el.addEventListener("mouseleave", () => { el.style.transform = "translate(0,0)"; });
});

/* -------- Lenis smooth scroll (enhancement) -------- */
let lenis = null;
if (window.Lenis) {
  lenis = new Lenis({ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
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

/* -------- project modal -------- */
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
    <div class="modal__tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  if (lenis) lenis.stop();
}
function openBuild(i) {
  const b = BUILDS[i]; if (!b) return;
  modalContent.innerHTML = `
    <div class="modal__eyebrow">${b.role || "Project"}</div>
    <h3 class="modal__title">${b.name}</h3>
    <div class="modal__block"><h4>What it is</h4><p>${b.detail || b.blurb}</p></div>
    <div class="modal__tags">${b.stack.map(s => `<span>${s}</span>`).join("")}</div>
    ${b.link ? `<a class="modal__cta magnetic" href="${b.link}" target="_blank" rel="noopener" data-cursor="hover"><span>Visit ${b.name.split("—")[0].trim()}</span><svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>` : ""}`;
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
  // let external "visit" links behave normally
  if (e.target.closest("[data-stop]")) { e.stopPropagation(); return; }
  const proj = e.target.closest("[data-project]");
  if (proj) return openProject(parseInt(proj.dataset.project, 10));
  const build = e.target.closest("[data-build]");
  if (build) return openBuild(parseInt(build.dataset.build, 10));
  if (e.target.closest("[data-close]")) closeModal();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeExit(); } });

/* -------- exit-intent popup -------- */
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
  // Desktop: fire when the cursor leaves through the top of the viewport.
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
