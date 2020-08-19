class Stack {
  constructor() {
    this.items = [];
  }

  //push element into itmes in oder of sequence
  push(element) {
    this.items.push(element);
  }

  // return the most last element in the stack and remove it
  pop() {
    if (this.items.length === 0)
      return "Stack is empty!";
    return this.items.pop();
  }

  //return the most last element in the stack
  peek() {
    return this.items[this.items.length - 1];
  }

  // isEmpty function 
  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    let str = "";
    for (var i = 0; i < this.items.length; i++)
      str += this.items[i] + " ";
    return str;
  }
}

export default new Stack();
