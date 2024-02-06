class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	printList() {
		// Check for empty list
		if (!this.head) {
			console.log("The list is empty.");
			return;
		}
		let currentNode = this.head;
		let listStr = "";
		// Traverse the list and build the string
		while (currentNode) {
			listStr += `${currentNode.value} --> `;
			currentNode = currentNode.next;
		}
		// Remove the last arrow and print the result
		console.log(listStr.slice(0, -4));
	}

	append(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		}
		if (this.length > 0) {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	prepend(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		}
		if (this.length > 0) {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
	}

	size() {
		return this.length;
	}

	head() {
		return this.head;
	}

	tail() {
		return this.tail;
	}

	pop() {
		if (this.length === 0) {
			return;
		}
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length--;
		}
		if (this.length > 1) {
			let currentNode = this.head;
			while (currentNode.next.next !== null) {
				currentNode = currentNode.next;
			}
			currentNode.next = null;
			this.tail = currentNode;
		}
	}

	contains(value) {
		let currentNode = this.head;
		while (currentNode.next !== null) {
			currentNode = currentNode.next;
			if (currentNode.value === value) {
				return true;
			}
		}
		return false;
	}
}

export { LinkedList, Node };
