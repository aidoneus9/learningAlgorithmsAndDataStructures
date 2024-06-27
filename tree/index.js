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

// <108. Tree Overview>
// 📌 tree traversal: iterating through all the different elements within a tree
// -> 2 distinct ways in which we order the elements and iterate through those elements
// 1) Breadth-First Traversal
// 2) Depth-Frist Traversal: essentially with Depth-Frist Traversal, we try to get to the bottom of the tree as quickly as possible.

// <109. Node Implementation>
// ✍️ add(data): given some data, create a new node and add it to the current node's 'children' array

// <110. More on Nodes>
// ✍️ remove(data): given some data, look at each child of the current node and remove any node with data === data
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
    this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {}

module.exports = { Tree, Node };
