class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	append(value) {
		let newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	prepend(value) {
		let newNode = new Node(value);
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
	}

	printList() {
		let current = this.head;
		let result = "";
		if (this.head === null) return null;
		while (current !== null) {
			result += result === "" ? current.value : ` --> ${current.value}`;
			current = current.next;
		}
		console.log(result);
	}

	remove(value) {
		if (this.length === 0) {
			return null;
		}
		if (this.length === 1 && this.head === value) {
			this.head = null;
			this.tail = null;
			this.length = 0;
			return;
		}
		let current = this.head;
		while (current.value !== value) {
			current = current.next;
			if (current === null) return null;
		}
		if (this.length === 2) {
		}
		if (current.value === value) {
			current.prev.next = current.next;
			current.next.prev = current.prev;
			this.length--;
		}
		return null;
	}

	insertAt(value, index) {}
	getAtIndex(index) {}
	clear() {}
}

module.exports = { Node, DoublyLinkedList };
