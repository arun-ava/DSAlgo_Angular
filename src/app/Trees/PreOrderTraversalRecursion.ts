// https://leetcode.com/problems/binary-tree-preorder-traversal/
// TODO - read - using inner function solution

function preorderTraversal(root: TreeNode | null): number[] {
    const output: number[] = [];

  
    function traverse(node) {
      if (!node) return
      
      output.push(node.val)
      traverse(node.left)
      traverse(node.right)
    }
  
    traverse(root)
    return output;
  };

  // TODO - read - shortest solution
  function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];

  return [
    root.val,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right),
  ];

};