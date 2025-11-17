// ============================
// Week 1: Points & Articles Skeleton
// Purpose:
//  1) Load / render articles from data/articles.json into #articlesGrid
//  2) Build tag chips in #tagFilters and filter cards
//  3) Add +5 points on Daily Check-In and persist to localStorage("points_v1")
// ============================

// Helpers
function qs(sel) { return document.querySelector(sel); }
function id(x) { return document.getElementById(x); }

const POINTS_KEY = "points_v1";

/** STEP 1 — Points (persisted) */
// TODO(Zaira): Implement getPoints(), setPoints(v), addPoints(delta, reason)
function getPoints() {
  // read from localStorage; fallback 0
  return Number(localStorage.getItem(POINTS_KEY)) || 0;
}

function setPoints(v) {
  // write to localStorage and update #pointsTotal
  localStorage.setItem(POINTS_KEY, v);
  id("out-points").textContent = v;
}

function addPoints(delta, reason) {
  // total = getPoints() + delta; then setPoints(total)
  // (Week 2: also update #badgeLabel at 100/300/600)
  const total = getPoints() + delta;
  setPoints(total);

  const badgeEl = id("badge-wrap");
  if (total >= 600) {
    badgeEl.textContent = "Gold";
  } else if (total >= 300) {
    badgeEl.textContent = "Silver";
  } else if (total >= 100) {
    badgeEl.textContent = "Bronze";
  } else {
    badgeEl.textContent = "-";
  }

  console.log(`Added ${delta} points: ${reason}`);
}

// TODO: Wire #btnCheckIn to addPoints(+5, "Daily Check-In")
id("btn-checkin").addEventListener("click", () => addPoints(5, "Daily Check-In"));

/** STEP 2 — Load & render articles */
// TODO(Zaira): fetch("data/articles.json") → renderArticles(items); buildTagChips(items)
async function loadArticles() {
  const res = await fetch("data/articles.json");
  const data = await res.json();

  // supports both: [{...}] or { articles: [...] }
  const items = Array.isArray(data) ? data : (data.articles || []);

  renderArticles(items);
  buildArticleChips(items);
}

function renderArticles(items) {
  // Clear #articlesGrid; for each item:
  // create <article data-tag="..."><h3>title</h3><p>body</p></article>
  // append to grid
  const grid = qs("#article-grid");
  grid.innerHTML = "";

  items.forEach(item => {
    const articleEl = document.createElement("article");
    articleEl.dataset.tag = item.tag;
    articleEl.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
    grid.appendChild(articleEl);
  });
}

function buildArticleChips(items) {
  // Unique tags → buttons in #tagFilters:
  //  - "All" shows everything
  //  - clicking a tag filters to matching cards
  const container = qs("#article-chips");
  container.innerHTML = "";

  const tags = [...new Set(items.map(a => a.tag))];

  // “All” button
  const allBtn = document.createElement("button");
  allBtn.textContent = "ALL";
  allBtn.addEventListener("click", () => filterArticles("all"));
  container.appendChild(allBtn);

  // Individual tag buttons
  tags.forEach(tag => {
    const btn = document.createElement("button");
    btn.textContent = tag;
    btn.addEventListener("click", () => filterArticles(tag));
    container.appendChild(btn);
  });
}

function filterArticles(tag) {
  const articles = document.querySelectorAll("#article-grid article");

  articles.forEach(a => {
    if (tag === "all" || a.dataset.tag === tag) {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }
  });
}

// TODO: Initialize UI on load
setPoints(getPoints());
loadArticles();
