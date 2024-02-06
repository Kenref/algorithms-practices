class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor(array = []) {
		array = [...new Set(array)];
		array = array.sort((a, b) => a - b);
		this.root = this.buildTree(array);
	}

	buildTree(array) {
		if (array.length === 0) return null;

		// get middle index
		const middleIndex = Math.floor(array.length / 2);

		// middle index is root
		const rootNode = new Node(array[middleIndex]);

		//get left and right nodes
		rootNode.left = this.buildTree(array.slice(0, middleIndex));
		// rootNode.right = this.buildTree(array.slice(0, middleIndex));
		return rootNode;
	}
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

const bst = new Tree([1, 2, 3, 4, 5, 6, 7]);
// bst.buildTree([1, 2, 3, 4, 5, 6, 7]);
// console.log(bst.rootNode);
prettyPrint(bst);
