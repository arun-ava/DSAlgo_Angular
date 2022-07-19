// https://leetcode.com/problems/find-mode-in-binary-search-tree/



 function findMode(root: TreeNode | null): number[] {
    let count = new Map<number, number>();
    getModeFrequency(root, count);
    let max = Math.max(...Array.from(count.values()));
    let res = new Set();
    count.forEach((val, index) => {
        if(val === max) {
            res.add(index);
        }
    });
        
    
    return Array.from(res.values()) as number[];
};

function getModeFrequency(root: TreeNode|null, count: Map<number, number>) {
    if(root === null) {
        return;
    }
    
    let v = count.get(root.val);
    
    if(!v) {
        v = 0;
        count.set(root.val, v);
    }
    
    count.set(root.val, v+1);
    
    getModeFrequency(root.left, count);
    getModeFrequency(root.right, count);
    
    return;
}


let prev: number | null, count: number, max: number, res2: number[];
 function findMode2(root: TreeNode | null): number[] {
     prev = null;
     count = -1, max = -1;
     res = new Array<number>();
     return inordertraversal(root);
};

// Method 2
 
function inordertraversal(root: TreeNode | null) {
    if(root === null) {
        return res2;
    }

    
    inordertraversal(root.left);
    console.log('Root ' + root.val + prev);
    if(root.val === prev) {
        count++;
    } else {
        count = 1;
    }
    
    if(count > max) {
        max = count;
        res2 = [root.val];
    } else if(count === max) {
        res2.push(root.val);
    }
    
    prev = root.val;
    inordertraversal(root.right);

    return res2;
}