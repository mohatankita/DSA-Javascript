// Stacks - FILO (First In Last out)

class Stack {
  constructor() {
    this.top = -1;
    this.data = [];
  }

  // check whether the stack is empty or not
  isStackEmpty() {
    return this.top === -1;
  }

  getTop() {
    return this.top;
  }

  // add new element to the  stack
  push(item) {
    this.data[++this.top] = item;
  }

  // removes the last element in the stack
  pop() {
    if (this.top === -1) {
      return "stack is underflow";
    }
    const poppedItem = this.data[this.top];
    delete this.data[this.top--];
    return poppedItem;
  }

  // Returns the topmost element in the stack
  peek() {
    return this.data[this.top];
  }

  // Prints the stack values
  printStack() {
    for (let i = 0; i <= this.top; i++) {
      console.log(this.data[i]);
    }
  }
}

module.exports = Stack;