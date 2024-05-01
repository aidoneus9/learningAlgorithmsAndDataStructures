// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
/*
// <56. The Fibonacci Series>
function fib(n) {
  const fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;

  for (let i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci[n];
}

module.exports = fib;

// <57. Fibonacci Series Iterative Solution>

function fib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
  // return result[result.length - 1];
}

module.exports = fib;

// ⌛ Runtime complexity
// cerebral thought: for every increase n, we have to calculate one additional number -> linear runtime
// shortcut way: we've got a simple for loop and it looks like we are always starting out at some fixed number, always incrementing by one, and we're always incrementing up to this fixed target. It looks like we got a for loop that iterates over this kind of closed set one for one. -> linear runtime
*/
// <58. Fibonacci Series Recursive Solution>
// 🔁
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
// 😱😱😱
// fib(5): it eventually results in fibonacci being called with fib(1) * 5 -> basically, we keep on calling fibonacci with smaller and smaller numbers until eventually we meet this base case right here(51) and start to return some actual value
// fib(6): fib(1) * 8

// <59. Memoi-....Mem-...Memoization!>
// when we called fib(5), the fibonacci function itself is being invoked many, many times automatically: 15 calls
// fib(6): 25 calls
// => ⌛ Runtime Complexity: Exponential Time: for each additional element that we add into our collection or for each increment of the value n to our function, we are experiencing a dramatic increase in the number of function calls that are required.
// => we NEVER EVER ❌ want to accept an exponential time algorithm as a solution to an interview
// => ⚠️ be aware that any time we start seeing a exponential runtime function, it usually means that there's a different solution we can put together that might be much more efficient in nature
// => ⭕ memoization: store the arguments of each function call along with the result. If the function is called again with the same arguments, return the precomputed result, rather than running the function again; so by doing this memoization process or by caching all the results that comeout of the function, we can dramatically improve the run speed of this function

// <60. I Believe Its Memoization!>
// Slow Fib Function ▶ Memoizer(memoize function) ▶ Fast, Memoized Fib Function
// calling a function(2) with a function(1) that returns a function(3)
// memoize function: we're going to pass a function to it, it's going to return a new function that is dramatically speeded up
// ✍️ remember that the entire idea behind memoization is that we declare some storage area someplace where we can record all the arguments that are used to call the function and the respective result from all those function calls

function memoize(fn) {
  // declare a little object that is going to store all of our calls to the fast version of our function
  const cache = {};
  return function () {};
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);
// so we take our slow function, we're going to pass it to memoize and then that's going to return a new function, assign it to fib, and then we will export that memoized version from this file
module.exports = fib;
