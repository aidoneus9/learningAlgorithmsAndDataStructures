// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// <68. Queue From Stack Question>
// Stack + Stack = Queue

// <69. Creating a Queue From Stacks>

// <70. More on Queue From Stack>
const Stack = require("./stack");

class Queue {
  // Create 2 stacks
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  // Take the record and push it into Stack A
  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    } // (36) iterate through all the records in Stack A as long as there is something to pop out of there, (37) continue to pop out, and (37) push every record in order into Stack B.

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;
