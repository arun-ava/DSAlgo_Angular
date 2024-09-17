import { ListNode } from "../Node/ListNode";
import { createList } from "./ArrayToList";

export function splitListToPartsRunner(){
    splitListToParts(createList([1,2,3]), 5);
    splitListToParts(createList([1,2,3,4,5,6,7,8,9,10]), 3);
}


function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    let len = getListLength(head);
    let res;
    res = new Array<ListNode | null>(k).fill(null);
    console.log('len ', len);
    console.log('res ', res);
    if(len <= k) {
        let count=0;
        while(count<len) {
            res[count] = head;
            let t = head;
            head=head!.next;
            t!.next = null;
            count++;
        }
    } else {
        let q = Math.floor(len/k);
        let r = len%k;
        let idx = 0;
        let count = -1;
        let curr = head;
        while(curr){
            count++;
            let elems = q + (idx<r ? 1 : 0);

            if(count < elems) {
                res[idx] = curr;
                idx++;

                while(elems>1){
                    curr = curr!.next;
                    elems--;
                }
                count=-1;
            }
        }
    }
    console.log(res);
    return res;
};

function getListLength(head: ListNode | null) {
    let len=0;
    while(head) {
        len++;
        head=head.next;
    }
    return len;
}
