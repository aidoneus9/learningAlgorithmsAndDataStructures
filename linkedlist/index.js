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
*/

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

module.exports = { Node, LinkedList };
