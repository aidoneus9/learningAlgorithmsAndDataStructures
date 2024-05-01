// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// <50. General Matrix Spirals>

// <51. Spiral Solution>
// 📌 pseudocode
// Create empty array of arrays alled 'results'
// Create a counter variable, starting at 1
// As long as (start column <= end column) AND (start row <= end row)
//     Loop from start column to end column
//         At results[start_row][i] assign counter
//         Increment counter
//     Increment start row
//     Loop from start row to end row
//         At results[i][end_column] assign counter variable
//         Increment counter
//     Decrement end column
//     ...repeat for other two sides

// 🌀 so essentially we've got these 4 for loops and each of them is responsible for assembling a different side. And each time we progress through the while loop, we're going to be constraining these start row, end row, start column and end column to control what section of the matrix each loop is attempting to create.

// <52. More on Spiral>
const arr = [];
arr[3] = "Hi there!";

arr; // [null, null, null, "Hi there!"]
// ✍️ We can assign values to indices inside of an array that have not been initialized. I did not have to push this value in or I did not have to unshift the value into the array. I can just freely assign any value to any index inside of an array that I want.

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
