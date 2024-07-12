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
// <120. BST Insertion>
// <121. Do You Contain This?>
// <122. Solving Contains>
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

module.exports = Node;

// (26)(27) this particular node does not have any children
// 📌 recursion
// 📌 check
// (two cases) the current node has a node already assigned to the left and the right
// (two cases) you have reached the bottom of the tree and you now need to insert this new value somewhere -> you're going to check to see if the left node or the right node is not defined and then assign the value at the correct location
// (33) this.left: remember, this is a reference to the node that is on the left hand side, so it is an instance of the node class; so to recurs through this, to make sure that we tell this left node to take care of inserting this piece of data, we'll call insert on that and pass in our data.
// (47) we're specifically returning this here because remember, we want to return the entire node
// (51) Now remember, with recursion, we do have to make sure that we return any recursive function call, because if this function call right here ends up returning a value, then the overall function call needs to return it as well.
// (56) some data argument does not exist inside of our tree; so if everything fails, then at the very end we're going to end up returning null
