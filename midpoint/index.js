// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// <102. Midpoint of a Linked List>
// <103. Midpoint Solution>
function midpoint(list) {
  let slow = list.getFirst(); // list.head;
  let fast = list.getFirst(); // list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 🤔 Why can't I just check while (fast.next.next) ?
  // -> then fast.next will be null and when you call fast.next.next, it will give a null pointer exception.

  return slow;
}

module.exports = midpoint;
