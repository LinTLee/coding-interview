/*
Input  :  arr[] = {1, 2, 3, 4, 5, 6}
Output : Root of the following tree
                  1
                 / \
                2   3
               / \ / 
              4  5 6  
              
*/

class Node {
  constructor (val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function createTree (arr) {
  
  function createTreeNode (index, arr) {
    if (index > arr.length || arr[index-1] == null) {
      return null;
    }
  
    var node = new Node(arr[index-1])
    node.left = createTreeNode(index * 2, arr);
    node.right = createTreeNode(index * 2 + 1, arr);
    return node;
  }
  
  var root = createTreeNode(1, arr);
  return root;
}

var root = createTree([1, 2, 3, 4, 5, 6])
console.log(root);
