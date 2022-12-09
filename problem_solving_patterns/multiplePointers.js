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

// O(n) time complexity
// O(n) space complexity
// This is actually a frequency counter solution...
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

// O(n) time complexity
// O(1) space complexity
function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;
  let total = 1;
  let compare = 0;
  let search = 0;

  while (search < arr.length) {
    if (arr[compare] === arr[search]) {
      search++;
    } else {
      compare = search;
      total++;
    }
  }

  return total;
}

// O(n) time complexity
// O(1) space complexity
function countUniqueValues3(arr) {
  if (arr.length === 0) return 0;
  let compareIndex = 0;

  for (let searchIndex = 0; searchIndex < arr.length; searchIndex++) {
    if (arr[compareIndex] !== arr[searchIndex]) {
      compareIndex++;
      arr[compareIndex] = arr[searchIndex];
    }
  }

  return compareIndex + 1;
}

// Time complexity of O(n)
// space complexity of O(1)
// Returns true if the target average exists in two numbers in the sorted number array
// False if it doesn't exist
function averagePair(sortedNumArr, targetAverage){
  if (sortedNumArr.length < 1) return false;

  let startIndex = 0;
  let searchIndex = 1;

  function averageTwoNumbers(index1, index2) {
    const num1 = sortedNumArr[index1];
    const num2 = sortedNumArr[index2];
    const average = (num1 + num2) / 2;

    return average;
  }

  while (searchIndex < sortedNumArr.length && startIndex < sortedNumArr.length) {
    const average = averageTwoNumbers(startIndex, searchIndex);

    if (average === targetAverage) return true;
    else if (average > targetAverage) {
      if (averageTwoNumbers(startIndex, searchIndex-1) < targetAverage) {
        startIndex++;
        searchIndex--;
      } else {
        searchIndex--;
      }
    }
    else if (average < targetAverage) {
      if (searchIndex === sortedNumArr.length - 1) {
        startIndex++;
      } else {
        searchIndex++;
      }
    }
  }

  return false;
}

// takes in two strings and checks whether the characters in the first string 
// form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string 
// appear somewhere in the second string, without their order changing.
// O(n + m) time complexity requirement
// O(1) space complexity requirement
function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;
  let pointer1 = 0; // What letter currently being evaluated on str1
  let pointer2 = 0; // Index where we're currently starting our search on str2
  let pointer3 = 0; // Index of most recent first letter match between str1 and str2

  function searchForMatch() {
    for (let i = pointer2; i < str2.length; i++) {
      if (str2[i] === str1[pointer1]) {
        pointer2 = i;
        pointer1++;
        return;
      }
    }
    pointer1 = 0;
    return;
  }

  while (pointer1 < str1.length) {
    if (pointer3 >= str2.length) return false;
    searchForMatch();

    if (pointer1 === 0) {
      pointer3++;
      pointer2 = pointer3;
    }
  }

  return true;
}

function isSubsequenceRefactor(str1, str2) {
  let pointer1 = 0; // current index to check in str1
  let pointer2 = 0; // current index to check in str2
  if (!str1) return true;

  while (pointer2 < str2.length) {
    if (str2[pointer2] === str1[pointer1]) pointer1++
    if (pointer1 === str1.length) return true;
    pointer2++
  }

  return false;
}
