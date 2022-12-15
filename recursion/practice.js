// Two basic parts of a recursive function:
// Base case - used to determine when a recursive function stops
// Different input - the recursive call with a different piece of data

// Simple example of recursion
function countDown(num) {
  // Base case
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  // Side effect
  console.log(num);
  // Different input
  num--;
  countDown(num);
}

// The same function can be written iteratively as shown below:
function countDownIterative(num) {
  for (let i = num; i >0; i--) {
    console.log(i);
  }
  console.log('All done!');
}

// Simple example 2 of recursion
function sumRange(num) {
  // Base case
  if (num === 1) return 1;
  // Different input
  return num + sumRange(num - 1);
}

// Factorial iteratively
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

// Factorial recursively
function factorialRecursive(num) {
  if (num === 1) return 1; // Base case
  return num * (factorialRecursive(num - 1)); // Different input
}

// Example recursion with helper function
// Returns array of only the odd values from the given num array
function collectOddValues(numArr) {
  let result = [];

  (function helper(numArr) {
    if (numArr.length === 0) return; // Base case
    if (numArr[0] % 2 !== 0) result.push(numArr[0]); // Side effect
    helper(numArr.slice(1)); // Different input
  })(numArr);

  return result;
}

