// Задача 1
"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const d = b ** 2 - 4 * a * c;
  
  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
  }
  return arr; 
}

// Задача 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const p = ((percent / 100) / 12);
  const s = (amount - contribution);
  const m = s * (p + (p / (((1 + p) ** countMonths) - 1)));
  const total = m * countMonths;
  return +total.toFixed(2);
}