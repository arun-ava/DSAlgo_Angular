import { reverseBits } from '../Bitwise/ReverseBinary';
// https://leetcode.com/problems/binary-tree-postorder-traversal/submissions/

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


 function postorderTraversal(root: TreeNode | null): number[] {
	let res = [];
	let firststack = [];
	let secondstack = [];
	let curr = root;
    
    if(root === null) {
        return [];
    }

	let a: string = 'dfdfd';
	firststack.push(root);


	while(firststack.length > 0) {
		let node: any = firststack.pop()!;
        
        if(node.left)
		    firststack.push(node.left);
        
        if(node.right)
		firststack.push(node.right);
        
		secondstack.push(node);
	}

	while(secondstack.length > 0) {
		res.push(secondstack.pop()!.val);
	}
    return res;
};