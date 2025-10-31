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

// Helper to get element by ID from HTML file
function $(id) {
  return document.getElementById(id);
}

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
  // Number converts input values to actual numbers Ex: "4000" to 4000
  const fafsaTotal = Number($("in-fafsa")?.value || 0 );  // In-fafsa total input value if DNE default value = 0
  const disburse = Number($("in-disburse")?.value || 1 ); // In-disburse total input value if DNE default value = 1
  const months = Number($("in-months")?.value || 4 );     // In-months total input value if DNE default value = 4 
  
  const rent = Number($("in-rent")?.value || 0 );           // In-rent total input value if DNE value = 0
  const food = Number($("in-food")?.value || 0);            // In-food input value if DNE value = 0
  const transport = Number($("in-transport")?.value || 0 ); // In-transport input value if DNE default value = 0
  const other = Number($("in-other")?.value || 0 );         // In-other input value if DNE default value = 0
 


  // STEP 2: perform calculations ----------
  
  const incomePerMonth = months > 0 ? (fafsaTotal/months): 0;   // if input months > 0 fasfa divided by months else IPM = 0
  const expenses = {Rent: rent, Food: food, Transport: transport, Other: other};  // specify what expenses are from input values
  const expensesPerMonth = rent + food + transport + other;    // total expenses per month
  const netPerMonth = incomePerMonth - expensesPerMonth;       // calculate remaining value after expenses per Month
  return {incomePerMonth, expenses, expensesPerMonth, netPerMonth};  // return results of function back to where it came from


}

// STEP 3: update monthly total ----------
// STEP 4: clear #budgetTbody + append rows
function renderBudget(result) {
  const tbody = $("calc-tbody");  // finds tbody where we'll display budget rows
  const outNet = $("out-net");    // shows the final net per month

  if (!tbody || !outNet) return;  // functions stops if we do not have tbody or income to output

  tbody.textContent = " ";        // clears out old rows to replace with new data

  const row = (label, amount) => {
    const tr = document.createElement("tr");  // Makes a new table row
    const tdL = document.createElement("td"); // Makes first table data for the label
    const tdA = document.createElement("td"); // Makes 2nd table data for the amount
    tdL.textContent = label;
    tdA.textContent = amount.toFixed(2);      // Formats each num to 2 decimal places
    tr.append(tdL,tdA);                       // adds boths cells to the row
    return tr;                                // return finished table row
     
  };

  tbody.appendChild(row("Income (per month)",result.incomePerMonth));  // Adds a row for Income

  // Loops through expense dictionary and makes rows for each category
  // Obj.Entries turns the dictionary into pairs Ex: "Rent", 500
  for (const[label, amt] of Object.entries(result.expenses)){
    tbody.appendChild(row(label, amt));
  }

  // Adds one more row for total expenses
  tbody.appendChild(row("Total Expenses (per month) ", result.expensesPerMonth));
  // Shows leftover income per month
  outNet.textContent = result.netPerMonth.toFixed(2);
}

// TODO: attach computeBudget() to #btnCalculate click event
function onCalculate(){
  const result = computeBudget();
  renderBudget(result);
}
// documents the users event, when user clicks calculate, budget is created and returned
document.addEventListener("DOMContentLoaded",() => {
  const btn = $("btn-calc");
  if (btn) btn.addEventListener("click", onCalculate);
} );

// ========== Week 2 (leave blank for now) ==========
// TODO: Add Save/Load plan with localStorage("budget_v1")
// TODO: Add warnings if totals exceed monthly amount
// TODO: Handle edge cases (zeros, 1 vs 2 disbursements, etc.)
