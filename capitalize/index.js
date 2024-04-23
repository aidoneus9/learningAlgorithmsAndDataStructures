// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// <36. Understanding Capitalization>
// 📎 MDN documentation: String.prototype.slice()
const word = "there";

word[0].toUpperCase(); // T
word.slice(1); // here

// I forgot the 'return' 😭
function capitalize(str) {
  const arr = str.split(" ");
  const arr2 = [];
  for (char of arr) {
    arr2.push(char[0].toUpperCase() + char.slice(1));
  }
  return arr2.join(" ");
}

module.exports = capitalize;

// <37. Capitalization Solution #1>
// 📌 pseudocode
// Make an empty array 'words'
// Split the input string by spaces to get an array
// For each word in the array
//     Uppercase the first letter of the word
//     Join first letter with rest of the string
//     Push result into 'words' array
// Join 'words' into a string and return it

function capitalize(str) {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

module.exports = capitalize;

// <38. How Else Can We Capitalize?>
// 📌 pseudocode
// Create an empty string(not an array) called 'result'
// 👉 Create 'result' which is the first characer of the input string capitalized
// For each character in the string
//     IF the character to the left a space
//         Capitalize it and add it to 'result'
//     ELSE
//         Add it to 'result'
// 🤔 One very big weakness: it does not work well with the very first character

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;
