// Find a peak element which is not smaller than its neighbors
// Link: https://www.geeksforgeeks.org/problems/peak-element/1

let array1 = [1, 2, 4, 5, 7, 8, 3];
// console.log("# Peak exist :", peakElement(array1));

function peakElement(arr) {
  // If array id empty
  if (arr.length === 0) return -1;

  //   If array contains a single element
  if (arr.length === 1) return arr[0];

  // Looping through the array
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      if (arr[0] > arr[1]) return arr[0];
      else continue;
    }
    if (i === arr.length - 1) {
      if (arr[i] > arr[i - 1]) return arr[i];
      else continue;
    }

    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return arr[i];
    }
  }

  // By default
  return -1;
}

// Program to find the minimum (or maximum) element of an array
// Link: https://www.geeksforgeeks.org/program-find-minimum-maximum-element-array/

console.log("Minimum element = ", findMinMax(array1, 1));
console.log("Maximum element = ", findMinMax(array1, 0));
function findMinMax(arr, isMin) {
  // isMin undefined or out of boundry
  if (isMin === undefined || ![1, 0].includes(isMin)) return -1;

  // Empty array
  if (arr.length === 0) return -1;

  // Single element array
  if (arr.length === 1) return arr[0];

  // Finding the minmum by looping
  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (isMin === 1 && num > arr[i])
      // Find minimum
      num = arr[i];
    else if (isMin === 0 && num < arr[i])
      // Find maximum
      num = arr[i];
  }

  return num;
}
