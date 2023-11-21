const { LinkedList, Node } = require("./linked-lists");

describe("#LinkedList class", () => {
	test("test list class initialisation", () => {
		const ll = new LinkedList();
		expect(ll.head).toBeNull();
		expect(ll.tail).toBeNull();
		expect(ll.length).toBe(0);
	});
});

describe("#Node class", () => {
	test("test node class initialisation", () => {
		const newNode = new Node();
		expect(newNode.value).toBeNull();
		expect(newNode.nextNode).toBeNull();
	});
});

describe("#append", () => {
	let ll;
	beforeEach(() => {
		ll = new LinkedList();
	});

	test("adding 1 value to the list", () => {
		ll.append(10);
		expect(ll.head.value).toBe(10);
		expect(ll.tail.value).toBe(10);
		expect(ll.length).toBe(1);
	});
	test("adding 2 values to the list", () => {
		ll.append(10);
		ll.append(20);
		expect(ll.head.value).toBe(10);
		expect(ll.tail.value).toBe(20);
		expect(ll.tail.nextNode).toBeNull();
		expect(ll.length).toBe(2);
	});
	test("adding 3 values to the list", () => {
		ll.append(10);
		ll.append(20);
		ll.append(30);
		expect(ll.head.value).toBe(10);
		expect(ll.head.nextNode.value).toBe(20);
		expect(ll.tail.value).toBe(30);
		expect(ll.tail.nextNode).toBeNull();
		expect(ll.length).toBe(3);
	});
});

describe("#prepend", () => {
	let ll;
	beforeEach(() => {
		ll = new LinkedList();
	});

	test("adding 1 value to the list", () => {
		ll.prepend(10);
		expect(ll.head.value).toBe(10);
		expect(ll.tail.value).toBe(10);
		expect(ll.length).toBe(1);
	});
	test("adding 2 values to the list", () => {
		ll.prepend(10);
		ll.prepend(20);
		expect(ll.head.value).toBe(20);
		expect(ll.tail.value).toBe(10);
		expect(ll.length).toBe(2);
	});
	test("adding 3 values to the list", () => {
		ll.prepend(10);
		ll.prepend(20);
		ll.prepend(30);
		expect(ll.head.value).toBe(30);
		expect(ll.head.nextNode.value).toBe(20);
		expect(ll.tail.value).toBe(10);
		expect(ll.length).toBe(3);
	});
});

describe("#size", () => {
	test("returns the number of nodes in the list", () => {
		const ll = new LinkedList();
		ll.append(10);
		ll.append(10);
		ll.append(10);
		expect(ll.size()).toBe(3);
	});
});

describe("#getHead", () => {
	test("return the value at head", () => {
		const ll = new LinkedList();
		ll.append(10);
		ll.prepend(20);
		expect(ll.getHead()).toBe(20);
		ll.prepend(50);
		expect(ll.getHead()).toBe(50);
	});
	test("test edge cases", () => {
		const ll = new LinkedList();
		expect(ll.getHead()).toBeNull();
	});
});

describe("#getTail", () => {
	test("return the value at tail", () => {
		const ll = new LinkedList();
		ll.append(10);
		ll.prepend(20);
		expect(ll.getTail()).toBe(10);
		ll.append(50);
		expect(ll.getTail()).toBe(50);
	});
	test("test edge cases", () => {
		const ll = new LinkedList();
		expect(ll.getTail()).toBeNull();
	});
});

describe("#getAtIndex", () => {
	test("return value at given index", () => {
		const ll = new LinkedList();
		ll.append(10);
		ll.append(20);
		ll.append(30);
		ll.append(40);
		expect(ll.getAtIndex(1)).toBe(20);
		expect(ll.getAtIndex(2)).toBe(30);
	});
	test("test edge cases", () => {
		const ll = new LinkedList();
		expect(ll.getAtIndex(1)).toBe(null);
		expect(ll.getAtIndex(2)).toBe(null);
		ll.append(10);
		expect(ll.getAtIndex(0)).toBe(10);
		expect(ll.getAtIndex(-1)).toBe(null);
		expect(ll.getAtIndex(50)).toBe(null);
	});
});

describe("#pop", () => {
	let ll;

	beforeEach(() => {
		ll = new LinkedList();
	});

	test("null if list is empty", () => {
		expect(ll.pop()).toBeNull();
	});

	test("removes the last element and returns its value when the list has one node", () => {
		ll.append(10);
		expect(ll.pop()).toBe(10);
		expect(ll.head).toBeNull();
		expect(ll.tail).toBeNull();
		expect(ll.length).toBe(0);
	});

	test("removes the last element and returns its value when the list has multiple nodes", () => {
		ll.append(10);
		ll.append(20);
		ll.append(30);
		expect(ll.pop()).toBe(30);
		expect(ll.tail.value).toBe(20);
		expect(ll.length).toBe(2);
	});

	// Add more tests if necessary for additional edge cases.
});

describe("#contains", () => {
	test("check if list contains value", () => {
		const ll = new LinkedList();
		expect(ll.contains(10)).toBe(false);
		ll.append(10);
		ll.append(20);
		ll.append(30);
		expect(ll.contains(10)).toBe(true);
		expect(ll.contains(40)).toBe(false);
		expect(ll.contains(30)).toBe(true);
	});
});

describe("#find", () => {
	let ll;
	beforeEach(() => {
		ll = new LinkedList();
	});

	test("returns null when the list is empty", () => {
		expect(ll.find(10)).toBeNull();
	});

	test("returns the index of the head when found", () => {
		ll.append(10);
		expect(ll.find(10)).toBe(0);
	});

	test("returns the correct index of a middle item", () => {
		ll.append(10);
		ll.append(20);
		ll.append(30);
		expect(ll.find(20)).toBe(1);
	});

	test("returns the correct index of the tail when found", () => {
		ll.append(10);
		ll.append(20);
		ll.append(30);
		expect(ll.find(30)).toBe(2);
	});

	test("returns null when the value is not found", () => {
		ll.append(10);
		ll.append(20);
		ll.append(30);
		expect(ll.find(50)).toBeNull();
	});
});

describe("#printList", () => {
	let ll;
	let consoleSpy;

	beforeEach(() => {
		ll = new LinkedList();
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});

	afterEach(() => {
		consoleSpy.mockRestore();
	});

	test("prints 'null' for an empty list", () => {
		ll.printList();
		expect(consoleSpy).toHaveBeenCalledWith(null); // or your expected output for an empty list
	});

	test("prints the list with one node", () => {
		ll.append(10);
		ll.printList();
		expect(consoleSpy).toHaveBeenCalledWith("10"); // or your expected format for single node list
	});

	test("prints the list with multiple nodes", () => {
		ll.append(10);
		ll.append(20);
		ll.append(30);
		ll.printList();
		// Expect it to be called with the string representation of the list
		// Adjust the expected string based on how your `printList` method formats the output
		expect(consoleSpy).toHaveBeenCalledWith("10 --> 20 --> 30");
	});
});

describe("#insertAt", () => {
	let ll;
	beforeEach(() => {
		ll = new LinkedList();
	});

	test("inserts a value at a specific index in a non-empty list", () => {
		ll.append(10);
		ll.append(30);
		ll.insertAt(20, 1);
		expect(ll.getAtIndex(1)).toBe(20);
		expect(ll.length).toBe(3);
	});

	test("inserts a value at the head of the list", () => {
		ll.append(20);
		ll.insertAt(10, 0);
		expect(ll.head.value).toBe(10);
		expect(ll.length).toBe(2);
	});

	test("inserts a value at the tail of the list", () => {
		ll.append(10);
		ll.append(20);
		ll.insertAt(30, 2); // Assuming index equal to length appends to the end
		expect(ll.tail.value).toBe(30);
		expect(ll.length).toBe(3);
	});

	test("inserts a value in an empty list", () => {
		ll.insertAt(10, 0);
		expect(ll.head.value).toBe(10);
		expect(ll.tail.value).toBe(10);
		expect(ll.length).toBe(1);
	});
});

describe("#removeAt", () => {
	let ll;
	beforeEach(() => {
		ll = new LinkedList();
	});

	test("removes a value at a specific index in a non-empty list", () => {
		ll.append(10);
		ll.append(20);
		ll.append(30);
		ll.removeAt(1);
		expect(ll.getAtIndex(1)).toBe(30);
		expect(ll.length).toBe(2);
	});

	test("removes the head of the list", () => {
		ll.append(10);
		ll.append(20);
		ll.removeAt(0);
		expect(ll.head.value).toBe(20);
		expect(ll.length).toBe(1);
	});

	test("removes the tail of the list", () => {
		ll.append(10);
		ll.append(20);
		ll.removeAt(1);
		expect(ll.tail.value).toBe(10);
		expect(ll.length).toBe(1);
	});

	test("removes the only node in the list", () => {
		ll.append(10);
		ll.removeAt(0);
		expect(ll.head).toBeNull();
		expect(ll.tail).toBeNull();
		expect(ll.length).toBe(0);
	});

	test("does not remove a node at an index greater than list length", () => {
		ll.append(10);
		ll.removeAt(1); // Assuming this should not remove anything
		expect(ll.length).toBe(1); // Length should remain unchanged
	});

	test("does not remove a node at a negative index", () => {
		ll.append(10);
		ll.removeAt(-1); // Assuming this should not remove anything
		expect(ll.length).toBe(1); // Length should remain unchanged
	});
});
