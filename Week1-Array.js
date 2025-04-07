//* Find a peak element which is not smaller than its neighbors
//? Link: https://www.geeksforgeeks.org/problems/peak-element/1

let array1 = [10, 2, 4, 5, 7, 8, 3];
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

//* Program to find the minimum (or maximum) element of an array
//? Link: https://www.geeksforgeeks.org/program-find-minimum-maximum-element-array/

// console.log("Minimum element = ", findMinMax(array1, 1));
// console.log("Maximum element = ", findMinMax(array1, 0));

//! How .sort() works
//? return positive - the numbers are swapped
//? return negative - the order is maintained
// console.log(
//   "Via sort method, minimum = ",
//   array1.sort((a, b) => a - b)[0],
//   " and maximum = ",
//   array1.sort((a, b) => b - a)[0]
// );

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

//* Sum and Product of minimum and maximum element of an Array
//? Link: https://www.geeksforgeeks.org/sum-and-product-of-minimum-and-maximum-element-of-an-array/?ref=ml_lbp

const sum_product = sumAndProduct(array1);
// console.log("# Sum :", sum_product.sum, " and product :", sum_product.product);
function sumAndProduct(arr) {
  // Corner case
  if ([0, 1].includes(arr.length)) return { sum: -1, product: -1 };

  // Contains only 2 elements
  if (arr.length === 2)
    return { sum: arr[0] + arr[1], product: arr[0] * arr[1] };

  //! This takes O(nlogn) time.
  //! Better loop through the array to find the min and max element - thus taking only O(n)
  let sortArr = arr.sort((a, b) => a - b);
  let min = sortArr[0],
    max = sortArr.at(-1);

  return { sum: min + max, product: min * max };
}

//* Minimum steps to make sum and the product of all elements of array non-zero
//? Link: https://www.geeksforgeeks.org/minimum-steps-to-make-sum-and-the-product-of-all-elements-of-array-non-zero/?ref=ml_lbp

// console.log(numberOfSteps([0, 1, 2, 3]));
// console.log(numberOfSteps([-1, -1, 0, 0]));
// console.log(numberOfSteps([-1, 0, 0]));
// console.log(numberOfSteps([-1, -2, -3]));

function numberOfSteps(arr) {
  // If array is empty
  if (arr.length === 0) return -1;

  // If array contains a single element
  if (arr.length === 1 && arr[0] === 0) return 1;

  let steps = 0,
    sum = 0;
  for (let e of arr) {
    if (e === 0) {
      steps += 1;
      sum += 1;
    }
    sum += e;
  }

  return sum <= 0 ? steps + (1 - sum) : steps;
}

//* Minimum steps required to reduce all the elements of the array to zero
//? Link: https://www.geeksforgeeks.org/minimum-steps-required-to-reduce-all-the-elements-of-the-array-to-zero/?ref=ml_lbp

function makeZero(arr) {
  // If array is empty
  if (arr.length === 0) return -1;

  return Math.max(...arr);
}

//* Sort an array of 0s, 1s and 2s | Dutch National Flag
//? Link: problem https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

let DNF = [0, 1, 2, 2, 1];
// console.log(sortedArray(DNF));

function sortedArray(arr) {
  //! Native approach is to sort - It requires O(nlogn) time

  // If array is empty
  if (arr.length === 0) return [];

  // If array contains a single element
  if (arr.length === 1) return arr;

  let indexOf0 = 0,
    indexOf2 = arr.length - 1,
    i = 0;
  while (i <= indexOf2) {
    if (arr[i] === 0) {
      let temp = arr[indexOf0];
      arr[indexOf0] = arr[i];
      arr[i] = temp;
      indexOf0++;
      i++;
    }
    if (arr[i] === 1) {
      i++;
    }
    if (arr[i] === 2) {
      let temp = arr[indexOf2];
      arr[indexOf2] = arr[i];
      arr[i] = temp;
      indexOf2--;
    }
  }

  return arr;
}

//* Find Subarray with given Sum from Array of non-negative Numbers
//? Link: https://www.geeksforgeeks.org/find-subarray-with-given-sum/

let superSetArray1 = [15, 2, 4, 8, 9, 5, 10, 23];
let target1 = 12;
// console.log("Subarray positions : ", subArray(superSetArray1, target1));

let superSetArray2 = [1, -2, 3, 4];
let target2 = 2;
// console.log(subArrayHashmap(superSetArray1, target1));
// console.log(subArrayHashmap(superSetArray2, target2));
// console.log(subArrayHashmap([1, 2, 3, 4, 5], 9));
// console.log(subArrayHashmap([10, 2, -2, -20, 10], -10));
// console.log(subArrayHashmap([2, 12, -2, -20, 10], -10));

//! This is the sliding window approach
function subArray(arr, target) {
  // Wrong input
  if (arr.length === 0 || target === undefined) return [-1];

  // Single element
  if (arr.length === 1 && arr[0] !== target) return [-1];

  // General case
  let start = 0,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum >= target) {
      while (sum > target && start < i) {
        sum -= arr[start];
        start++;
      }
      if (sum == target) {
        return [start + 1, i + 1];
      }
    }
  }

  return [-1];
}

function subArrayHashmap(arr, target) {
  let accumulator = new Map();
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === target) {
      return [1, i + 1];
    }

    let complement = sum - target;
    if (accumulator.has(complement)) {
      return [accumulator.get(complement) + 2, i + 1];
    }

    accumulator.set(sum, i);
  }
  return [];
}

//* Program to cyclically rotate an array by oone (I turned it into k number of steps)
//? Link: https://www.geeksforgeeks.org/c-program-cyclically-rotate-array-one/

// console.log("# Clockwise ", rotatedArray(array1, 1, 2));
// console.log("# Anti-Clockwise ", rotatedArray(array1, -1, 2));

function rotatedArray(arr, isClockwise, steps) {
  // Invalid input
  if (![-1, 1].includes(isClockwise) || arr.length === 0) return [-1];

  // Single element
  if (arr.length === 1) return arr;

  // Steps is 0
  if (steps <= 0) return arr;

  let rotatedArray = [...arr],
    length = arr.length;

  // Clockwise -> shift all to right
  if (isClockwise === 1) {
    let temp = rotatedArray.slice(-1 * steps);
    let index = length - 1;
    while (index - steps >= 0) {
      rotatedArray[index] = rotatedArray[index - steps];
      index--;
    }
    while (index >= 0) {
      rotatedArray[index] = temp.pop();
      index--;
    }
    return rotatedArray;
  }

  // Anti-clockwise -> shift all to left
  let temp = rotatedArray.slice(0, steps);

  let index = 0;
  while (steps + index < length) {
    rotatedArray[index] = rotatedArray[index + steps];
    index++;
  }
  rotatedArray.splice(index, steps, ...temp);
  return rotatedArray;
}

//* Count pairs with given sum
//? Link: https://www.geeksforgeeks.org/count-pairs-with-given-sum/

function returnPairs(arr, target) {
  let freq = new Map();
  for (num of arr) freq.set(num, (freq.get(num) || 0) + 1);

  let count = 0;
  for (num of arr) {
    count += freq.get(target - num) || 0;
  }

  return count / 2; //! This can give wrong results - need to be updated
}
