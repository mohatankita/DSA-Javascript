const prompt = require('prompt-sync')();

// User defined Array class
class Array {

  constructor() {
    this.length = 0;
    this.data = [];
  }
  
  // pushing new element in an array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  // removing the last element
  pop() {
    const poppedItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return this.data;
  }

  // inserting the element at specific position
  insertAt(index, item) {
    if (this.length < index) {
      return -1;
    }
    for(let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i-1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }

  // deleting at specific position
  deleteAt(index) {
    if (this.length < index) {
      return -1;
    }
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  getElementAtIndex(index) {
    return this.data[index];
  }

  getElements() {
    console.log("Array elements are");
    for(let i = 0; i < this.length; i++) {
      console.log(this.data[i]);
    }
  }
}

let arr = new Array();
let userInput = 1;
while (userInput >= 1 && userInput <= 6) {
  userInput = prompt(`
    1. press 1 to push an element
    2. press 2 to remove an element
    3. press 3 to remove an element at specific index
    4. press 4 to insert an element at specific index
    5. press 5 to get an element at specific index
    6. press 6 to display elements in the array
    7. press 7 to exit \n`
  );
  switch(parseInt(userInput)) {
    case 1:
      const element = prompt("Please provide the element to be added ");
      console.log(arr.push(element));
      console.log(`${element} is successfully added`);
      break;
    case 2:
      console.log(arr.pop());
      console.log("Element has been successfully removed");
      break;
    case 3:
      const deleteindex = prompt("Please specify the index ");
      const deleteItem = arr.deleteAt(Number(deleteindex));
      if (deleteItem === -1) {
        console.log("Index does not exist");
      } else {
        console.log(`Element at position ${deleteindex} has been successfully removed`);
        console.log(deleteItem);
      }
      break;
    case 4:
      const addindex = prompt("Please specify the index");
      const item = prompt("provide the element value");
      const insertItem = arr.insertAt(Number(addindex), item);
      if (insertItem === -1) {
        console.log("Index does not exist");
      } else {
        console.log(`Element at position ${addindex} has been successfully added`);
        console.log(insertItem);
      }
      break;
    case 5:
      const index = prompt("Please specify the index");
      console.log(`The element at index ${index} is `, arr.getElementAtIndex(Number(index)));
      break;
    case 6:
      arr.getElements();
      break;
    case 7:
    default:
      console.log("Quit!");
      break;
  }
}