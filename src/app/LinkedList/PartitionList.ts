// https://leetcode.com/problems/partition-list/
// TODO : Do without using extra memory - leetcode dicussions


 export function partition(head: ListNode | null, x: number): ListNode | null {

    let res = new ListNode();
    let c = res;
    let curr = head;
    
    
    // add all smaller elements
    while(curr !== null) {
        if(curr.val < x) {
            res.next = new ListNode(curr.val);
            res = res.next;
        }
        curr = curr.next;
    }
    
    curr = head;
    // add all larger elements
    while(curr !== null) {
        if(curr.val >= x) {
            res.next = new ListNode(curr.val);
            res = res.next;
        }
        curr = curr.next;
    }
    
    return c.next;
};