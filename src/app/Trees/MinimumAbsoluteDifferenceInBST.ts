https://leetcode.com/problems/minimum-absolute-difference-in-bst/submissions/

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

 function getMinimumDifference(root: TreeNode | null): number {

    return inorder(root, [Number.MAX_VALUE], [Number.MAX_VALUE]);
};


function inorder(root, prev, min) {
    if(root === null) {
        return null;
    }
    
    inorder(root.left, prev, min);
    min[0] = Math.min(min, Math.abs(root.val - prev[0]));
    prev[0] = root.val;
    inorder(root.right, prev, min);
    [].reduce()
    return min[0];
}