// Задача 1
function getArrayParams(...arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const avg = +(arr.reduce((sum, el) => sum += el) / arr.length).toFixed(2); 
  
  return { min: min, max: max, avg: avg };
}

// Задача 2
function summElementsWorker(...arr) {
  if (!arr.length) return 0;
  return arr.reduce((sum, el) => sum += el);
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let el of arr) {
    el % 2? sumOddElement += el : sumEvenElement += el;
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let el of arr) {
    if (el % 2 === 0) {
      sumEvenElement += el;
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

// Задача 3
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let el of arrOfArr) {
    const res = func(...el);

    if (res > maxWorkerResult) {
      maxWorkerResult = res;
    }
  }
  
  return maxWorkerResult;
}