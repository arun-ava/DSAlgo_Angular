// https://leetcode.com/problems/reverse-linked-list-ii/submissions/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {

    let liststart=head, listend=head;
    
    while(left > 2) {
        left--;
        liststart = liststart.next;
    }
    
    while(right > 1) {
        right--;
        listend = listend.next;
    }
    
    // console.log(liststart);
    // console.log(liststart.next);
    // console.log(listend);
    // console.log(listend.next);
    
    reverse(liststart, listend.next, liststart.next, listend);
    return head;
};

function reverse(firstnode, lastnode, liststart, listend) {
    let prev = lastnode;
    console.log(firstnode);
    console.log(lastnode);
    console.log(liststart);
    console.log(listend);
    
    while(liststart && liststart !== lastnode) {
        console.log(liststart.val);
        let temp = liststart.next;
        liststart.next = prev;
        prev = liststart;
        liststart = temp;
    }
    // console.log(firstnode);
    // console.log(liststart);
    firstnode.next = prev;
}