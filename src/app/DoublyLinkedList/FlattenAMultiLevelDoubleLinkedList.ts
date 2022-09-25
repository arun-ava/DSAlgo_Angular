// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
// TODO - see how the doubly linking can be used to reduce time. see faster solutions
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     prev: Node | null
 *     next: Node | null
 *     child: Node | null
 *     constructor(val?: number, prev? : Node, next? : Node, child? : Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */

 function flatten(head: Node | null): Node | null {

    if(head === null) {
        return head;
    }
    
    let headc = head;
    while(headc !== null) {
        let temp = headc.next;
        if(headc.child) {
            headc.next = flatten(headc.child);
            headc.next.prev = headc;

            let curr = headc;

            while(curr.next !== null) {
                curr=curr.next;
            }

            if(temp) {
                curr.next = temp;
                temp.prev = curr;
            }
            
            headc.child = null;
        }
        
        headc = headc.next;
    }
    return head;
};

