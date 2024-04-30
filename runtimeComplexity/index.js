// <53. What is Runtime Complexity?>

// Describes the performance of an algorithm

// 🤔 How much more processing power/time is required to run your algorithm if we double the inputs?

// reversestring
// Each additional character = 1 step through 1 loop
// This would be 'N', or 'linear' runtime

// steps
// As 'n' increased by one, we had to do way, way more stuff, or (n*n) things total
// This would be N^2, or quadratic runtime

// <54. Determining Complexity>
// 🧀 Constant Time
// 1 -> No matter hhow many elements we're working with, the algorithm/operation/whatever will always take the same amount of time

// 🧀 Logarithmic Time
// long(n) -> You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that searching operations are log(n)

// 🧀 Linear Time
// n -> Iterating through all elements in a collection of data. If you see a for loop spanning from '0' to 'array.length', you probably have 'n', or linear runtime
// ex. reversestring

// 🧀 Quasilinear Time
// n * log(n) -> You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that any sorting operation is n*log(n)

// 🧀 Quadratic Time
// n ^ 2 -> Every element in a collection has to be compared to every other element. 'The handshake problem' 🤝 (as another person was added into the room, they then had to shake hands with every other person and every person in the room had to shake hands with everyone else)
// ex. steps

// 🧀 Exponential Time
// 2 ^ n -> If you add a *single* element to a collection, the processing power required doubles

// <55. More on Runtime Complexity>
// Big 'O' Notation
// O(n) -> Linear
// O(1) -> Constant
// O(n^2) -> Quadratic

// Identifying Runtime Complexity
// Iterating with a simple for loop through a single collection? -> Probably O(n)

// Iterating through half a collection? -> Still O(n). There are no constants in runtime.

// Iterating through two *different* collections with separate or loops? -> O(n + m)

// Two nested for loops iterating over the same collection? -> O(n^2)

// Two nested for loops iterating over different collections? -> O(n*m)

// Sorting? -> O(n*log(n))

// Space Complexity
// How much more ram/memory/space is required by doubling the problem set?
// ex1. reversestring: for every additional character that we added into our input set, we had one additional character that we needed to return in the output set of data. And so the amount of memory that we spent was linear because for every one additional character we needed one additional element in our string to be added.

// ex2. steps: quadratic runtime for space complexity as well
