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

// Example of pure recursion
// Returns array of only the odd values from the given num array
function collectOddValuesPure(numArr) {
  let newArr = [];

  if (numArr.length === 0) return newArr; // base case

  if (numArr[0] % 2 !== 0) newArr.push(numArr[0]);

  newArr = newArr.concat(collectOddValuesPure(numArr.slice(1)));
  return newArr;
}

/* EASY PROBLEMS */

// Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()
// Do not worry about negative bases and exponents.
function power(base, exponent){
  if (exponent === 0) return 1; // base case
  if (base < 2) return base;

  let result = base * power(base, exponent-1); // different input

  return result;
}


// Write a function factorial which accepts a number and returns the factorial of that number. 
// A factorial is the product of an integer and all the integers below it; 
// e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  
// factorial zero (0!) is always 1.
function factorial(num) {
  if (num <= 1) return 1; // base case
  let result = num * factorial(num - 1); // different input

  return result;
}

// Write a function called productOfArray 
// which takes in an array of numbers and returns the product of them all.
function productOfArray(numArr) {
  if (numArr.length === 0) return undefined;
  if (numArr.length === 1) return numArr[0]; // base case

  let product = numArr[0] * productOfArray(numArr.slice(1)); // different input

  return product;
}

// Write a function called recursiveRange
// which accepts a number and adds up all the numbers from 0 to the number passed to the function 
function recursiveRange(num) {
  if (num === 0) return num; // base case

  let sum = num + recursiveRange(num - (num > 0 ? 1 : -1));

  return sum;
}

// Write a recursive function called fib 
// which accepts a number and returns the nth number in the Fibonacci sequence. 
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
function fib(num) {
  if (num === 1) return 1; // base case
  if (num === 0) return 0; // base case

  let nthNum = fib(num - 1) + fib(num - 2); // different input

  return nthNum;
}


/* HARDER PROBLEMS */

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
function reverse(string) {
  if (string.length === 1) return string; // base case

  return reverse(string.slice(1)) + string[0]; // different input
}
    
// Write a recursive function called someRecursive which accepts an array and a callback. 
// The function returns true if a single value in the array returns true when passed to the callback. 
// Otherwise it returns false.
function someRecursive(array, callback) {
  if (array.length === 0) return false;

  const bool = callback(array.shift());
  return bool || someRecursive(array, callback);
}
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
// ------------------

// Write a recursive function called flatten
// which accepts an array of arrays and returns a new array with all values flattened.
function flatten(array) {
  let newArray = [];

  newArray = newArray.concat(array.shift())

  return flatten(array[0])
}