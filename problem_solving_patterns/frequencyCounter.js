// Useful for comparing the number of times something occurs
// For example, we can compare two number arrays, arr1 and arr2, to see if arr2 contains the square of exactly all of arr1 values
// Time complexity is O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const compare = {};

  // Count the frequency of all numbers in arr1
  for (let i = 0; i < arr1.length; i++) {
    const number = arr1[i];
    // If the number exists add one to the count 
    // If the number doesn't exist add it as a key to our compare object and set value to 1
    compare[number] ? compare[number]++ : compare[number] = 1;
  }

  // Compare the square root of each number in arr2 to our compare object
  for (let n = 0; n < arr2.length; n++) {
    const number = Math.sqrt(arr2[n]);
    // Decrement the value in our compare object if the number exists in our compare object
    if (compare[number]) compare[number]--;
    // If not, our arrays don't match
    else return false;
  }

  return true;
}

// Compares two words to see if they are anagrams of one another
// Time complexity is O(n)
function isAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;

  const compare = {};

  for (let i = 0; i < word1.length; i++) {
    const letter = word1[i];
    compare[letter] ? compare[letter]++ : compare[letter] = 1;
  }

  for (let n = 0; n < word2.length; n++) {
    const letter = word2[n];
    if (compare[letter]) {
      compare[letter] --;
    } else {
      return false;
    }
  }

  return true;
}