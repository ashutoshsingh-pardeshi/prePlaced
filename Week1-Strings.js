// Reverse words in a given string
// Link: https://www.geeksforgeeks.org/reverse-words-in-a-given-string/
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

// Longest Common Prefix using Sorting
// Link: https://www.geeksforgeeks.org/longest-common-prefix-using-sorting/
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

// Converting Roman Numerals to Integer
// Link: https://www.geeksforgeeks.org/roman-number-to-integer/
let romanNumber1 = "MCMIV";
let romanNumber2 = "X";

// console.log(
//   "# The integer equivalent of",
//   romanNumber1,
//   "is",
//   convertRomantoInt(romanNumber1)
// );

function convertRomanToInt(romanNumber) {
  // Empty string
  if (!romanNumber.length) return;

  const romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // If length is 1
  if (romanNumber.length === 1) return romanToInt[romanNumber];

  let result = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    if (romanToInt[romanNumber[i]] < romanToInt[romanNumber[i + 1]]) {
      result += romanToInt[romanNumber[i + 1]] - romanToInt[romanNumber[i]];
      i++;
    } else {
      result += romanToInt[romanNumber[i]];
    }
  }

  return result;
}

// Converting Decimal Number lying between 1 to 3999 to Roman Numerals
// Link: https://www.geeksforgeeks.org/converting-decimal-number-lying-between-1-to-3999-to-roman-numerals/
let number1 = 1904;
let number2 = 2940;

// console.log("# Roman number for", number2, "is", convertIntToRoman(number2));

function convertIntToRoman(number) {
  // Corner case
  if (number < 1 || number > 3999) return;

  const intToRoman = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let roman = [];
  while (number > 0) {
    let prev = null;
    for (let i in intToRoman) {
      if (number < i) break;
      prev = i;
    }
    number -= prev;
    roman.push(intToRoman[prev]);
  }

  return roman.join("");
}

// Check if two given Strings are Isomorphic to each other
// Link: https://www.geeksforgeeks.org/check-if-two-given-strings-are-isomorphic-to-each-other/

let string1 = "aab";
let string2 = "aaa";

// console.log(
//   "Strings ",
//   string1,
//   "and",
//   string2,
//   "are isomorphic -> ",
//   isIsomorphic(string1, string2)
// );

function isIsomorphic(str1, str2) {
  // If length not equal, then return false
  if (str1.length !== str2.length) return false;

  // If length is only 1, then return immediate comparison
  if (str1.length === 1) return str1 === str2;

  let isoMap1 = {},
    isoMap2 = {},
    i = 1;
  isoMap1[str1[0]] = str2[0];
  isoMap2[str2[0]] = str1[0];

  for (i = 1; i < str1.length; i++) {
    // This is apparently wrong ??
    // if (str1[i] in isoMap1 || str2[i] in isoMap2) {
    //   if (isoMap1[str1[i]] !== str2[i] && isoMap2[str2[i]] !== str1[i]) break;
    // } else {
    //   isoMap1[str1[i]] = str2[i];
    //   isoMap2[str2[i]] = str1[i];
    // }

    if (str1[i] in isoMap1 && isoMap1[str1[i]] !== str2[i]) break;
    if (str2[i] in isoMap2 && isoMap2[str2[i]] !== str1[i]) break;

    isoMap1[str1[i]] = str2[i];
    isoMap2[str2[i]] = str1[i];
  }

  return i === str1.length;
}

// Check if given String is Pangram or not
// Link: https://www.geeksforgeeks.org/pangram-checking/

let pangramString1 = "All the alphabets must be included here !";
let pangramString2 = "The quick brown fox jumps over the lazy dog";
// console.log("Given string is a panagram :", isPanagram(pangramString1));

function isPanagram(str) {
  let allLetters = new Set(str.toLowerCase().match(/[a-z]/g));
  return allLetters.size === 26;
}

// Count Distinct Subsequences
// Link: https://www.geeksforgeeks.org/count-distinct-subsequences/

let mainString1 = "gfg";
console.log("# substrings ", returnSubstrings(mainString1));

function returnSubstrings(str) {
  let result = [];
  if (str.length === 1) {
    // End-point conidtion
    return [str, ""];
  } else {
    for (let i = 1; i < str.length + 1; i++) {
      result.push(str.slice(0, i));
    }

    return [...new Set([...result, ...returnSubstrings(str.slice(1))])];
  }
}

// From CHatGPT - Much efficient and faster
function returnSubstrings2(str){
  const result = new Set();

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.add(str.slice(i, j));
    }
  }

  result.add(""); // Include empty string explicitly
  return Array.from(result);
}