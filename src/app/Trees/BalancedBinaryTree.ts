// https://leetcode.com/problems/balanced-binary-tree/
// NOTE: DP has no advantage here as the nodes are visited once only in direct height search


function isBalanced(root: TreeNode | null): boolean {
    if(root === null) return true;
    
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
};

const getHeight = (root: TreeNode | null): number => {
    if(root === null) return -1;
    
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

// NOTE: DP has no advantage here as the nodes are visited once only in direct height search

// let dp: Map<TreeNode, number>;
// function isBalanced(root: TreeNode | null): boolean {
//     if(root === null) return true;
//     dp = new Map<TreeNode, number>();
    
//     return isBalanced(root.left) && isBalanced(root.right) && Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
// };

// const getHeight = (root: TreeNode | null): number => {
//     if(root === null) return -1;

//     if(dp.has(root)) {
//         return dp.get(root)!;
//     } else {
//         dp.set(root, Math.max(getHeight(root.left), getHeight(root.right)) + 1);
//         return dp.get(root)!;
//     }
// }