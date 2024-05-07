// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// < 66. Stack Data Structure>
// FILA(First In Last Out)

// 📦 Stack Methods
// push: Add a record to the stack
// pop: Remove the "top" record in the stack
// -> "top"; in code there really is no top or bottom to the stack(conceptual items)
// peek: Return the "top" record without popping it

// ✍️ Keep in mind that we also need to have some type of record keeping structure inside of this class, the stack class, to actually hold on to in order our records.
// ✍️ So remember, in the JavaScript world, whenever we implement some of these basic data structures, we sometimes use an array to actually implement the underlying data structure that contains our data.

// <67. Implementing a Stack>
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
