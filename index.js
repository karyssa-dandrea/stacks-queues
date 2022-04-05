class Stack {
  list = [];

  constructor(initialList) {
    if (initialList) this.list = initialList;
  }

  stackPop() {
    const popped = this.list.pop();
    console.log("inside pop", this.list);
    return popped;
  }

  // methods
  stackPeek() {
    return this.list[this.list.length - 1];
  }
}

const myList = new Stack([1, 2, 3]);

myList.stackPop();
