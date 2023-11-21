const { Node, DoublyLinkedList } = require("./doubly-linked-lists");

describe("DoublyLinkedList", () => {
	let dll;

	beforeEach(() => {
		dll = new DoublyLinkedList();
	});

	test("initializes with empty list", () => {
		expect(dll.head).toBeNull();
		expect(dll.tail).toBeNull();
		expect(dll.length).toBe(0);
	});

	test("appends node to the list", () => {
		dll.append(10);
		expect(dll.head.value).toBe(10);
		expect(dll.tail.value).toBe(10);
		expect(dll.length).toBe(1);

		dll.append(20);
		expect(dll.tail.value).toBe(20);
		expect(dll.tail.prev.value).toBe(10);
		expect(dll.length).toBe(2);
	});

	test("prepends node to the list", () => {
		dll.prepend(10);
		expect(dll.head.value).toBe(10);
		expect(dll.tail.value).toBe(10);
		expect(dll.length).toBe(1);

		dll.prepend(20);
		expect(dll.head.value).toBe(20);
		expect(dll.head.next.value).toBe(10);
		expect(dll.length).toBe(2);
	});

	test("removes node from the list", () => {
		dll.append(10);
		dll.append(20);
		dll.append(30);

		dll.remove(20);
		expect(dll.length).toBe(2);
		expect(dll.head.value).toBe(10);
		expect(dll.head.next.value).toBe(30);

		dll.remove(30);
		expect(dll.tail.value).toBe(10);
		expect(dll.length).toBe(1);
	});

	test("inserts node at a specific index", () => {
		dll.append(10);
		dll.append(30);

		dll.insertAt(20, 1);
		expect(dll.getAtIndex(1).value).toBe(20);
		expect(dll.length).toBe(3);
	});

	test("gets node at a specific index", () => {
		dll.append(10);
		dll.append(20);
		dll.append(30);

		expect(dll.getAtIndex(1).value).toBe(20);
		expect(dll.getAtIndex(0).value).toBe(10);
		expect(dll.getAtIndex(2).value).toBe(30);
	});

	test("clears the list", () => {
		dll.append(10);
		dll.append(20);
		dll.clear();
		expect(dll.head).toBeNull();
		expect(dll.tail).toBeNull();
		expect(dll.length).toBe(0);
	});

	test("handles removing from an empty list", () => {
		expect(dll.remove(10)).toBeFalsy();
	});

	test("handles removing a non-existent value", () => {
		dll.append(10);
		expect(dll.remove(20)).toBeFalsy();
		expect(dll.length).toBe(1);
	});

	test("handles inserting at an out-of-bounds index", () => {
		expect(() => dll.insertAt(10, 1)).toThrow();
		dll.append(20);
		expect(() => dll.insertAt(30, 2)).toThrow();
	});
});
