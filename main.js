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
    tags: ["Sales Lead", "AI SDR", "Outbound"],
    metric: "$120K",
    metricLabel: "closed · 45% mine",
    eyebrow: "AI SDR platform · Sales lead",
    metrics: [
      { n: "$120K", l: "Company revenue closed" },
      { n: "45%", l: "Sourced by my leads" },
      { n: "50+", l: "Meetings booked in 6 months" },
    ],
    problem: "Peach is an AI SDR platform — it sources leads, writes personalized email sequences, and books meetings. Early-stage, selling a technical product to non-technical education buyers, with no repeatable pipeline yet.",
    action: "Owned the entire sales function. Booked 50+ meetings in six months, ran discovery and demos, and translated an AI/email-infrastructure product into plain business value for school decision-makers.",
    outcome: "The company closed ~$120K in revenue — roughly 45% of it traced directly to leads I sourced and worked myself.",
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
    title: "RegSahay — validated it end-to-end",
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

/* -------- THINGS I'VE BUILT (technical proof) -------- */
const BUILDS = [
  {
    name: "Peach — AI SDR",
    blurb: "The product I sold, end to end: sources leads, writes personalized sequences, books meetings. I know it at the code level.",
    stack: ["Next.js 16", "Drizzle", "Postgres", "AI SDK"],
    link: "",
  },
  {
    name: "RegMitra — RegTech MVP",
    blurb: "Watches 17 Indian regulators, summarizes every circular, and tells a CA exactly which of their clients it hits.",
    stack: ["Next.js", "pgvector", "Python / Playwright", "RAG"],
    link: "",
  },
  {
    name: "Factory Eye — Edge AI",
    blurb: "On-device visual inspection: pass/fail on every part in under a second, with audit-ready logs. No cloud.",
    stack: ["Raspberry Pi", "Hailo", "YOLOv8"],
    link: "",
  },
  {
    name: "Job-Search Agent",
    blurb: "A local AI that finds roles, scores them against my résumé, and drafts outreach in my voice. Runs on my laptop.",
    stack: ["Next.js", "Gemini", "SQLite", "Adzuna"],
    link: "",
  },
  {
    name: "Sigil — sigil91.com",
    blurb: "Legal-ops landing page — designed, built, and shipped.",
    stack: ["Next.js", "React", "Tailwind"],
    link: "https://sigil91.com",
  },
  {
    name: "UNBEATEN XI",
    blurb: "A daily cricket guessing game — build a team, chase the streak.",
    stack: ["Vite", "React", "TypeScript"],
    link: "",
  },
];

/* -------- TRACK RECORD (verify dates before sharing) -------- */
const RECORD = [
  { role: "Founder / GTM", co: "5A Venture Studio", desc: "Leading three ventures 0→1 — Factory Eye, RegSahay, Sigil — from strategy to sales to hiring.", year: "2025 — Now" },
  { role: "Sales Lead", co: "Peach (AI SDR)", desc: "Owned all sales — 50+ meetings in 6 months; sourced ~45% of closed revenue.", year: "2024 — 25" },
  { role: "Chief of Staff", co: "Iridia Medical", desc: "Ran operations and commercial motion in a technical, regulated domain.", year: "2023 — 24" },
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
  document.getElementById("buildsGrid").innerHTML = BUILDS.map(b => `
    <div class="build" data-reveal ${b.link ? `data-cursor="hover"` : ""}>
      <div class="build__top">
        <h3 class="build__name">${b.name}</h3>
        ${b.link ? `<a class="build__link" href="${b.link}" target="_blank" rel="noopener" aria-label="Open ${b.name}"><svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>` : ""}
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
function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (lenis) lenis.start();
}
document.addEventListener("click", (e) => {
  const item = e.target.closest("[data-project]");
  if (item) return openProject(parseInt(item.dataset.project, 10));
  if (e.target.closest("[data-close]")) closeModal();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
