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

/**
 Do not return anything, modify root in-place instead.
 */

 // TODO : Find better solution using no extra memory and faster solution
 function recoverTree(root: TreeNode | null): void {

    let p1=undefined, p2=undefined;
    let traversal = inorder(root, []);

    console.log(traversal);
    /**
     * We are checking for the incorrect valuefrom both direction because an incorrect element will be 
     */
    for(let i=0; i<traversal.length-1; i++) {
        if(traversal[i].val > traversal[i+1].val) {
            p1 = traversal[i];
            break;
        }
    }

    for(let i=traversal.length-1; i>0; i--) {
        if(traversal[i].val < traversal[i-1].val) {
            p2 = traversal[i];
            break;
        }
    }

    console.log(p1.val);
    console.log(p2.val);

    let t=p1.val;
    p1.val = p2.val;
    p2.val = t;
};

// Solution using O(n) space
function inorder(root: TreeNode | null, traversal: TreeNode[]) {
    if(root===null) {
        return traversal;
    }
    
    inorder(root.left, traversal);
    traversal.push(root);
    inorder(root.right, traversal);
    
    return traversal;
}