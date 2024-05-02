// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// <61. What's a Data Structure?>
// 1. Ways of organizing information with optimal 'runtime complexity' for adding or removing records
// 2. JavaScript natively implements several data structures. YOU WILL STILL BE ASKED ABOUT 'INFERIOR' DATA STRUCTURES.

// <62. The Queue Data Structure>
// 🎫
// A queue can be though of as like a container of sorts, where records or pieces of data enter on one end of this container, and then exit on the other(Waiting in line to buy tickets from some ticketing counter).
// There's no idea of skipping or cutting in line, so the order in which you get into this queue also dictates the order in which you come out.
// The process of adding a record into a queue is referred to as ENQUEUING or adding a record, and then taking something out from the other end is though of as DEQUEUING or removing a record(these terms are used interchangeably).
// First In First Out(F-I-F-O)

// One possible reason to use a queue and try to obfuscate all the other methods that an array has would be to make sure that if some other engineer came and started looking at your algorithm sometime in the future, they wouldn't go like, oh, this is an array! I could just treat it like an array and reorder the elements inside of it or remove the first element out of it or whatever it might be.
// 🦄 So in the real world, if we want to create a queue class, we will still use an array behind the scenes and limit access to the methods on it. The idea there is that if we make a queue, it's because we very specifically want to use a queue and don't want to treat it like an array.

// <63. Implementing a Queue>

class Queue {
  constructor() {
    this.data = [];
    // inside this constructor(28), we're going to create a new array and assign it as a property to our queue instance(data is a name).
  }

  add(record) {
    this.data.unshift(record);
  }
  // this add method will be called with some record or some piece of data that needs to be stored inside of our array(29)

  remove(record) {
    return this.data.pop(record);
    // return; remove is supposed to not only remove that record from the end of the queue, but obviously we probably want to return it as well so we can WORK WITH THAT RECORD THAT WE JUST REMOVED.
  }
}
// Whenever we create a new instance of a class, if we define a function called constructor inside of it, that constructor will automatically be called when we create a new instance.
module.exports = Queue;

const arr = [2, 3, 4];
arr.unshift(1); // [1, 2, 3, 4]
arr;
