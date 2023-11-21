class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	printList() {
		let node = this.head;
		if (this.length === 0) {
			console.log(null);
		} else if (this.length === 1) {
			console.log(`${node.value}`);
		} else {
			let str = `${node.value}`;
			node = node.nextNode;
			while (node !== null) {
				str += ` --> ${node.value}`;
				node = node.nextNode;
			}
			console.log(str);
		}
	}

	append(value) {
		let currentNode = new Node(value);
		if (this.length === 0) {
			this.head = currentNode;
			this.tail = currentNode;
		} else {
			this.tail.nextNode = currentNode;
			this.tail = currentNode;
		}
		this.length++;
	}

	prepend(value) {
		let currentNode = new Node(value);
		if (this.length === 0) {
			this.head = currentNode;
			this.tail = currentNode;
		} else {
			currentNode.nextNode = this.head;
			this.head = currentNode;
		}
		this.length++;
	}

	size() {
		return this.length;
	}

	getHead() {
		if (this.length > 0) {
			return this.head.value;
		} else {
			return null;
		}
	}

	getTail() {
		if (this.length === 0) {
			return null;
		} else {
			return this.tail.value;
		}
	}

	getAtIndex(index) {
		let current = this.head;
		if (index > this.length || index < 0) {
			return null;
		}
		for (let i = 0; i < index; i++) {
			current = current.nextNode;
		}
		return current.value;
	}

	pop() {
		let current = this.head;
		let returnValue;
		if (this.length === 0) {
			return null;
		} else if (this.length === 1) {
			returnValue = current.value;
			this.head = null;
			this.tail = null;
			this.length--;
			return returnValue;
		} else {
			for (let i = 0; i < this.length - 2; i++) {
				current = current.nextNode;
			}
			returnValue = current.nextNode.value;
			current.nextNode = null;
			this.tail = current;
			this.length--;
			return returnValue;
		}
	}

	contains(value) {
		let current = this.head;
		while (current !== null) {
			if (current.value === value) return true;
			current = current.nextNode;
		}
		return false;
	}

	find(value) {
		let current = this.head;
		let counter = 0;
		while (current !== null) {
			if (current.value === value) return counter;
			current = current.nextNode;
			counter++;
		}
		return null;
	}

	insertAt(value, index) {
		let current = this.head;
		let newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else if (index >= this.length) {
			this.tail.nextNode = newNode;
			this.tail = newNode;
		} else if (index <= 0) {
			newNode.nextNode = this.head;
			this.head = newNode;
		} else {
			for (let i = 0; i < index - 1; i++) {
				current = current.nextNode;
			}
			current.nextNode = newNode;
			newNode.nextNode = current.nextNode.nextNode;
		}
		this.length++;
	}

	removeAt(index) {
		if (this.length === 0 || index < 0 || index >= this.length) {
			return null;
		}
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length = 0;
		} else if (index === 0) {
			this.head = this.head.nextNode;
			this.length--;
		} else {
			let current = this.head;
			for (let i = 0; i < index - 1; i++) {
				current = current.nextNode;
			}
			current.nextNode = current.nextNode.nextNode;
			if (index === this.length - 1) {
				this.tail = current;
			}
			this.length--;
		}
	}
}
class Node {
	constructor(value = null, nextNode = null) {
		this.value = value;
		this.nextNode = nextNode;
	}
}

module.exports = { LinkedList, Node };
