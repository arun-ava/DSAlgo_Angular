// https://leetcode.com/problems/balance-a-binary-search-tree/submissions/

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

 function balanceBST(root: TreeNode | null): TreeNode | null {
    let subromans = {
        4   : 'IV',
        9   : 'IX',
        40  : 'XL',
        90  : 'XC',
        400 : 'CD',
        900 : 'CM',
    };



    let inorder = getInorderTraversal(root, []);
    return createBalancedBST(inorder, 0, inorder.length-1);
};

function getInorderTraversal(root, res) {
    if(root === null) {
        return res;
    }
    
    getInorderTraversal(root.left, res);
    res.push(root.val);
    getInorderTraversal(root.right, res);
    
    return res;
}

function createBalancedBST(inorder, left, right) {
    if(left > right) {
        return;
    }
    
    let mid = Math.floor((right + left)/2);
    
    let root = new TreeNode(
        inorder[mid],
        createBalancedBST(inorder, left, mid-1),
        createBalancedBST(inorder, mid+1, right),
    );
    
    return root;
}