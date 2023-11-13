class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
}

// class List {
// 	constructor() {
// 		this.head = null;
// 		this.tail = null;
// 		this.length = 0;
// 	}
// 	append(value) {
// 		const newNode = new Node(value, null);
// 		if (this.length === 0) {
// 			this.head = newNode;
// 			this.tail = newNode;
// 		} else {
// 			this.tail.nextNode = newNode;
// 			this.tail = newNode;
// 		}
// 		this.length++;
// 	}

// 	prepend(value) {
// 		const newNode = new Node(value, this.head);
// 		if (this.length === 0) this.tail = newNode;
// 		this.length++;
// 		this.head = newNode;
// 	}

// 	getSize() {
// 		return this.length;
// 	}

// 	getHead() {
// 		return this.head;
// 	}

// 	getTail() {
// 		let node = this.head;
// 		if (node === null) return null;
// 		while (node.nextNode !== null) {
// 			node = node.nextNode;
// 		}
// 		return node.value;
// 	}

// 	atIndex(index) {
// 		let node = this.head;
// 		for (let i = 0; i < index; i++) {
// 			node = node.nextNode;
// 		}
// 		return node.value;
// 	}

// 	pop() {
// 		if (this.length === 0) {
// 			return null;
// 		} else if (this.length === 1) {
// 			this.head = null;
// 			this.tail = null;
// 			this.length--;
// 		} else {
// 			let node = this.head;
// 			for (let i = 0; i < this.length - 2; i++) {
// 				node = node.nextNode;
// 			}
// 			this.tail = node;
// 			node.nextNode = null;
// 			this.length--;
// 		}
// 	}

// 	contains(value) {
// 		let node = this.head;
// 		for (let i = 0; i < this.length; i++) {
// 			if (node.value === value) return true;
// 			node = node.nextNode;
// 		}
// 		return false;
// 	}

// 	find(value) {
// 		let node = this.head;
// 		let counter = 0;
// 		while (node.value !== null) {
// 			if (node.value === value) return counter;
// 			node = node.nextNode;
// 			counter++;
// 		}
// 		return null;
// 	}

// 	insertAt(value, index) {
// 		let node = this.head;
// 		for (let i = 0; i < index - 1; i++) {
// 			node = node.nextNode;
// 		}
// 		node.nextNode = new Node(value, node.nextNode);
// 		// node.value = value;
// 		this.length++;
// 	}

// 	removeAt(index) {
// 		let node = this.head;
// 		for (let i = 0; i < index - 1; i++) {
// 			node = node.nextNode;
// 		}
// 		node.nextNode = node.nextNode.nextNode;
// 		this.length--;
// 	}

// 	printList() {
// 		let node = this.head;
// 		let result = "";
// 		while (node !== null) {
// 			result += `--> ${node.value} `;
// 			node = node.nextNode;
// 		}
// 		console.log(result);
// 	}
// }

// class Node {
// 	constructor(value, nextNode) {
// 		this.value = value;
// 		this.nextNode = nextNode;
// 	}
// }

(module.exports = LinkedList), Node;
