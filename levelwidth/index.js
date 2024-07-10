// --- Directions
// Given the root node of a tree, return
// -> ⚠️ We are working with a node here(📎 node.js file: this is an individual node that we're working with. There is no tree class.). (16) root is a node.
// an array where each element is the width
// of the tree at each level.
// -> ⚠️ width: breadth first traversal
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// <116. Level Width Declaration>
// ⚠️ You are not going to be using some pre-built traversal function. Instead, you are going to have to write a function that will traverse through the tree and do some work during that traversal.

// <117. Measuring Level Width>
function levelWidth(root) {
  const arr = [root, "s"];
  const widths = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "s") {
      widths.push(0);
      arr.push("s");
    } else {
      arr.push(...node.children);
      widths[widths.length - 1]++;
    }
  }

  return widths;
}

module.exports = levelWidth;
