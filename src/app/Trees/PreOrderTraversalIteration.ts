// https://leetcode.com/problems/binary-tree-preorder-traversal/

let res = [];
	let curr = root;
	let stack = [];

	while(curr !== null || stack.length > 0) {

		if(curr === null) {
			curr = stack.pop();
		}
		res.push(curr.val);

		if(curr.right !== null) {
			stack.push(curr.right);
		}
		curr = curr.left;
	}

	return res;