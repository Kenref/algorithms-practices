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
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return;
		}
		this.tail.next = newNode;
		newNode.prev = this.tail;
		this.tail = newNode;
		this.length++;
	}

	printList() {
		if (this.length === 0) return null;
		if (this.length === 1) {
			console.log(this.head.value);
			return;
		}

		let current = this.head;
		let returnValue = "";

		while (current !== null) {
			returnValue +=
				returnValue === "" ? current.value : `--> ${current.value}`;
			current = current.next;
		}
		console.log(returnValue);
	}

	prepend(value) {
		let newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return;
		}
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++;
	}

	remove(value) {
		if (this.length === 0) return null;
		if (this.length === 1 && this.head.value === value) {
			this.head = null;
			this.tail = null;
			this.length = 0;
			return;
		}
		let current = this.head;
		while (current.value !== value) {
			current = current.next;
			if (current === null) return;
		}
		if (this.length === 2) {
			if (this.head.value === value) this.head = this.tail;
			if (this.tail.value === value) this.tail = this.head;
			this.length = 1;
			return;
		}
		if (current.value === value) {
			current.prev.next = current.next;
			current.next.prev = current.prev;
			this.length--;
		}
	}

	insertAt(value, index) {
		let newNode = new Node(value);
		if (index > this.length || index < 0) {
			return null;
		}
		if (this.length === 0) {
			this.head = newNode;
			this.value = newNode;
			return;
		}
		if (this.length === 1) {
			if (index === 1) {
				this.head.next = newNode;
				newNode.prev = this.head;
				this.tail = newNode;
			}
			if (index === 0) {
				this.tail.prev = newNode;
				newNode.next = this.tail;
				this.head = newNode;
			}
			this.length++;
		}
		let current = this.head;
		for (let i = 0; i < index - 1; i++) {
			current = current.next;
		}
		current.next = newNode;
		current.next.prev = newNode;
		newNode.prev = current;
		newNode.next = current.next;
		this.length++;
	}
	// getAtIndex(index) {

	// }
	// clear() {
	// }
}
module.exports = { Node, DoublyLinkedList };
