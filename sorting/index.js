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
// (17) With for of, we don't get easy access to the index of individual elements. The for of loop is really for taking some type of operation on EACH INDIVIDUAL ELEMENT itslef. And we don't really care about the elements so much as we do the indexes, or at least we care about them equally in this case.
// -> Use a classic for loop so that we can easily get access to both the index and element at every position in the array.

// <133. How SelectionSort Works>
// <134. Selection Sort Solution>
// -> prove me wrong algorithm
// 📌 pseudocode
// From i=0 to < array length
//   ASSUME the element at 'i' is the least in the array, assign i to 'indexOfMin'
// -> ✍️ Assume that the current element at i is the lowest in the array and prove me wrong. Show me if there is some other value in the array with a lower value.
// -> ✍️ the entire purpose of this inner for loop is to somehow invalidate our assumption right here is to tell us, "no, you couldn't assume that, that was not a good assumption, you have to swap the two elements".
//   For j from i+1 to end of array
//     See if there is an element with lower value
//       If there is, record its index
//   If the index of the current element and the index of the 'lowest' element is not the same, swap them
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Assumption
    let indexOfMin = i;

    // Validate that assumption
    for (let j = j + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      // Swap
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
      // swap(arr, indexOfMin, i)
    }
  }

  return arr;
}
// (55) the indexOfMin is going to point to the absolute lowest value right now
// (55) ~ (57) if we put together a function to encapsulate the swapping logic right here, and if we somehow turn this thing into just swap array at indexOfMin and i or whatever we want to do, that would turn this into a very brief little solution right here(58)

// <135. MergeSort Overview>
// 1. merge -> 2. mergeSort

// <136. The Merge Function>
// 📌 merge
// ✍️ The general purpose of the merger function is to take two separate sorted arrays and merge them together into one sorted array
// 📌 merger pseudocode
// Create 'results' array
// While there are still elements in BOTH arrays
//   If the first element the left half is less than first in right half
//     'shift' the element from left into a 'result' arr
//   else
//     'shift' the element from right into a 'result' arr
// Take everything from the array that still has stuff in it and put in in results

// <137. More on MergeSort>
// <138. I Don't Like Recursion, But Let's Do This Anyways>
// ✍️ Our goal for mergeSort is to recursively subdivide this input array. So we're going to split this thing into two and then we're going to take both the halves and pass them back into mergeSort.
// ✍️ first check: if the array has one element inside of it; because if the array only has one element, that means that we cannot subdivide this array anymore
// ✍️ divide the array into two equal halves -> determine the center point of the array (remember how slice works!)
// -> Now, if we ran this function right now, if we executed this code, I think you would agree with me that we are going to recursively subdivide an input array into separate equal-length halves until eventually both those halves have a length of one. And at that point, we would just return the array and we will stop trying to divide it into any further havles.

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) results.push(left.shift());
    else results.push(right.shift());
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
