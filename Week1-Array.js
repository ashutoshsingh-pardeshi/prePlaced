// Find a peak element which is not smaller than its neighbors
// Link: https://www.geeksforgeeks.org/problems/peak-element/1

let array1 = [1, 2, 4, 5, 7, 7];
console.log("# Peak exist :", peakElement(array1));

function peakElement(arr) {
  // If array id empty
  if (arr.length === 0) return false;

  //   If array contains a single element
  if (arr.length === 1) return true;

  // Looping through the array
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      if (arr[0] > arr[1]) return true;
      else continue;
    }
    if (i === arr.length - 1) {
      if (arr[i] > arr[i - 1]) return true;
      else continue;
    }

    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return true;
    }
  }

  // By default
  return false;
}

