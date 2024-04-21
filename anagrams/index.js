// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// <33. What Are Anagrams?>
// 📎 MDN documentation: RegExp
// Regular expressions can be used to manipulate strings very easily. And in this case, we can use a regular expression to very easily remove all these spaces and exclamation marks from a given string.

const word = "HI THERE!!!!!";
word.replace(/[^\w]/g, "").toLowerCase(); // hithere

// 💡 generate a character map out of both the strings that you are given.
// edge case: 2 ways of addressing the issue
// count the number of keys that are present inside of one object and compare it to the keys that exist inside the other
// count the length of characters inside this string and compare it to the other
function anagrams(stringA, stringB) {}

module.exports = anagrams;
