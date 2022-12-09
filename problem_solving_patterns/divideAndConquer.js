// Useful for sorted data
// An example is binary search

// O(log(n)) time complexity
function binarySearch(sortedArr, val) {
  let startIndex = 0;
  let stopIndex = sortedArr.length - 1;

  while (startIndex <= stopIndex) {
    let centerIndex = Math.trunc((stopIndex + startIndex) / 2);

    if (sortedArr[centerIndex] === val) return centerIndex
    else if (sortedArr[centerIndex] > val) stopIndex = centerIndex - 1;
    else if (sortedArr[centerIndex] < val) startIndex = centerIndex + 1;
  }

  return -1;
}
