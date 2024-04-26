// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// <44. Pyramids Vs Steps>
// 📌 pseudocode
// From 0 to n (iterate through rows)
//     Create an empty string, 'level'
//     From 0 to ??? (columns)
//         IF the column should have a #
//             Add a '#' to 'level'
//         ELSE
//             Add a space to 'level'
//     Console.log 'stair'

// 🧀 Math.floor();
Math.floor(5.0304304); // 5
// take a decimal number and round it down to the nearest integer

const columns = [0, 1, 2, 3, 4];
const row = 0;
// Calculate the midpoint of our array
// if we can figure out the center index, then we can say that take row number of elements on either side of that center point and make those into pounds
Math.floor(5 / 2); // 2
Math.floor(5 / 2) + 1; // 3
Math.floor(5 / 2) - 1; // 1

// <45. Pyramid Solution #1>
function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2); // midpoint index

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level);
  }
}

module.exports = pyramid;

// <46. Pyramid Solution #2>
function pyramid(n, row = 0, level = "") {
  // Base case
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1); // ✍️ we are definitely going to place the return statement here to make sure that we don't do any other work inside this function
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
