// https://leetcode.com/problems/n-ary-tree-level-order-traversal/

/**
 * Definition for node.
 */
 class MNode {
      val: number
      children: MNode[]
      constructor(val?: number) {
          this.val = (val===undefined ? 0 : val)
         this.children = []
      }
  }
 

 function levelOrder(root: MNode | null): number[][] {
    
    if(root===null) {
        return [];
    }
    
	let queue = [];
    let level = 0;
    let res: any = [];
    let temp;
    
    queue.push(root);
    
    while(queue.length>0){
        temp=[];
        res[level] = [];
        while(queue.length > 0) {
            let val = queue.shift();
            res[level].push(val!.val!);
            temp.push(...val!.children!);
        }
        queue = [...temp];
        level++;

        
    }
    
    return res;
};

