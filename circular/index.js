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
// ✍️ In a circular linked list, we do not have a tail node. With a circular linked list, we would have a tail node or kind of a last node, so to speak, or what we might imagine to be a last node, that maybe accidentally points at an earlier node within the linked list.
// -> So if there is no element in our linked list that has a next value of null, then we would end up with a ton of infinite loops.

/*
function circular(list) {
  let slow = list.getFirst(); 
  let fast = list.getFirst(); 

  while (fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break;
  }

  return slow === fast;
}

module.exports = circular;
*/

// <105. Loop Solution>
function circular(list) {
  let slow = list.getFirst(); // list.head
  let fast = list.getFirst(); // list.head

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}

module.exports = circular;

// 🙅 (46) if (slow.data === fast.data); so we're not comparing the data in these in the linked list nodes because the linked list could very easily have multiple nodes with the same data inside them. So what we really want to do here is say, is it the identical node? And in JavaScript we can compare to see if a reference to an object is identical to another one by using the triple equal sign; so this literally says "is slow looking a node that is identical and like the exact same instance in memory as fast".

// ✍️ Can I use 2 SEPARATE NODES and walk thru the linked list to come to a solution?
