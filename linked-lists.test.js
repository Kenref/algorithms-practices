const LinkedList = require("./linked-lists");

describe("#LinkedList class", () => {
	it("test class initialisation", () => {
		const ll = new LinkedList();
		expect(ll.head).toBeNull();
		expect(ll.tail).toBeNull();
		expect(ll.length).toBe(0);
	});
});

// describe("#Node class", () => {});

// describe("#append", () => {});

// describe("#prepend", () => {});

// describe("#size", () => {});

// describe("#head", () => {});

// describe("#tail", () => {});

// describe("#at", () => {});

// describe("#pop", () => {});

// describe("#contains", () => {});

// describe("#find", () => {});

// describe("#toString", () => {});

// describe("#insertAt", () => {});

// describe("#removeAt", () => {});
