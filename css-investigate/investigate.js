/**
 * Community Shield Scotland — Financial Investigation Module
 * Evidence-graded public finance desk for all 32 councils.
 * Grades: official | derived | secondary | foi_needed | gap
 */
window.CSS_INVESTIGATE = (function () {
  const GRADES = {
    official: { label: "Official", tip: "Published accounts, budget book, Audit Scotland, registers" },
    derived: { label: "Derived", tip: "Calculated from official figures (e.g. rate per 1,000)" },
    secondary: { label: "Secondary", tip: "Third-party compilation — verify against primary sources before citing as fact" },
    foi_needed: { label: "FOI needed", tip: "Not published at useful geography — use FOI pack" },
    gap: { label: "Gap", tip: "Known hole; not invented" },
  };

  /** 8-lens financial investigation framework (CSS adaptation of public-interest audit lenses) */
  const FRAMEWORK = [
    {
      id: "debt",
      title: "Debt, borrowing & sustainability",
      ask: "Total debt / loans fund advances, debt per resident, PWLB vs market, interest cost as % of net revenue, capital vs revenue-funded debt, MTFP gap.",
      sources: ["Audited annual accounts (balance sheet + treasury)", "Annual Audit Report", "Treasury management strategy", "Capital programme"],
      redFlags: ["Debt used to fund day-to-day revenue", "Interest > ~10% of net revenue", "MTFP gap without savings plan", "Subsidiary debt off main books"],
    },
    {
      id: "tax-pay",
      title: "Council tax, services & senior pay",
      ask: "3-year Band D trajectory vs inflation; service cuts / new charges; basic vs senior councillor bands; chief executive package.",
      sources: ["Council tax resolutions", "Budget books", "Remuneration reports", "Scottish Joint Council circulars"],
      redFlags: ["Large senior uplift alongside cuts", "New levies while reserves healthy", "Opaque special responsibility allowances"],
    },
    {
      id: "procurement",
      title: "Contracts, awards & consultancy",
      ask: "Who wins repeatedly? Direct awards? Framework ceilings vs actual spend? Consultancy scoped to pre-decide policy?",
      sources: ["Contract registers", "PCS notices", "Spend over £25k / £500", "Committee reports"],
      redFlags: ["Single supplier concentration", "Repeat direct awards", "Consultancy = policy rubber-stamp", "Awards without published evaluation"],
    },
    {
      id: "projects",
      title: "Major projects & overruns",
      ask: "Original vs current capital cost; contingency burn; consultation quality; PFI/PPP unitary charges.",
      sources: ["Capital monitoring", "Gateway reviews", "Audit Scotland Best Value", "Project board minutes"],
      redFlags: ["Cost > +50% without re-approval", "Scope creep without public re-consult", "PPP unitary charge absorbing revenue"],
    },
    {
      id: "group",
      title: "ALEOs, subsidiaries & JVs",
      ask: "Group structure, management fees, guarantees, consolidated vs unconsolidated debt, going-concern notes.",
      sources: ["Group accounts", "ALEO annual reports", "Related-party notes", "Companies House"],
      redFlags: ["Material guarantees not disclosed", "Unaudited trading companies", "Circular sale-and-leaseback funding"],
    },
    {
      id: "priorities",
      title: "Budget priorities & discretionary spend",
      ask: "Where did discretionary money go? Grants, donations, sponsorship, hospitality vs frontline pressures.",
      sources: ["Payments over threshold", "Grant registers", "Committee decisions", "Reserves movements"],
      redFlags: ["Overseas donations while reserves critical", "Large hospitality vs service cuts", "Undeclared related-party grants"],
    },
    {
      id: "controls",
      title: "Controls, audit & fraud risk",
      ask: "Separation of duties, bank recs, purchase-card controls, internal audit opinions, known fraud cases.",
      sources: ["Annual Governance Statement", "Internal audit annual report", "External AAR", "SPSO / court judgments"],
      redFlags: ["Qualified audit opinion", "Long-running undetected fraud", "Weak purchase-card oversight", "Ignored IA recommendations"],
    },
    {
      id: "transparency",
      title: "FOI, publication scheme & gaps",
      ask: "What is published vs FOI-only? s.12/s.14 refusals? Open datasets currency?",
      sources: ["Publication scheme", "Open data portal", "FOI disclosure log", "CSS FOI tracker"],
      redFlags: ["Blanket s.14", "Missing contract register", "Stale open data", "Accounts not online"],
    },
  ];

  /**
   * National desk — figures for investigation triage.
   * Secondary debt/tax from JAOC dossier 9 Aug 2026 — MUST verify against accounts.
   * Official national totals from Audit Scotland sector narrative where noted.
   */
  const NATIONAL = {
    asOf: "2026-08-09",
    headlines: [
      { label: "Sector debt (secondary compile)", value: "£25.3bn", grade: "secondary", note: "JAOC Master Dossier — verify each council in primary accounts" },
      { label: "Forecast budget gaps (sector)", value: "£997m by 27/28", grade: "secondary", note: "JAOC aggregate — cross-check Audit Scotland Financial Bulletin" },
      { label: "Avg 3-year tax rise (secondary)", value: "+19.8%", grade: "secondary", note: "JAOC average of published Band D paths" },
      { label: "High risk or worse (JAOC index)", value: "78%", grade: "secondary", note: "Investigative risk index — not an official rating" },
    ],
    auditScotlandNotes: [
      "Audit Scotland / Accounts Commission: local government financial model under severe strain; reliance on reserves and one-offs is unsustainable.",
      "Always prefer the council’s latest audited accounts and Annual Audit Report over secondary compilations.",
    ],
  };

  /** JAOC ranking table (secondary) — for investigative triage only */
  const RANKING = [
    { rank: 1, name: "Aberdeen City", debt_m: 1917, tax3y: 25.9, risk: "Severe", concerns: "£1m+ embezzlement 17 years; controls; tax rise" },
    { rank: 2, name: "East Lothian", debt_m: 431, tax3y: 23.5, risk: "Severe", concerns: "Leader pay +40.7%; flood scheme; whistleblowers" },
    { rank: 3, name: "Na h-Eileanan Siar", debt_m: 104, tax3y: 23.1, risk: "Severe", concerns: "Unrecovered debt; record-keeping" },
    { rank: 4, name: "Moray", debt_m: 292, tax3y: 25.9, risk: "High", concerns: "Limited income; double-digit rises" },
    { rank: 5, name: "West Dunbartonshire", debt_m: 1097, tax3y: 20.7, risk: "High", concerns: "Highest debt/resident; PPP load" },
    { rank: 6, name: "Highland", debt_m: 1806, tax3y: 19.5, risk: "High", concerns: "Schools programme overrun" },
    { rank: 7, name: "Glasgow City", debt_m: 2361, tax3y: 15.8, risk: "High", concerns: "Equal pay; reserves; care; donations" },
    { rank: 8, name: "Midlothian", debt_m: 445, tax3y: 22.0, risk: "High", concerns: "Fast debt rise; consultancy" },
    { rank: 9, name: "Perth & Kinross", debt_m: 903, tax3y: 21.9, risk: "High", concerns: "Visitor levy; reserves" },
    { rank: 10, name: "Stirling", debt_m: 514, tax3y: 21.6, risk: "High", concerns: "Unaudited JVs" },
    { rank: 11, name: "Inverclyde", debt_m: 250, tax3y: 20.8, risk: "High", concerns: "PPP share of revenue" },
    { rank: 12, name: "Argyll & Bute", debt_m: 375, tax3y: 20.4, risk: "High", concerns: "Asset disposals; historic care" },
    { rank: 13, name: "Dumfries & Galloway", debt_m: 569, tax3y: 20.3, risk: "High", concerns: "Reserves falling" },
    { rank: 14, name: "North Ayrshire", debt_m: 592, tax3y: 20.3, risk: "High", concerns: "PPP; Kerelaw history" },
    { rank: 15, name: "Scottish Borders", debt_m: 285, tax3y: 20.3, risk: "Medium", concerns: "Joint board visibility" },
    { rank: 16, name: "South Ayrshire", debt_m: 656, tax3y: 20.0, risk: "Medium", concerns: "Repeat consultancy" },
    { rank: 17, name: "West Lothian", debt_m: 424, tax3y: 20.0, risk: "Medium", concerns: "PPP legacy" },
    { rank: 18, name: "Fife", debt_m: 1667, tax3y: 20.5, risk: "Medium", concerns: "Reserves; housing contract" },
    { rank: 19, name: "North Lanarkshire", debt_m: 1458, tax3y: 19.1, risk: "Medium", concerns: "Controls history" },
    { rank: 20, name: "Shetland", debt_m: 125, tax3y: 19.1, risk: "Medium", concerns: "Governance / reserves" },
    { rank: 21, name: "Renfrewshire", debt_m: 389, tax3y: 19.0, risk: "Medium", concerns: "IT / agency spend" },
    { rank: 22, name: "Falkirk", debt_m: 403, tax3y: 19.0, risk: "Medium", concerns: "Reserve drawdown" },
    { rank: 23, name: "South Lanarkshire", debt_m: 1528, tax3y: 17.3, risk: "Medium", concerns: "Equal pay pressure" },
    { rank: 24, name: "East Dunbartonshire", debt_m: 319, tax3y: 17.4, risk: "Low/Medium", concerns: "Consultancy intensity" },
    { rank: 25, name: "East Ayrshire", debt_m: 692, tax3y: 18.5, risk: "Low/Medium", concerns: "Senior pay vs cuts" },
    { rank: 26, name: "Clackmannanshire", debt_m: 181, tax3y: 16.4, risk: "Low", concerns: "PPP load" },
    { rank: 27, name: "Orkney", debt_m: 132, tax3y: 16.8, risk: "Low", concerns: "Ferry / infrastructure" },
    { rank: 28, name: "East Renfrewshire", debt_m: 118, tax3y: 16.8, risk: "Lowest Risk", concerns: "Stable / low debt" },
    { rank: 29, name: "City of Edinburgh", debt_m: 3056, tax3y: 13.3, risk: "Low/Medium", concerns: "Highest total debt; trams; historic care" },
    { rank: 30, name: "Aberdeenshire", debt_m: 722, tax3y: 18.2, risk: "Medium", concerns: "Rural delivery" },
    { rank: 31, name: "Angus", debt_m: 257, tax3y: 17.8, risk: "Low/Medium", concerns: "Aging infrastructure" },
    { rank: 32, name: "Dundee City", debt_m: 1236, tax3y: 16.5, risk: "High", concerns: "£1.06m IT fraud; regen costs" },
  ];

  /** Proven fraud cases (court / official) — investigation memory */
  const FRAUD_CASES = [
    { council: "Aberdeen City", person: "Michael Paterson", role: "Tax team leader", amount: "£1.08m", years: 17, outcome: "Jailed 4 years", grade: "official" },
    { council: "Dundee City", person: "Mark Conway", role: "IT officer", amount: "£1.06m", years: 5, outcome: "Jailed 5 years", grade: "official" },
    { council: "East Lothian", person: "Ewan Ritchie", role: "Admin officer", amount: "£20,000", years: 1, outcome: "Repaid; community payback", grade: "official" },
  ];

  /** Deep packs for pilot councils */
  const COUNCIL_PACKS = {
    glasgow: {
      slug: "glasgow",
      name: "Glasgow City Council",
      status: "pilot",
      coverage_pct: 86,
      money: [
        { label: "Net service budget", value: "£2.1bn", period: "2025/26", grade: "official", source: "GCC approved budget / CSS money desk" },
        { label: "Band D council tax", value: "£1,611", period: "2025/26", grade: "official", source: "Published CT resolution" },
        { label: "Award lines held", value: "120", period: "register extract", grade: "official", source: "GCC contract register extract (not full)" },
        { label: "Award catalogue (held)", value: "£1.1bn", period: "extract", grade: "derived", source: "Sum of held lines; ceilings ≠ spend" },
        { label: "Capital programme (gross)", value: "£207.5m probable", period: "Q3 2025/26", grade: "official", source: "Investment Programme monitoring" },
        { label: "Equal pay provision (historic)", value: "£260m", period: "2021/22–22/23", grade: "official", source: "Audit Scotland / EY AAR 2022/23" },
        { label: "Equal pay paid (cumulative)", value: "£765m+", period: "to 2024/25 reports", grade: "official", source: "GCC / audit narrative (verify latest AAR)" },
        { label: "Equal pay annual residual cost", value: "~£33.1m/yr", period: "reported", grade: "official", source: "Audit reporting on ongoing costs" },
        { label: "Sale & leaseback for equal pay", value: "£210m", period: "Feb 2023", grade: "official", source: "City Property Glasgow (Ops SL3) LLP — 6 assets, 32yr lease, ~£11.7m rent + inflation" },
        { label: "Usable reserves jump", value: "+£245m", period: "2022/23", grade: "official", source: "AAR: largely equal-pay funding + fiscal flexibilities" },
        { label: "General Fund reserves", value: "£105.4m", period: "31 Mar 2023", grade: "official", source: "AAR 2022/23" },
        { label: "Budget Support Fund (created)", value: "£109.5m", period: "2022/23", grade: "official", source: "Service concession fiscal flexibility" },
        { label: "3-year savings gap (then)", value: "£107.7m", period: "to 2026/27", grade: "official", source: "AAR / 2024/25 budget strategy path" },
        { label: "Total debt (secondary)", value: "£2,361m", period: "JAOC 2026", grade: "secondary", source: "JAOC dossier — re-key from latest balance sheet before publishing as fact" },
        { label: "3-year tax rise (secondary)", value: "+15.8%", period: "JAOC", grade: "secondary", source: "Verify Band D path on GCC site" },
      ],
      entities: [
        { name: "City Property Glasgow (Operations SL3) LLP", role: "Equal-pay sale & leaseback vehicle", note: "Bought 6 assets £210m; leases back 32 years" },
        { name: "City Building", role: "ALEO / group", note: "Drew Budget Support Fund £3.4m (2023/24 monitoring)" },
        { name: "Glasgow Life", role: "Culture & sport ALEO", note: "Management fee / service agreement — load latest accounts" },
        { name: "City Property group", role: "Property subsidiaries", note: "Group structure for commercial estate" },
      ],
      trails: [
        { from: "Glasgow City Council", to: "Equal pay claimants / HMRC / SPF", type: "settlement", amount: "£260m provision; 97%+ claims paid by mid-2023", grade: "official" },
        { from: "City Property (Ops SL3) LLP", to: "GCC (sale)", type: "sale-and-leaseback", amount: "£210m assets", grade: "official" },
        { from: "GCC", to: "City Property (Ops SL3) LLP", type: "lease rent", amount: "~£11.7m/yr + inflation", grade: "official" },
        { from: "GCC", to: "Strathclyde Pension Fund", type: "equal-pay contributions", amount: "£32.6m additional", grade: "official" },
      ],
      openQuestions: [
        "Re-key latest total external borrowing / loans fund from 2024/25 audited accounts",
        "Current unearmarked General Fund vs policy minimum",
        "Full contract register beyond 120-line extract",
        "Overseas donations / discretionary grants register 2023–26",
        "Ward-level housing ops (FOI) — voids, TA, damp",
      ],
      foiPrompts: [
        "Please provide the loans fund advances / external borrowing total as at the last two financial year-ends, split PWLB / market / other, and annual interest cost.",
        "Please provide unearmarked and earmarked General Fund reserves at each year-end for the last five years.",
        "Please provide a machine-readable extract of the full current contract register including supplier, value, start/end, procurement route.",
        "Please list all overseas donations or international grants paid from council funds since 1 April 2022, with amounts, decision date and budget line.",
      ],
    },
    edinburgh: {
      slug: "edinburgh",
      name: "City of Edinburgh Council",
      status: "public-spine",
      coverage_pct: 88,
      money: [
        { label: "Revenue budget planned", value: "£1,361m", period: "2024/25", grade: "official", source: "Audit Scotland AAR 2024/25" },
        { label: "Revenue budget", value: "£1,496m", period: "2025/26", grade: "official", source: "AAR / Feb 2025 budget" },
        { label: "Outturn underspend", value: "£2.719m", period: "2024/25", grade: "official", source: "AAR 2024/25" },
        { label: "Savings required", value: "£28.5m", period: "2024/25", grade: "official", source: "AAR" },
        { label: "Council tax rise", value: "+8%", period: "2025/26", grade: "official", source: "Budget (£29.3m extra)" },
        { label: "MTFP gap by 2030", value: "£94.2m", period: "Jun 2025 path", grade: "official", source: "AAR / MTFP reporting" },
        { label: "Capital expenditure", value: "£304.2m", period: "2024/25", grade: "official", source: "Audited accounts" },
        { label: "General capital grant", value: "£47.0m", period: "2024/25", grade: "official", source: "Accounts" },
        { label: "General Fund balance", value: "£25.6m (1.88%)", period: "31 Mar 2025", grade: "official", source: "Accounts / AAR" },
        { label: "Borrowing peak (forecast)", value: "~£2.9bn", period: "MTFP", grade: "official", source: "AAR narrative" },
        { label: "Homelessness pressure", value: "£20m", period: "2025/26 budget risk", grade: "official", source: "AAR" },
        { label: "EIJB extra funding (CEC)", value: "£12.1m", period: "2024/25", grade: "official", source: "AAR" },
        { label: "→ Edinburgh Leisure support", value: "£12.2m", period: "2024/25", grade: "official", source: "EL accounts: £8.0m fee + £4.2m extra" },
        { label: "Total debt (secondary)", value: "£3,056m", period: "JAOC 2026", grade: "secondary", source: "Highest total in secondary table — confirm in balance sheet" },
        { label: "3-year tax rise (secondary)", value: "+13.3%", period: "JAOC", grade: "secondary", source: "Lowest 3-year rise in secondary set" },
        { label: "Avg house price (city)", value: "£294,488", period: "Sep 2025", grade: "official", source: "Edinburgh by Numbers 2025" },
      ],
      entities: [
        { name: "Edinburgh Leisure", role: "ALEO", note: "Core fee £8.0m + additional £4.2m (2024/25); underlying surplus £0.38m" },
        { name: "Edinburgh Integration Joint Board", role: "IJB", note: "Extra CEC £12.1m + NHS £2.4m; commissioning flows material" },
        { name: "Transport for Edinburgh Ltd", role: "Subsidiary group", note: "Trams / network; load consolidated accounts" },
        { name: "CEC Holdings Ltd", role: "Subsidiary", note: "Holding company" },
        { name: "Edinburgh Living MMR LLP", role: "Subsidiary", note: "Mid-market rent; valuation gains in results" },
        { name: "Capital City Partnership", role: "Associate", note: "Employability / partnership" },
      ],
      trails: [
        { from: "City of Edinburgh Council", to: "Edinburgh Leisure", type: "management fee + support", amount: "£12.2m (2024/25)", grade: "official" },
        { from: "City of Edinburgh Council", to: "EIJB", type: "budget support", amount: "£12.1m extra", grade: "official" },
        { from: "NHS Lothian", to: "EIJB", type: "budget support", amount: "£2.4m", grade: "official" },
        { from: "City of Edinburgh Council", to: "Capital programme", type: "capital spend", amount: "£304.2m", grade: "official" },
      ],
      openQuestions: [
        "Full CIES service-line re-key for multi-year trend",
        "Trams / TfE contingent liabilities and guarantees",
        "ALEO debt consolidation map",
        "Ward house prices from RoS small-area XLSX",
        "Housing ops by ward (FOI)",
      ],
      foiPrompts: [
        "Please provide external borrowing and loans fund advances at 31 March for the last five years, with interest paid each year.",
        "Please provide a schedule of guarantees and contingent liabilities relating to Transport for Edinburgh, Edinburgh Trams and ALEOs.",
        "Please provide the full list of ALEO management fees and grant support for the last three financial years.",
      ],
    },
  };

  const FOI_DISCLAIMER =
    "If fulfilling this request would exceed the prescribed cost limit under FOISA, please advise what can be provided within the limit and how the request could be refined. Prefer CSV/Excel. Ward geography preferred; locality/data zone acceptable with a mapping note. Requester: Chris Hindle · mydugalbie@gmail.com";

  function gradeBadge(g) {
    const meta = GRADES[g] || GRADES.gap;
    return `<span class="grade grade-${g}" title="${meta.tip}">${meta.label}</span>`;
  }

  function moneyRows(items) {
    return items
      .map(
        (m) => `
      <div class="inv-metric">
        <div class="inv-metric-top">
          <span class="inv-label">${m.label}</span>
          ${gradeBadge(m.grade)}
        </div>
        <div class="inv-value">${m.value}</div>
        <div class="inv-meta">${m.period || ""} · ${m.source || ""}</div>
      </div>`
      )
      .join("");
  }

  function renderNationalDesk() {
    return `
      <div class="section-title">Financial investigation desk <span></span></div>
      <div class="intro-box">
        <strong>Investigate first, assert second.</strong>
        CSS grades every figure. Official = accounts / Audit Scotland / registers.
        Secondary = third-party compile (e.g. JAOC dossier) — useful for triage, not a substitute for primary sources.
      </div>
      <div class="grid-3" style="margin-bottom:1rem">
        ${NATIONAL.headlines
          .map(
            (h) => `
          <div class="stat-card">
            <div class="value" style="font-size:1.05rem">${h.value}</div>
            <div class="label">${h.label}</div>
            <div class="sub">${gradeBadge(h.grade)} ${h.note}</div>
          </div>`
          )
          .join("")}
      </div>
      <div class="paths">
        <div class="path-card" onclick="showInvestigateHome('framework')">
          <div class="icon"><svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg></div>
          <h3>8-lens framework</h3>
          <p>Debt · tax/pay · contracts · projects · ALEOs · priorities · controls · FOI</p>
        </div>
        <div class="path-card" onclick="showInvestigateHome('ranking')">
          <div class="icon"><svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg></div>
          <h3>National triage board</h3>
          <p>32-council secondary ranking for where to dig first</p>
        </div>
        <div class="path-card" onclick="showInvestigateHome('fraud')">
          <div class="icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <h3>Proven fraud cases</h3>
          <p>Court-established thefts — control failure patterns</p>
        </div>
        <div class="path-card" onclick="openCouncil('glasgow')">
          <div class="icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
          <h3>Glasgow pilot money</h3>
          <p>Equal pay trail · leaseback · awards · FOI prompts</p>
        </div>
      </div>
      <div class="card">
        <h3 style="margin-bottom:.5rem">How to use this desk</h3>
        <ol class="inv-steps">
          <li>Pick a council → open <strong>Investigate</strong> tab</li>
          <li>Work each lens; log only graded evidence</li>
          <li>Use FOI prompts when grade is FOI needed</li>
          <li>Never promote secondary figures to “fact” without accounts</li>
        </ol>
        <p class="meta" style="margin-top:.6rem">${NATIONAL.auditScotlandNotes.join(" ")}</p>
      </div>`;
  }

  function renderFramework() {
    return `
      <button class="back-btn" onclick="showHome()">← Home</button>
      <h2 style="margin-bottom:.8rem">8-lens financial investigation framework</h2>
      <div class="intro-box">Same lenses for every Scottish council — so Glasgow, Edinburgh and a template desk are comparable.</div>
      ${FRAMEWORK.map(
        (f, i) => `
        <div class="card inv-lens">
          <h3>${i + 1}. ${f.title}</h3>
          <p class="fact"><strong>Ask:</strong> ${f.ask}</p>
          <p class="meta" style="margin:.4rem 0"><strong>Sources:</strong> ${f.sources.join(" · ")}</p>
          <div class="gap"><strong>Red flags:</strong> ${f.redFlags.join(" · ")}</div>
        </div>`
      ).join("")}`;
  }

  function renderRanking() {
    const rows = RANKING.map(
      (r) => `
      <tr>
        <td>${r.rank}</td>
        <td><strong>${r.name}</strong></td>
        <td>£${r.debt_m.toLocaleString()}m</td>
        <td>+${r.tax3y}%</td>
        <td><span class="risk risk-${r.risk.toLowerCase().replace(/[^a-z]/g, "")}">${r.risk}</span></td>
        <td class="meta">${r.concerns}</td>
      </tr>`
    ).join("");
    return `
      <button class="back-btn" onclick="showHome()">← Home</button>
      <h2 style="margin-bottom:.5rem">National triage board</h2>
      <div class="intro-box">
        ${gradeBadge("secondary")} From JAOC Investigations Master Dossier (9 Aug 2026).
        Risk-weighted investigative index — <strong>not</strong> an official ranking. Use to prioritise FOIs and account re-keys.
      </div>
      <div class="table-wrap">
        <table class="inv-table">
          <thead><tr><th>#</th><th>Council</th><th>Debt (sec.)</th><th>3y tax</th><th>Risk</th><th>Key concerns</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }

  function renderFraud() {
    return `
      <button class="back-btn" onclick="showHome()">← Home</button>
      <h2 style="margin-bottom:.5rem">Proven embezzlement cases</h2>
      <div class="intro-box">Only court / official outcomes. Pattern: weak separation of duties; detection often via whistleblowers, not routine monitoring.</div>
      ${FRAUD_CASES.map(
        (c) => `
        <div class="card">
          <div class="inv-metric-top"><strong>${c.council}</strong> ${gradeBadge(c.grade)}</div>
          <div class="fact">${c.person} · ${c.role}</div>
          <div class="fin-grid" style="margin-top:.5rem">
            <div class="fin-box"><div class="flabel">Amount</div><div class="fval">${c.amount}</div></div>
            <div class="fin-box"><div class="flabel">Undetected</div><div class="fval">${c.years}y</div></div>
            <div class="fin-box"><div class="flabel">Outcome</div><div class="fval" style="font-size:.78rem">${c.outcome}</div></div>
          </div>
        </div>`
      ).join("")}`;
  }

  function packForCouncilId(id) {
    if (id === "glasgow" || id === "glasgow-city") return COUNCIL_PACKS.glasgow;
    if (id === "edinburgh" || id === "city-of-edinburgh") return COUNCIL_PACKS.edinburgh;
    return null;
  }

  function renderCouncilInvestigate(councilId) {
    const pack = packForCouncilId(councilId);
    if (!pack) {
      return `
        <div class="intro-box">
          <strong>Template investigate desk</strong> — deep money pack not yet loaded for this council.
          Use the 8-lens framework and FOI prompts below. Load accounts, AAR, contract register, and remuneration report first.
        </div>
        <div class="card">
          <h3>Starter FOI pack (financial)</h3>
          <ul class="inv-list">
            <li>External borrowing / loans fund advances — 5 years + interest</li>
            <li>Unearmarked & earmarked reserves — 5 years</li>
            <li>Full contract register CSV</li>
            <li>ALEO management fees & guarantees — 3 years</li>
            <li>Senior officer & councillor remuneration schedule</li>
            <li>Discretionary grants / overseas donations — 3 years</li>
          </ul>
          <p class="meta" style="margin-top:.6rem">${FOI_DISCLAIMER}</p>
        </div>
        <div class="card">
          <h3>Checklist</h3>
          ${FRAMEWORK.map((f) => `<div class="gap">☐ <strong>${f.title}</strong> — ${f.redFlags[0]}</div>`).join("")}
        </div>`;
    }

    return `
      <div class="intro-box">
        <strong>${pack.name}</strong> · ${pack.status} · coverage ~${pack.coverage_pct}% ·
        Every figure is graded. Secondary rows need primary confirmation before public claims.
      </div>
      <div class="fund-sub" id="inv-sub">
        <button type="button" class="active" onclick="invSub('metrics',this)">Money metrics</button>
        <button type="button" onclick="invSub('trails',this)">Money trails</button>
        <button type="button" onclick="invSub('entities',this)">Group / ALEOs</button>
        <button type="button" onclick="invSub('questions',this)">Open questions</button>
        <button type="button" onclick="invSub('foi',this)">FOI prompts</button>
        <button type="button" onclick="invSub('lenses',this)">8 lenses</button>
      </div>
      <div id="inv-metrics">${moneyRows(pack.money)}</div>
      <div id="inv-trails" style="display:none">
        ${pack.trails
          .map(
            (t) => `
          <div class="money-row" style="grid-template-columns:1.1fr 1.1fr 1fr auto">
            <span class="from">${t.from}</span>
            <span class="to">→ ${t.to}</span>
            <span class="amt">${t.amount}</span>
            ${gradeBadge(t.grade)}
          </div>
          <div class="meta" style="margin:-.2rem 0 .6rem">${t.type}</div>`
          )
          .join("")}
      </div>
      <div id="inv-entities" style="display:none">
        ${pack.entities
          .map(
            (e) => `
          <div class="card">
            <strong>${e.name}</strong>
            <div class="meta">${e.role}</div>
            <p class="fact" style="margin-top:.35rem">${e.note}</p>
          </div>`
          )
          .join("")}
      </div>
      <div id="inv-questions" style="display:none">
        ${pack.openQuestions.map((q) => `<div class="gap">○ ${q}</div>`).join("")}
      </div>
      <div id="inv-foi" style="display:none">
        <div class="intro-box">${FOI_DISCLAIMER}</div>
        ${pack.foiPrompts
          .map(
            (p, i) => `
          <div class="card">
            <div class="meta">FOI ${i + 1}</div>
            <p class="fact">${p}</p>
            <button type="button" class="copy-btn" onclick="copyText(this.previousElementSibling.innerText)">Copy request</button>
          </div>`
          )
          .join("")}
      </div>
      <div id="inv-lenses" style="display:none">
        ${FRAMEWORK.map((f) => `<div class="gap"><strong>${f.title}</strong> — ${f.ask}</div>`).join("")}
      </div>`;
  }

  function invSub(which, btn) {
    const map = ["metrics", "trails", "entities", "questions", "foi", "lenses"];
    map.forEach((k) => {
      const el = document.getElementById("inv-" + k);
      if (el) el.style.display = k === which ? "block" : "none";
    });
    document.querySelectorAll("#inv-sub button").forEach((b) => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
  }

  return {
    GRADES,
    FRAMEWORK,
    NATIONAL,
    RANKING,
    FRAUD_CASES,
    COUNCIL_PACKS,
    FOI_DISCLAIMER,
    gradeBadge,
    renderNationalDesk,
    renderFramework,
    renderRanking,
    renderFraud,
    renderCouncilInvestigate,
    packForCouncilId,
    invSub,
  };
})();
