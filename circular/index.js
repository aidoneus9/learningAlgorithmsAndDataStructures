// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// <104. Detecting Linked Lists Loops>
// In a circular linked list, we do not have a tail node. With a circular linked list, we would have a tail node or kind of a last node, so to speak, or what we might imagine to be a last node, that maybe accidentally points at an earlier node within the linked list.
// -> So if there is no element in our linked list that has a next value of null, then we would end up with a ton of infinite loops.

function circular(list) {}

module.exports = circular;
