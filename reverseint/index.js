// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// <20. Reversing an Int>
// Trick #1
// const myNumber = 200;
// myNumber.toString().split("").join("");

// Trick #2
// parseInt(myNumber.tostring()) + 2000; // parseInt takes a string and it returns a number or at least what it thinks is a number inside that string. And then once it's been turned back into a number, we can then add something to it, like add 2000 or divide by 2000 or whatever we want to do.

// Trick #3
// Mozilla: Math.sign()
// We can pass in a number, if that number is positive, math sign will return one. Otherwise, if the number that we pass in is negative, then it will return negative one.
// Math.sign(4000); // 1
// Math.sign(-4000); // -1

// <21. Reversing an Int Solution>
// Solution #1
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  // if (n < 0) {
  //   return parseInt(reversed) * -1;
  // }
  return parseInt(reversed) * Math.sign(n);
}

// Solution #2
function reverseInt(n) {
  let reversed = "";
  for (let character of n.toString()) {
    reversed = character + reversed;
  }
  return parseInt(reversed) * Math.sign(n);
}

// Solution #3
function reverseInt(n) {
  return (
    parseInt(
      n
        .toString()
        .split("")
        .reduce((rev, char) => char + rev, "")
    ) * Math.sign(n)
  );
}

module.exports = reverseInt;
