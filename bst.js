class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor(array) {
		this.root = null;
		this.array = array;
		this.count = 0;
	}

	buildTree() {
		this.array = [...new Set(this.array)];
		this.array = this.array.sort((a, b) => a - b);
		this.root = new Node(this.array[Math.floor(this.array.length / 2)]);
	}
	insert() {}
	delete() {}
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
	}
	console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
	}
};

export { Node, Tree, prettyPrint };
