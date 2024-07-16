// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// <123. How to Validate a Binary Search Tree>
// <124. More on Validation>
// <125. Solution to Validation>
function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) return false;

  if (min !== null && node.data < min) return false;

  if (node.left && !validate(node.left, min, node.data)) return false;

  if (node.right && !validate(node.right, node.data, max)) return false;

  return true;
}

module.exports = validate;

// (16) Is there a node to the left hand side of the root node? And the answer is yes. We have node there with a value of 0. So we then call validate with the node on the left with a minimum of null, so remember min is still null right now, but it gets a maximum of node.data; so we call validate with the left node, a minimum of null and a max of 10.
// -> So let's now go down into node 0 with those arguments; so we now have node for 0, min is still null, but max is 10; (12) so at this point, max is no longer null. So we say, is node.data greater than max or greater than 10? No, that's not true.

// ✍️ So the real key here is that every step along the way, we update the maximum value if we are trying to move to the left, and we update the minimum value if we are trying to move to the right. And then we progress through the tree, and if any node ever starts to return a value of false, we then enter into this false case right here (16), and then that kind of cascades back up and we eventually return false from the entire stack of recursive function calls.
