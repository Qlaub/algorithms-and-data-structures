// Can be used to find the largest sum of n sequential numbers in an array of numbers
// Instead of looping through entire array and recalculating the entire sum
// Calculate sum of first n sequence of numbers
// Then subtract lowest index from sum and add highest index+1 value to the sum
// Now you have the sum for the next 'window' of digits

// O(n) time complexity
function maxSum(array, windowSize) {
  if (array.length < windowSize) return undefined;

  let largestSum = 0;
  let tempSum = 0;

  for (let i = 0; i < windowSize; i++) {
    tempSum += array[i];
  }

  largestSum = tempSum;

  for (let n = 0; n < array.length - windowSize; n++) {
    tempSum = tempSum - array[n] + array[n + windowSize];
    largestSum = Math.max(tempSum, largestSum);
  }

  return largestSum;
}