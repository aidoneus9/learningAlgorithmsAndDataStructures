// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// <47. Get Your Vowels>
function vowels(str) {
  const vowelsArr = [];

  for (let char of str.toLowerCase()) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowelsArr.push(char);
    }
  }

  return vowelsArr.length;
}

module.exports = vowels;

// <48. Finding Vowels>
// iterative solution

// 🧀 includes()
const word = "Hello there";

word.includes("o"); // True
word.includes("ello"); // True

// ⚠️ even though we can use a string of characters to use this includes method, I would probably recommend that instead we shoud use an ARRAY as the kind of root comparison thing
// + This would also allow us to put in like discrete substrings if we ever wanted to, or kind of multi-character strings, like if I ever wanted to for some crazy reason(50). I could not very easily do this same thing with only a single big bulk string.
const word = ["a", "b", "c"];

word.includes("c"); // True

function vowels(str) {
  let count = 0;
  // const checker = "aeiou";
  const checker = ["a", "e", "i", "o", "u"];
  // const checker = ["a", "e", "i", "o", "u", "abc"];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

module.exports = vowels;

// <49. Another Way to Find Vowels>
// 🧀 regexp(regular expression)
// 🧀 match(): see if some possible thing right here is included inside of this string <- we can pass in a regular expression, and this regular expression is going to check to see if we have any vowels inside of here(/[]/).
// ✍️ The other thing that we're going to do is to add on 2 options to the regexp itself, both G and I.
// 👉 the g regular expression right here, make sure that we don't stop at the first match that we find inside of our string, so if there are multiple vowels of some type in there, we're going to attempt to find them all.
// 👉 the i stands for insensitive or case insensitive(remember before we had to manually turn our string into a lowercase version of itself. The i will automatically take care of cases for us.)
function vowels(str) {
  // str.match(/[aeiou]/gi); // if it finds any matches, it will RETURN AN ARRAY of all the matches that were found
  const matches = str.match(/[aeiou]/gi);
  // if no matches are found, then match will return NULL instead(matches will be either an ARRAY OR NULL)
  // null is considered to be a falsy value
  // array is considered to be a truthy value
  return matches ? matches.length : 0;
}

module.exports = vowels;
