/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/

 function inorderTraversal(root: TreeNode | null): number[] {
    let res = new Array<number>();
	let stack = new Array<TreeNode> ();
	let curr = root;

	while(curr !== null || stack.length > 0) {

		while(curr !== null) {
			stack.push(curr);
			curr = curr.left;
		}
		curr = stack.pop()!;
		res.push(curr.val);
		curr = curr.right;
	}

	return res;

};

