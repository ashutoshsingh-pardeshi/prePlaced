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