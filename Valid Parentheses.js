/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

var isValid = function(s) {
  var stack = [];
  var chars = s.split('');
  
  for (var i = 0; i < chars.length; i++) {
    if (stack.length === 0) {
      stack.push(chars[i]);
    }
    else if (
      (stack[stack.length - 1] === '(' && chars[i] === ')') ||
      (stack[stack.length - 1] === '[' && chars[i] === ']') ||
      (stack[stack.length - 1] === '{' && chars[i] === '}')
    ) {
      var newStack = [];
      for (var s = 0; s < stack.length - 1; s ++) {
        newStack.push(stack[s]);
      }
      stack = newStack;
    } else {
      stack.push(chars[i]);
    }
    
    //console.log(stack);
  }
  
  return (stack.length === 0)
}

console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("{[]}"))

