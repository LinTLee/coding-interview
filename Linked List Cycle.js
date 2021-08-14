/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Notice that you should not modify the linked list.
*/
class Node {
  constructor (val, next) {
    this.val = val;
    this.next = next;
  }
}

var node1 = new Node(3)
var node2 = new Node(2)
var node3 = new Node(0)
var node4 = new Node(4)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2
var head = node1

function detectCycle (head) {
  
  var maxNodes = Math.pow(10, 4);
  var nodeHistory = [];
  var node = head;
  var isCycle = false;
  
  while (node != null) {
    if (maxNodes <= 0) {
      break;
    }
    
    for (var i = 0; i < nodeHistory.length; i++) {
      if (nodeHistory[i] === node) {
        isCycle = true;
        break;
      }
    }
    nodeHistory.push(node)
    
    maxNodes --;
    node = node.next
  }

  return isCycle;
}

console.log(detectCycle(head))
