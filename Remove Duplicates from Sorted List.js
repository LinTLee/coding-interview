/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
*/
class Node {
  constructor (val, next) {
    this.val = val;
    this.next = next;
  }
}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)

node1.next = node2
node2.next = node3
node3.next = node4
var head = node1

function deleteDuplicates (head) {
  
  var prevNode = null;
  var node = head;
  
  while (node != null) {
    
    if (prevNode == null) {
      prevNode = node
      node = node.next
      continue
    }
    
    if (prevNode.val === node.val) {
      node = node.next
      continue
    }
    
    prevNode.next = node
    prevNode = node
    node = node.next
  }

  return head;
}

console.log(deleteDuplicates(head))

var node = head;
while (node != null) {
  console.log(node.val)
  node = node.next
}
