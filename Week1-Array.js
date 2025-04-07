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
