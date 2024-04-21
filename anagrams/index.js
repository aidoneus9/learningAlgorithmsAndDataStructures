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
// ⚠️ edge case: if we only compare this object to this one, we might miss out on some extra entries inside the second one
// 👉 2 ways of addressing the issue
// 1. count the number of keys that are present inside of one object and compare it to the keys that exist inside the other ✔️
// 2. count the length of characters inside this string and compare it to the other

// for the edge case: we're going to pull out all the keys from both these objects, and we'll count the number of keys that is contained in both

// ✍️ how to pull out the keys inside of an object
const obj = {
  a: 1,
  b: 1,
  c: 1,
};

Object.keys(obj); // ['a', 'b', 'c']
Object.keys(obj).length; // 3

// <34. Solving Anagrams>
function anagrams(stringA, stringB) {
  // Build a character map
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  // for the edge case
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  // Compare all the characters
  // iterating over an...
  // array: OF // object: IN
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

// Helper function
function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    // assign a key to the character map of the current character that we're looking at, and then we increment the value at that character
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;
