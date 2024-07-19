// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// <130. Sorting Algorithm Overview>
// <131. BubbleSort Implementation>
// <132. BubbleSort Solution>
// ✍️ its purpose is to find the largest element in the array and drag it over to the far right hand side
// 📌 pseudocode
// From i=0 to < array length
//   From j=0 to (array length-i)
// ->  anytime that you see nested for loops, iterating over the same collection of data, that's an automatic red flag that we might have n^2 runtime complexity
//     If the element at j is greater than j+1
//       Swap elements at j and j+1

function bubbleSort(arr) {
  // Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  // return the sorted array
  return arr;
}

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

// (17) With for of, we don't get easy access to the index of individual elements. The for of loop is really for taking some type of operation on EACH INDIVIDUAL ELEMENT itslef. And we don't really care about the elements so much as we do the indexes, or at least we care about them equally in this case.
// -> Use a classic for loop so that we can easily get access to both the index and element at every position in the array.
