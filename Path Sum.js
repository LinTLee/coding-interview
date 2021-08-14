/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
*/
class TreeNode {
  constructor (val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var node1 = new TreeNode(1)
var node2 = new TreeNode(2)
var node3 = new TreeNode(3)
var node4 = new TreeNode(4)
var node5 = new TreeNode(5)
var node6 = new TreeNode(6)
var node7 = new TreeNode(7)

node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7
var root = node1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  
  function sum (node, carrySum, sums) {
  	var total = node.val + carrySum
  
    if (node.left == null && node.right == null) {
      sums.push(total);
    }
    if (node.left != null) {
      sum(node.left, total, sums)
    }
    if (node.right != null) {
      sum(node.right, total, sums)
    }
  }
  
  var allSums = []
  sum(root, 0, allSums)
  var match = allSums.find((s) => { return s === targetSum })
  console.log(allSums)
  return match != null
}

console.log(hasPathSum(root, 7))
