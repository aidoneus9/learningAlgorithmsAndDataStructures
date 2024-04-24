// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// <39. The Steps Question>
// Debugger

// <40. Steps Solution #1>
// 📌 pseudocode
// From 0 to n (iterate through rows)
//     Create an empty string, 'stair'
//     From 0 to n (iterate through columns)
//         IF the current column is equal to or less than the current row
//             Add a '#' to 'stair'
//         ELSE
//             Add a space to 'stair'
//     Console.log 'stair'

// <41. Steps Solution #1 Continued>
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = ""; // 🧀

    // Process one entire row
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }

    console.log(stair);
  }
}

module.exports = steps;

// <42. Step Up Your Steps Game>
// 🔁 Recursion Tips
// Figure out the bare minimum pieces of information to represent your problem
// Give reasonable defaults to the bare minimum pieces of info
// Check the BASE CASE. Is there any work left to do? If not, return(The first thing that we always do with a recursive solution is to identify what is called a base case. The base case is the case in which we decide there is no more work for us to do and it's time to return and stop the recursion process.)
// Do some work. Call your function again, making sure the arguments have changed in some fashion

function printNumber(n) {
  // Base case
  if (n === 0) {
    return;
  }

  console.log(n);
  // Call the function again
  printNumber(n - 1);
}

printNumber(10);

// <43. More on Steps>
// 📌 pseudocode
// If (row === n) then we have hit the end of our problem
// If the 'stair' string has a length === n then we are at the end of a row
// If the length of the stair string is less than or equal to the row number we're working on, we add a '#', otherwise add a space

function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1); // We don't necessarily have to return the value of steps. That's not necessary.
    // return; // If we wanted to, we could put return down on the next statement because we are not returning anything here per se.
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(n, row, stair); // notice that we are not going to change the value of row here  row

  //   const add = stair.length <= row ? "#" : " ";

  //   steps(n, row, stair + add);
}

module.exports = steps;
