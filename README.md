# RISE-IN-COMP---FINANCIAL-LITERACY-WEBSITE
Financial Literacy Website (Static MVP)

A single-page website for college students to turn FAFSA refunds into a simple monthly budget, earn points for good habits, and read quick guides on scholarships & financial aid. Built with HTML + CSS + tiny vanilla JS (no frameworks, no backend).

✨ Features (MVP)

FAFSA → Monthly Budget Calculator (saves to localStorage)

Goals & Points: daily check-in, 3 preset goals, badges at 100/300/600

Learn: 8 short articles with simple tag filters

Mobile-first, print-friendly budget table

Deployed via GitHub Pages

📁 Project Structure
/finlit-site
  index.html             # Single page: all sections + IDs used by JS
  /css/styles.css        # Global styles (mobile-first + print)
  /js/calculator.js      # FAFSA -> monthly budget logic + save/load
  /js/points.js          # Points, goals, badges, article rendering
  /data/articles.json    # 8 short articles (title, tag, body)
  /img/                  # Icons/illustrations (optional)
  README.md


Key HTML IDs (must stay consistent):

Calculator inputs: #fafsaTotal #disbursements #months #rent #food #transport #other

Calculator buttons/outputs: #btnCalculate #btnSavePlan #monthlyTotal #budgetTbody

Points/Goals: #btnCheckIn #pointsTotal #badgeLabel #goalBudget #goalSavings #goalScholarship

Articles: #tagFilters #articlesGrid

👥 Roles & File Ownership

DANNIECIA — Coordinator & Assembler
Owns structure, polish, deploy. Edits: index.html (assemble), README.md, /img/*.

Leanne — Markup (HTML)
Semantic & accessible HTML only. Edits: index.html (skeleton, labels, anchors).

L’Oreal — Styles (CSS)
Mobile-first styles & print. Edits: css/styles.css.

Zavi — Calculator (JS)
Compute & render monthly plan + persist. Edits: js/calculator.js.

Zaira — Points/Goals + Content (JS)
Daily check-in, goals, badges, articles. Edits: js/points.js, data/articles.json.

Rule: each person edits their file(s) only to avoid merge conflicts.

▶️ Run Locally

Option A: VS Code Live Server (recommended)

Install the “Live Server” extension.

Right-click index.html → Open with Live Server.

Option B: Tiny Python server

cd finlit-site
python -m http.server 5500
# open http://localhost:5500


What you should see now

Header with nav links (Calculator • Goals & Points • Learn)

Calculator form + empty results table (Monthly Total = 0)

Goals & Points (check-in button, points=0, badge=—, 3 goals)

Learn section (articles appear after articles.json is added)

🚀 Deploy (GitHub Pages)

Push to GitHub.

Repo Settings → Pages → Source: main / root (/).

Wait ~1 min, then open the Pages URL.

✅ Definition of Done (MVP)

 Calculator computes & persists across refresh

 Daily check-in adds +5, each goal +10 (once), badges show at 100/300/600

 8 articles render and filter by tag

 No horizontal scroll on iPhone width; keyboard focus visible

 Budget table prints cleanly; site live on GitHub Pages

📆 November Timeline (checklist)

Week 1 – Skeleton

 index.html semantic sections + labels (for matches id)

 Base CSS (typography, spacing, sticky nav, mobile layout)

 calculator.js: read inputs → compute → render table

 points.js: daily check-in wired; articles.json created (8 items)

Week 2 – Persistence & Polish

 Calculator Save/Load to localStorage (budget_v1) + edge cases (4/5 months, zeros)

 Goals award points; badges update; tag filters work

 Table/card polish; print CSS

Week 3 – Refinement

 Optional: points history (last 5–10 actions)

 Copy edit, favicon/meta; spacing/overflow fixes

 README “how to run/edit/deploy”

Week 4 – QA & Launch

 Phone + laptop test (Chrome/Safari/Edge)

 Keyboard-only flow works; headings order correct

 Final deploy link verified

🧩 Implementation Notes
Calculator (logic sketch)
monthlyTotal = fafsaTotal / months
fixed = rent + food + transport + other
flex = Math.max(0, monthlyTotal - fixed)
rows = [Rent, Food, Transport, Other, Flex]


Persist { inputs, result } under budget_v1.

Points & Goals

State: { total, goals: { id: true }, history: [{delta, reason, ts}], lastCheckIn: 'YYYY-MM-DD' } under points_v1.

Badges: Bronze ≥100, Silver ≥300, Gold ≥600.

Prevent double awards per day (use simple date check / goal flags).

Articles JSON (example)
[
  {"title":"Scholarships 101: Where to Start","tag":"scholarships","body":"Search campus portals first, then national boards. Track deadlines in one sheet."},
  {"title":"FAFSA Tips for the Semester","tag":"aid","body":"Know disbursement dates, confirm SAP, and allocate funds to fixed monthly costs first."}
]

🧪 Accessibility & QA Quick Pass

 Each input has a label; sections use aria-labelledby

 Keyboard Tab order makes sense; focus ring visible

 Color contrast ≥ 4.5:1 for text; links look like links

 section { scroll-margin-top: 72px } so sticky nav doesn’t cover headings

 Print preview: only budget table + headings visible

🤝 Contributing Workflow
git checkout -b feat/<name>-<task>
# edit your OWN files only
git add -A
git commit -m "feat: <task>"
git push -u origin HEAD
# open a PR (include screenshot/gif)


Keep PRs ≤ 200 lines.

Coordinator reviews: IDs intact, no cross-file edits, loads locally.

📜 License

MIT (feel free to reuse for learning projects).

👤 Credits

RISE in Computing — Financial Literacy Website team
Danniecia (Coordinator), Leanne (HTML), L’Oreal (CSS), Zavi (Calculator JS), Zaira (Points/Content JS)