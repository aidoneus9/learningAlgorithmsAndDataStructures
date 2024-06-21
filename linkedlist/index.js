// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document
/*
// <71. What's a Linked List?>
// 🚋 link list: an ordered collection of data. The collection contains a number of different nodes. Each node contains some amount of data, along with a reference to the next node. The list of nodes that form this chain has an order that is always maintained(won't suddenly or randomly change unless we specifically want to change).
// Tail: does not have a reference to any other node
// Data: can be absolutely anything we want(string, number, array, object...any type of valid JavaScript value)
// Reference to the next node
const nodeOne = {
  data: 123,
};

const nodeTwo = {
  data: 456,
};

nodeOne.next = nodeTwo; // nodeOne contains a reference to nodeTwo. nodeTwo does not have a reference to any other node; it must be the tail node of our linked list.

// <72. Exercise Setup>
// 📎 directions.html
// how to open up the HTML document -> open .
// Node Class API(very little): the first class is the node class. This is going to be a JavaScript class that is meant to kind of simulate the behavior of a node in a linked list.
// List Class API: the second class is going to be the linked list class, and this is going to act as a linked list would.

// 📎 test.js
// .skip: don't run this test
// how to enable the tests for testing a node -> delete '.skip'

// <73. Node Implementation>
// 📎 directions.html
const n1 = new this.Node("Hi");
// the node that constructor inside the node class runs and it assigns to its data property the string 'Hi'
// the next property which is supposed to contain a reference to the next node along the chain, it contains null(there is no other node that it is pointing to here, so no other node is currently associated with this chain).
n1.data; // 'Hi'
n1.next; // null
const n2 = new this.Node("There", n1);
// the second node takes in the string 'There' as the first argument, and then as a second argument it takes in n1. When the constructor runs with n1, it's going to set up n2 and on n2, n1 is going to be set up as the next property.
// -> after all this code right here runs, we would imagine that this right here is n2
n2.next; // returns n1

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
// constructor: Remember this is going to be executed anytime we create a new instance of a node; we're going to use it to do some initialization of a node.
// (convention) undefined: usually has the connotation of this property has not been set like no developer, no engineer has set this property
// null: has the connotation of this property has been set and it has been specifically set to be undefined

// <74. Linked List's Constructor>
// 📎 directions.html
// The linked list class is going to have exactly one property assigned to it, so it will have a bunch of functions, but there's going to be exactly ONE property assigned to it, and that will be the head property.
// -> This head property will have a reference to the first node of the linked list. So in truth, the linked list class has no idea about, how many nodes belong to the linked list or what data exists in the linked list. The linked list class only knows about the first node and if it wants to answer any questions about the linked list itself, or the actual data, then it needs to crawl over the linked list and say, count up the number of nodese if it wants to know that information.
class LinkedList {
  constructor() {
    this.head = null;
  }
}

// a real usage of the linked list would be...
const list = new LinkedList();
list.head = new Node(10);
// now our LinkedList has a head node associated with it, and now this head can have additional nodes linked on to it, which we could associate by making new nodes(43).

// <75. Linked Lists's InsertFirst>
// 📎 test.js -> delete '.skip'
// 📎 documentation file: insertFirst
// -> when we create a new linked list, it starts off completely empty; we can use this insertFirst method to sort of initialize the linked list and get some initial node inside of it
// ⚠️ this is supposed to be an insert method, NOT AN OVERWRITE METHOD; if it turns out that the linked list already has a node associated with the head property, we should not be overwriting that node.

// <76. Solving Insert First>
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // const node = new Node(data, this.head);
    // this.head = node;
    this.head = new Node(data, this.head);
  }
}

module.exports = { Node, LinkedList };

// ✍️
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
   }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
    this.head = new Node(data, this.head);
  }
}

const nodeOne = new Node(5);
const list = new LinkedList();
list.head = nodeOne; // {"data":5,"next":null}
// -> initialize the list with this nodeOne assigned to the head -> this time when we call insertFirst, do not accidentally overwrite any data
list.insertFirst(15);
list; // {"head":{"data":15,"next":{"data":5,"next":null}}}

// <77. Sizing a List>
// <78. Solve for Size>
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next; // -> We're going to look at the current node; so this is the first one, like the head node. We will look at its next property and remember the next property will be either another node or the value null. And if it's null, that means that there are no other nodes for us to evaluate. We will then take either the next node or the value null and assign it to the variable node.
    }

    return counter;
  }
}

// <79. Get Over Here, GetFirst!>
// <80. Building GetFirst>
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }
}

// <81. Find Your Tail with GetLast>
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }
}

// <82. GetLast Implementation>
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }

    let node = this.head;
    while (node.next) node = node.next;
    return node;
  }
}

// <83. Clear that List>
// <84. Clear Solution>
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }

    let node = this.head;
    while (node.next) node = node.next;
    return node;
  }

  clear() {
    this.head = null;
  }
}

// <85. Where's My Head, RemoveFirst?>
// <86. Building RemoveFirst>
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }

    let node = this.head;
    while (node.next) node = node.next;
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }
}

// <87. Bye-Bye Tail with RemoveLast>
// <88. RemoveLast Implementation>
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }

    let node = this.head;
    while (node.next) node = node.next;
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }
    // ✍️ to check to see if we have a length of one, we could call the size method that we had previously defined

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
}

// <89. A new Tail to Tell with InsertLast>
// <90. Adding InsertLast>
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }

    let node = this.head;
    while (node.next) node = node.next;
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }
    // ✍️ to check to see if we have a length of one, we could call the size method that we had previously defined

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }
}

// <91. Pick Em Out with GetAt>
// <92. GetAt Solution>
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }

    // let node = this.head;
    // while (node.next) node = node.next;
    // return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }
}

// 🤔 GetLast GetAt

// <93. Remove Anything with RemoveAt>
// <94. RemoveAt Solution>
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
  }
}

// <95. Insert Anywhere with InsertAt>
// <96. InsertAt Solution>
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    // -> so if this.getAt(index - 1) returns a falsy value, then we will go into this or case, and we will instead run this line of code right here; so getLast() will be assigned to previous.
    const node = new Node(data, previous.next);
    // -> we will create our new node and the new node's next property will be previous.next which had been null as well.
    previous.next = node;
    // -> and then previous.next will be now updated to node.
  }
}

// <97. Code Reuse in Linked Lists>
// insertFirst(data) -> insertAt(data, 0)
// insertLast(data) -> insertAt(data, this.size() - 1)
// removeFirst() -> removeAt(0)
// removeLast() -> removeAt(this.size() - 1)
// getFirst() -> getAt(0)
// getLast() -> getAt(this.size() - 1)
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    // -> so if this.getAt(index - 1) returns a falsy value, then we will go into this or case, and we will instead run this line of code right here; so getLast() will be assigned to previous.
    const node = new Node(data, previous.next);
    // -> we will create our new node and the new node's next property will be previous.next which had been null as well.
    previous.next = node;
    // -> and then previous.next will be now updated to node.
  }
}

// <98. List Traversal Through ForEach>
// <100. Brushup on Generators>
// 📎 BABEL

// #1
function* numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator = numbers();
generator; // {}; so we can use this return generator object to manipulate or walk through segments of the code in here.
generator.next(); // {"value": 2, "done": false}; so this is an object right here, that generator.next is returning.

// -> when we define a generator, we call the geneartor, and call .next on the returned value. When we call .next, the code inside the generator is going to execute until a yield statement is found. When the yield statement is found, execution of that function is paused.
generator.next(10); // {"value": 30, "done": true}
// -> the first time I call next, generator executes all the way up to the yield statement and then it automatically returns whatever was yielded, in this case, result. The next time I call generator.next, if I pass in a value, that value will be inserted in place of the yield statment. So when I make this second call right here, this generator.next with 10, and so we then return 20 plus 10, and the result is 30 over here.

// #2
function* list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator = list();
generator.next(); // {"value": 1, "done": false}
generator.next(); // {"value": 2, "done": false}; that's going to go back into the generator on this line of code and it's going to execute again until the next yield statement is found.
generator.next(); // {"value": 3, "done": false}
generator.next(); // {"value": 4, "done": false}
generator.next(); // {"value": 5, "done": false}
generator.next(); // {"done": true}
// -> and then at the very end, if I have no more yield statements in no return statement either, if I call next again, I get done true return.
generator.next(); // {"done": true}
generator.next(); // {"done": true}
generator.next(); // {"done": true}

// ✍️ so the idea here is that we can have multiple yield statements inside of a single generator

// #3
function* list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator = list(); // here's the generator and we create a generator, which is the return object from calling the generator function

const numbers = [];
for (let value of generator) {
  numbers.push(value);
}
numbers; // [1, 2, 3, 4, 5]

// ✍️ we can iterate over a generator function and for every yield statement that we have in here

// #4
function* numbers() {
  yield 1;
  yield 2;
  yield* moreNumbers(); // yield* specifically means, "Hey, I'm about to pass you another generator. The next time that someone calls next on this, go into that generator and execute it until we hit a yield statement".
  yield 6;
  yield 7;
}

function* moreNumbers() {
  yield 3;
  yield 4;
  yield 5;
}

const generator = numbers();

let values = [];
for (let value of generator) {
  values.push(value);
}
values; // 1, 2, 3, 4, 5, 6, 7]

// ✍️ if we create 2 generators, we can nest generators

// #4
class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  *printValues() {
    yield this.value; // I have a generator that right now just yields the value of the head of the tree or whichever node we're operating on here(1172).
    for (let child of this.children) {
      yield* child.printValues();
    }
    // -> if I call printValues(), if I call this generator on a single node in the tree, it will first yield that node's value(1168). The next time I call next on it, I will enter my for loop here and we can delegate to other generators. And so for each child of this top node of the head node, I will walk through its children and call printValues() on that node as well.
  }
}

const tree = new Tree(1, [new Tree(2, [new Tree(4)]), new Tree(3)]);

tree.printValues().next(); // {"value": 1, "done": false}
// -> 🌳 but I want to iterate through the entire tree(1169)

const values = [];
for (let value of tree.printValues()) {
  values.push(value);
}
values; // [1, 2, 3, 4]
// (1182) Notice that I'm just passing in the generator here directly.

// ✍️ We created a tree, at the very top or the head of the tree was a node of value 1, it had children of 2 and 3, and then the node of 2 also had a child of 4(1176). We called the head's generator of printValues() and then we iterated over it(1182). That means that we are now walking into *printValues and we execute until we hit the first yield statement(1167); so at the first yield statement, we enter the body of the for loop. We push on that value until the vaule is array(1183) and then we walk back into the generator(1167). We then start iterating over the head's children, and for each child of the head, we're going to delegate to that child's printValues function(1169). And so this is going to recurs through all the different nodes. And eventually we walk over every node in the tree(1182)

// 🤔 📎 rally.coding.com
*/

// <101. Linked Lists with Iterators>
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    // -> so if this.getAt(index - 1) returns a falsy value, then we will go into this or case, and we will instead run this line of code right here; so getLast() will be assigned to previous.
    const node = new Node(data, previous.next);
    // -> we will create our new node and the new node's next property will be previous.next which had been null as well.
    previous.next = node;
    // -> and then previous.next will be now updated to node.
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
