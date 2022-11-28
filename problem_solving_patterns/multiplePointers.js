// Create and update index references and make comparisons to find a match
// Useful when dealing with sorted data

function sumZero(numArr) {
  let lowIndex = 0;
  let highIndex = numArr.length - 1;
  while (numArr[lowIndex] + numArr[highIndex] !== 0) {
    if (numArr[lowIndex] > 0 && numArr[highIndex] > 0) return undefined;
    
    if (numArr[lowIndex] > numArr[highIndex]) lowIndex++;
    else if (numArr[lowIndex] < numArr[highIndex]) highIndex--;

    if (lowIndex === highIndex) return undefined;
  }

  return [numArr[lowIndex], numArr[highIndex]];
}

function sumZeroRefactor(arr) {
  let low = 0;
  let high = arr.length-1;

  while (low < high) {
    let sum = arr[low] + arr[high]
    if (sum === 0) return [arr[low], arr[high]];
    else if (sum > 0) high--;
    else if (sum < 0) low++;
  }
}

function countUniqueValues(arr) {
  let index1 = 0;
  let index2 = 1;

  let subTotals = {};

  for (i = 0; i < arr.length; i++) {
    let number = arr[i];
    subTotals[number] ? subTotals[number]++ : subTotals[number] = 0;
  }

  let total = 0;

  for (let key in subTotals) {
    total++;
  }

  return total;
}

function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;
  let total = 1;
  let compare = 0;
  let search = 0;

  while (search < arr.length) {
    if (arr[compare] === arr[search]) {
      search++;
    } else {
      console.log(compare, search)
      compare = search;
      total++;
    }
  }

  return total;
}
