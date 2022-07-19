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
	return inorderTraversalResult(root, res);
};

function inorderTraversalResult(root: TreeNode | null, result: number[]): number[] {
	if(root === null) {
		return result;
	}
	
	inorderTraversalResult(root.left, result);
	result.push(root.val);
	inorderTraversalResult(root.right, result);
	return result;
};