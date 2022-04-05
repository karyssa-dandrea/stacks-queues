const { add } = require("nodemon/lib/rules");

class LinkedListNode {
  #value;
  #next;

  constructor(data) {
    this.#value = data;
    this.#next = null;
  }

  add(node) {
    // if next is null
    if (!this.#next) {
      // we can set next as node
      this.#next = node;
      // if next is not null
      // we call add on the node that already occupies next
    } else {
      this.#next.add(node);
    }
  }

  // value
  // node as null until we set the next node so need add function
}

const root = new LinkedListNode("A");
const nodeB = new LinkedListNode("B");
root.add(nodeB);

console.log("root", root);
