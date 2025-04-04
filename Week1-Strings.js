// Reverse words in a given string https://www.geeksforgeeks.org/reverse-words-in-a-given-string/
let sampleString = "Hello..World.!";
let sampleString2 = "";
// console.log("# Reversed String :", reverseString(sampleString2));

function reverseString(str) {
  return str
    .split(".")
    .filter((i) => i)
    .reverse()
    .join(".");
}
// Longest Common Prefix using Sorting https://www.geeksforgeeks.org/longest-common-prefix-using-sorting/
let commonPrefixArray1 = ["apple", "ape", "april"];
let commonPrefixArray2 = ["geeksforgeeks", "geeks", "geek", "geezer"];

// console.log(
//   "The longest common prefix in",
//   commonPrefixArray2,
//   "is",
//   commonPrefix(commonPrefixArray2)
// );

function commonPrefix(arr) {
  // Corner cases
  if (!arr.length) return "";
  if (arr.length === 1) return arr[0];

  // First sort the array - this happens in the lexicographically
  arr.sort();
  let i = 0, // Prefix counter
    minStr = arr[0],
    maxStr = arr.at(-1),
    minLen = minStr.length > maxStr.length ? maxStr.length : minStr.length;

  // Find the min length of characters that are common in both
  for (i = 0; i < minLen; i++) {
    if (minStr[i] !== maxStr[i]) break;
  }

  return minStr.slice(0, i + 1);
}