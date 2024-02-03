// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// <13. String Reversal, Solution #1>
// 1. Turn 'str' into an array
// 2. Call 'reverse' method on the array
// 3. Join the array back into a string
// 4. Return the result

/*
function reverse(str) {
  const arr = str.split("");
  // when we call split and pass in an empty string, it takes the provided string and turns it into an array with every element in that array consisting of a different character from the string
  arr.reverse();
  return arr.join("");
}

module.exports = reverse;

*/

/*
function reverse(str) {
  return str.split("").reverse().join("");
}

module.exports = reverse;
*/

// <14. String Reversal, Solution #2>
// 1. Create an empty string called 'reversed'
// 2. for each character in the provided string, take the character and add it to the start of 'reversed'
// 4. Return the variable 'reversed'
/*
function reverse(str) {
  let reversed = "";

  // avoid writing classic for loops
  // for (var i = 0; i < str.length; i++) {}

  // for of syntax
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

module.exports = reverse;
*/
// So in this case, we are iterating through all of the characters of the string variable right here. So we're going to iterate through each character of string one by one and set each character equal to this temporary variable character. We then take that character added on to the start of the string reversed, and then after the entire for loop we return the string reversed

// <15. String Reversal, Solution #3>
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
// Reduce helper function: Reduce is used to take all of the different values within array and condense them all down to one singular value, which is essentially exactly what we're trying to do here.
// Reduce takes two separate arguments.
// 1. arraw function
// 2. starting initial value for our function, which I'm gonna pass in an empty string
// Now, whenever reduce runs, it's going to take this starting argument. It's going to pass it into this arrow function as the first argument, and then whatever gets returned from that inner function will be then used as the starting argument for every successive run of the function. In total, the function runs one time for every element within the array right here. So in other words, we can really picture that this first value or the first argument that is passed into reduce is our reversed string.
