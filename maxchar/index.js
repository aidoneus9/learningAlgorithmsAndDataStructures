// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// <22. Max Chars Problem>
// We are going to take our string and we're going to essentially convert it into an object where the keys of the object are the characters from the string, and the values are the number of times that that character has been found
// for solving any type of question around producing some count or verification or validation of a word

// <23. Max Chars Character Map>
const string = "Hello There!";
const chars = {};
// 1. split the string into an array and then use a for each helper to loop over all the characters.
// 2. for of loop to loop through all the characters inside there.

for (let char of string) {
  if (!chars[char]) {
    chars[char] = 1;
  } else {
    chars[char]++;
  }
}

for (let char of string) {
  chars[char] = chars[char] + 1 || 1; // so if this is falsey, then otherwise assign one to chars at char and we end up with the same object
}

// <24. Max Chars Solution>
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // console.log(charMap);

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
  // so the for of loop is used for iterating through an array or a string or any type of iterable object. But in this case, we are iterating through an actual object, like a collection of key value pairs. So to iterate through this object or any type of JavaScript object as opposed to an array or a string, we instead use a loop that uses the for in syntax as opposed to for of
  // object starts with O, we do not use the for of which begins with O to iterate over an object
  // when we iterate with a for in loop, char is assigned the keys inside that object. So this is not the values, it is the keys. So char will be the different letters that we have added to our object.
}

// <25. Max Chars Solution Continued>

module.exports = maxChar;
