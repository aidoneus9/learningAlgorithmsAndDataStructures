// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree
// -> ✍️ make sure you accept a function that gets called with every node in the tree

// <108. Tree Overview>
// 📌 tree traversal: iterating through all the different elements within a tree
// -> 2 distinct ways in which we order the elements and iterate through those elements
// 1) Breadth-First Traversal
// 2) Depth-Frist Traversal: essentially with Depth-Frist Traversal, we try to get to the bottom of the tree as quickly as possible.

// <109. Node Implementation>
// ✍️ add(data): given some data, create a new node and add it to the current node's 'children' array

// <110. More on Nodes>
// ✍️ remove(data): given some data, look at each child of the current node and remove any node with data === data

// ✍️ filter
let arr = [1, 2, 3];

arr = arr.filter((element) => {
  return element === 1;
}); // [1]
// -> filter does not modify the arr array, so after doing this filter call, we will assign the result to the arr

// 📎 test.js
// (17) we are creating a new node with some data 'a'
// (18) we then add on some element 'b'
// -> so n now has one child and that child is a node with data 'b'
// (19) we can then make an assertion about the number of children that n has,
// (20) or we can access that child directly by looking at the children array and getting the first element out of it; then we can say, look at the children that element has. So this would be the children of node 'b' right here; this test is just asserting to make sure that node 'b' doesn't end up with any children because we didn't actually add any in this case

class Node {
  constructor(data) {
    // initialize the data variable
    this.data = data;
    // create an empty array of children
    this.children = []; // so every single node has this children array, so every child have some number of children. We can tell which nodes are a child of a given node by just looking at the children array.
  }

  add(data) {
    // const node = new Node(data);
    // this.children.push(node);
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

// <111. Tree Implementation>
// <112. Traverse By Breadth>
// <113. Solving for Breadth-First Traversal>
// <114. Depth First Traversal>

class Tree {
  constructor() {
    this.root = null; // when we first create a tree, it's going to start off with an empty root properly
  }

  traverseBF(fn) {
    // 📌 take the root node out of our tree and stick it into a brand new array
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      // 📌 immediately take all of this node's children and push them into the array
      arr.push(...node.children);
      // for (let child of node.children) {
      //   arr.push(child);
      // }
      fn(node); // 🤔
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
}

const node = new Node(1); // const node would be new node with some amount of data
const tree = new Tree(); // then to create a tree and
tree.root = node; // then we would manually update the root property of the tree
// -> so now the tree thinks that its root node is the node we just created

module.exports = { Tree, Node };
// (68) ✍️ Now, one thing that you'll notice about this tree implementation is that we did not add on, and we're not saying that we're going to add on any type of insert or remove methods to this thing like we had done previously with the linked list; with the linked list, the linked list class was really in charge of all the elements inside the linked list. Yes, the linked list had references to each subsequent element where each node had references to each subsequent element. But if we called add or remove on that thing on the linked list, it was more or less kind of obvious how we wanted to operate on the linked list. But in the case of a tree, whenever we start to want to add or remove elements from it, we have to very precisely specify which node we want to be adding or removing elements from.
// (73) as long as array.length is a truthy value; so as soon as our array is empty, as soon as it has a length of zero, that means there's nothing else for us to do
// (74) shift() method will take out the first element of the array
// (77) ⚠️ Now the important thing to keep in mind is that we cannot say simply node.children because node.children is an array; so if we push an array into an array, we would then have a nested array
