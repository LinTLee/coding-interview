/**
We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.
 */
var kthGrammar = function(n, k) {
  
  var rows = ['0'];
  for (var row = 1; row < n; row ++) {
    var value = rows[row - 1].split('');
    var newRow = '';
    for (var i = 0; i < value.length; i++) {
      newRow += value[i] === '0' ? '01' : '10';
    }
    
    rows.push(newRow);
  }
  
  var lastRow = rows[rows.length - 1].split('');
  return lastRow[k - 1];
  
};

console.log(kthGrammar(3, 1));
