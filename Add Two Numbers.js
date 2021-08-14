/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

class Node {
  constructor (val, next) {
    this.val = val;
    this.next = next;
  }
}

var node1a = new Node(3);
var node1b = new Node(4, node1a);
var node1c = new Node(2, node1b);
var head1 = node1c;

var node2a = new Node(4);
var node2b = new Node(6, node2a);
var node2c = new Node(5, node2b);
var head2 = node2c;

var addTwoNumbers = function (l1, l2) {
  var makeupNumber = function (listHead) {
    var node = listHead.next;
    var number = listHead.val;
    var count = 1
    while (node != null) {
      var newNumber = node.val;
      for (var i = 1; i <= count; i++) {
        newNumber = newNumber * 10
      }
      number = newNumber + number;
      count++;
      node = node.next;
    }
    return number
  }
  var sum1 = makeupNumber(l1);
  var sum2 = makeupNumber(l2);
  var sum = sum1 + sum2;
  
  var arr = sum.toString().split('')
  
  var newHead = null;
  for (var i = 0; i < arr.length; i ++) {
    var node = new Node(arr[i], i === 0 ? null : newHead);
    newHead = node;
  }
  return newHead
}

console.log(addTwoNumbers(head1, head2));
