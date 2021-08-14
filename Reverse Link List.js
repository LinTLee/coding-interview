/*
Write a function for reversing a linked list. ↴ Do it in place. ↴

Your function will have one input: the head of the list.

Your function should return the new head of the list.
*/

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

var node1 = new Node(1);
var node2 = new Node(2, node1);
var node3 = new Node(3, node2);
var node4 = new Node(4, node3);
var head = node4;

function reverse (head) {
  
  var count = 1;
  var newHead = head;
  
  var node = head;
  while (node != null) {
    //console.log(node.value);
    newHead = node;
    node = node.next;
    count ++;
  }

  var newTail = newHead;
  for (var c = count; c >= 1; c--) {
    var node = head;
    for (var index = 0; index < c; index ++) {
      //console.log(node.value);
      newTail.next = node;
      node = node.next;
    }
    //console.log(newTail.value);
    newTail = newTail.next;
  }
  
  // new tail was the original head. clear the link.
  newTail.next = null;
  
  node1 = newHead;
  while (node1 != null) {
    console.log(node1.value);
    node1 = node1.next;
  }

  return newHead;
}

reverse(head);
