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

// Given an array of integers and a number, write a function called maxSubarraySum, 
// which finds the maximum sum of a subarray with the length of the number passed to the function.
// Time complexity O(n)
// Space complexity O(1)
function maxSubarraySum(intArr, subarraySize){
  if (intArr.length < subarraySize) return null;

  let tempSubarraySum = 0;
  for (let i = 0; i < subarraySize; i++) tempSubarraySum += intArr[i];

  let maxSubarraySum = tempSubarraySum;
  
  for (let i = 0; i < intArr.length - subarraySize; i++) {
    tempSubarraySum -= intArr[i];
    tempSubarraySum += intArr[i + subarraySize];
    if (tempSubarraySum > maxSubarraySum) maxSubarraySum = tempSubarraySum;
  }

  return maxSubarraySum;
}

// Write a function called minSubArrayLen which accepts two parameters - 
// An array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray 
// of which the sum is greater than or equal to the integer passed to the function. 
// If there isn't one, return 0 instead.
// O(n) time complexity
// O(1) space complexity
function minSubArrayLen(intArr, int) {
  let minLength = 0;
  let tempSum = 0;

  for (let i = 0; i < intArr.length; i++) {
    tempSum += intArr[i];
    if (tempSum > int) {
      minLength = i + 1;
      break;
    }
  }

  if (minLength === 0) return minLength;

  for (let n = 0; n <= intArr.length - minLength; n++) {
    if (tempSum - intArr[n] >= int) {
      tempSum -= intArr[n];
      minLength--;
    } else {
      tempSum -= intArr[n];
      tempSum += intArr[n + minLength];
    }
  }

  return minLength;
}

// Write a function called findLongestSubstring, 
// which accepts a string and returns the length of the longest substring 
// with all distinct characters.
// O(n) time complexity

function findLongestSubstring(str){
  if (str.length === 0) return 0;

  let maxLength = 0;
  let subString = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    
    if (subString.includes(letter)) {
      // Reduce substring to only the letters that come after the index of 
      // the first instance of the repeated letter
      subString = subString.slice(subString.indexOf(letter) + 1);
      subString += letter;
    } else {
      subString += letter;
      if (subString.length > maxLength) {
        maxLength = subString.length;
      }
    }
  }

  return maxLength;
}
