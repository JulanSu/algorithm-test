
//这是一个二叉树

const root = {
	val: "A",
	left: {
		val: "B",
		left: {
			val: "D"
		},
		right: {
			val: "E"
		}
	},
	right: {
		val: "C",
		right: {
			val: "F"
		}
	}
};


// 先序遍历，先根节点，在左节点，再右节点
let result = []
let dfs1 = (node) => {
	if(!node) {
		return
	}
	result.push(node.val)
	dfs1(node.left)
	dfs1(node.right)
}
dfs1(root)
console.log(result)





// 中序遍历，先左节点，在根节点，再右节点

let result1 = []
let dfs2 = (node) => {
	if(!node) {
		return
	}
	dfs2(node.left)
	result1.push(node.val)
	dfs2(node.right)
}
dfs2(root)
console.log(result1)



// // 后序遍历，先左节点，在右节点，再根节点

let result2 = []
let dfs3 = (node) => {
	if(!node) {
		return
	}
	dfs3(node.left)
	dfs3(node.right)
	result2.push(node.val)
}
dfs3(root)
console.log(result2)



