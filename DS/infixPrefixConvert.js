const Stack = require('./Stacks.js');

function isOperator(value) {
  return value === "+" || value === "-" || value === "*" || value === "/" || value === "^"; 
}

function checkPrecedence(operator) {
  if (operator === "+" || operator === "-") {
    return 1;
  } else if (operator === "*" || operator === "/") {
    return 2;
  } else if (operator === "^") {
    return 3;
  } else {
    return 0;
  }
}

function convertToPrefix(expression) {
  let stack = new Stack();
  let str = [];

  expression.forEach((value) => {
    if ((value.charCodeAt() >= 65 && value.charCodeAt() <= 90)
      || (value.charCodeAt() >= 97 && value.charCodeAt() <= 122)
      || (value.charCodeAt() >= 48 && value.charCodeAt() <= 57)) {
      str.push(value);
    }
    else if (value === ")") {
      stack.push(value);
    }
    else if (value === "(") {
      while(stack.data[stack.getTop()] !== ")") {
        str.push(stack.pop());
      }
      stack.pop();
    }
    else if (isOperator(value)) {
      while(!stack.isStackEmpty() && checkPrecedence(value) < checkPrecedence(stack.data[stack.getTop()])) {
        str.push(stack.pop());
      }
      stack.push(value);
    }
  });

  while (!stack.isStackEmpty()) {
    str.push(stack.pop());
  }

  return str.reverse().join("");
}

const infixExpression = 'x+y*z/w+u';
const prefixExpression = convertToPrefix(infixExpression.split("").reverse());
console.log("prefixExpression", prefixExpression);
// prefixExpression ++x/*yzwu