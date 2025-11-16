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

}
function setPoints(v) {
  // write to localStorage and update #pointsTotal

}
function addPoints(delta, reason) {
  // total = getPoints() + delta; then setPoints(total)
  // (Week 2: also update #badgeLabel at 100/300/600)

}

// TODO: Wire #btnCheckIn to addPoints(+5, "Daily Check-In")

/** STEP 2 — Load & render articles */
// TODO(Zaira): fetch("data/articles.json") → renderArticles(items); buildTagChips(items)
async function loadArticles() {
  try {
    const res = await fetch("data/articles.json");
    const data = await res.json();

    // Handle either { articles: [...] } or plain [...]
    const items = Array.isArray(data) ? data : (data.articles || []);

    renderArticles(items);
    // buildArticleChips(items); // leave for later if you want tags
  } catch (err) {
    console.error("Failed to load articles:", err);
  }
}

function renderArticles(items) {
  // Clear #articlesGrid; for each item:
  // create <article data-tag="..."><h3>title</h3><p>body</p></article>
  // append to grid

  const grid = id("article-grid");  // HTML uses id="article-grid"
  if (!grid) return;

  grid.textContent = ""; // clear old cards

  items.forEach((item) => {
    const card = document.createElement("article");
    card.dataset.tag = item.tag || "";

    const h3 = document.createElement("h3");
    h3.textContent = item.title || "";

    const p = document.createElement("p");
    p.textContent = item.body || "";

    card.append(h3, p);
    grid.appendChild(card);
  });
}

function buildArticleChips(items) {
  // Unique tags → buttons in #tagFilters:
  //  - "All" shows everything
  //  - clicking a tag filters to matching cards

}
function articleChips(tag) {
  // Show/hide #articlesGrid > article by data-tag

}

// TODO: Initialize UI on load
document.addEventListener("DOMContentLoaded", () => {
  // setPoints(getPoints());
  loadArticles();
});

