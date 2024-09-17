import { ListNode } from "../Node/ListNode";

export function createList(arr: number[]): ListNode | null {
    let head = new ListNode();
    let curr = head;
    for(let i=0; i<arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return head.next;
}