// ============================
// Week 1: Budget Calculator Skeleton
// ============================
//
// Purpose:
// This file connects the FAFSA form inputs to a simple monthly budget table.
// You will:
//  1. Read user inputs (FAFSA total, disbursements, months, categories)
//  2. Calculate a monthly total
//  3. Calculate "flex" (leftover money)
//  4. Render those results in the HTML table
//
// NOTE: DO NOT change the IDs in index.html
// ============================

// Helper shortcuts (already written for you)
function qs(sel) { return document.querySelector(sel); }
function id(x) { return document.getElementById(x); }

/**
 * TODO(Zavi): implement computeBudget()
 * - grab all input values from index.html (#fafsaTotal, #rent, etc.)
 * - calculate:
 *     monthlyTotal = (fafsaTotal / disbursements) / months
 *     used = rent + food + transport + other
 *     flex = monthlyTotal - used
 * - update:
 *     #monthlyTotal element text
 *     create rows for #budgetTbody (category + $/mo)
 */
function computeBudget() {
  // STEP 1: get input values -------------


  // STEP 2: perform calculations ----------


  // STEP 3: update monthly total ----------


  // STEP 4: clear #budgetTbody + append rows


}

// TODO: attach computeBudget() to #btnCalculate click event


// ========== Week 2 (leave blank for now) ==========
// TODO: Add Save/Load plan with localStorage("budget_v1")
// TODO: Add warnings if totals exceed monthly amount
// TODO: Handle edge cases (zeros, 1 vs 2 disbursements, etc.)
