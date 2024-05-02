// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

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
  return function (...args) {
    // the actual caching part
    if (cache[args]) {
      return cache[args];
    }
    // 🤔 Have we ever called this function with this particular set of arguments before, and stored the result in this cache object? If we have, then just return that right now and don't do any other work and especially don't call the original function.

    const result = fn.apply(this, args);
    // whenever we call a function with an array of arguments which this is right here, we have to use the apply helper
    cache[args] = result;

    return result;
  };
  // ...args: I don't know how many arguments this function will be called with. Just take all the argumennts and assign them as an array to this variable called args(defensive coding).
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

// ✍️ Quick review
// Calling slowFib all the time recursively is extremely slow. We need some way to improve the performance. So we came up with the idea of saying before we actually call the slowFib function, we are going to create a little data store or a little cash object.
// 🗝️ the keys of that cash object will be the arguments(98) that we were trying to call slowFib width. And remember that the arguments when I say arguments, I'm talking about like some number here, 0, 1, 2, 3, 4, 5, whatever it is.
// So if we've never called slowFib with a particular number n before, then we will call slowFib, then we'll take n and the result and store it in this cash object(89-91).
// But if we have called slowFib before with some give value n, then we'll look into our cash object, we'll find that and then return it instead.
// So the whole idea here is that we are just avoiding calling the same function multiple times with one or with the same set of arugments each time.
// ➕

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);
// The reason this is important is that when we do this right here(126) and make sure that when we actually execute the original function(118-124) and attempt to call fib recursively, these fib calls(123) right here are not a reference directly to this function anymore. It's now a reference to the memoized version of that function(126).
// You do have to make sure that when you recursively call the function you are calling the memoized version and not the original non-memoized version.

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return slowFib(n - 1) + slowFib(n - 2);
}

const fib = memoize(slowFib);
// If we had been calling slowFib from inside this thing, fib contains a reference to the memoized version. slowFib is always the slow version. So even though we memoize this thing, when we call it recursively, it would be calling the slow version of fib, which would entirely defeat the purpose of what we were trying to do. We would be calling the wrong version of the function.
