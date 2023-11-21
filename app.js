const { LinkedList } = require("./linked-lists");
const { DoublyLinkedList } = require("./doubly-linked-lists");

const dll = new DoublyLinkedList();
dll.append(10);
// dll.append(20);
dll.append(30);
dll.remove(20);
dll.printList();
console.log(dll.length);
