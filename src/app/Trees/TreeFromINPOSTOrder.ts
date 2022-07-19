// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/submissions/

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

 function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if(!inorder || inorder.length === 0) {
        return null;
    }
    
    let currentroot = postorder.pop()!;
    let inorderrootindex = inorder.findIndex((val) => { return val === currentroot});
    let root = new TreeNode();
    root.val = currentroot;
    
    root.left = buildTree(inorder.slice(0, inorderrootindex), postorder.slice(0, inorderrootindex));
    
    root.right = buildTree(inorder.slice(inorderrootindex+1), postorder.slice(inorderrootindex, inorder.length-1));
    
    return root;
};
