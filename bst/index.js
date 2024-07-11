// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

// <118. What's a Binary Search Tree?>
// value/data/key
// value > left.value
// value < right.value
// -> 🤔 how to add new nodes into an existing binary search tree
// -> 🤔 whether you have a binary search tree or just a normal binary tree
// -> 🤔 validate a binary search tree; so maybe you are given a tree and you have to run some code on it and validate whether or not it is well formed.

// <119. Binary Search Tree Implementation>
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = Node;

// (26)(27) this particular node does not have any children
// 📌 recursion
// 📌 check
// (two cases) the current node has a node already assigned to the left and the right
// (two cases) you have reached the bottom of the tree and you now need to insert this new value somewhere -> you're going to check to see if the left node or the right node is not defined and then assign the value at the correct location
