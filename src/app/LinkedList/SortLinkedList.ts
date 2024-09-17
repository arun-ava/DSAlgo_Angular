// https://leetcode.com/problems/sort-list/


function sortList(head: ListNode | null): ListNode | null {
	
};

function merge(left: ListNode)

// Using Bubble sort variant. get TLE
function sortList2(head: ListNode | null): ListNode | null {
	
	let i = head;

	while(i!==null) {
		let j=head;
		while(j.next!==null) {
			if(j.val > j.next.val) {
				let t = j.val;
				j.val = j.next.val;
				j.next.val = t;
			}
            
            j = j.next;
		}
        i=i.next;
	}

	return head;
};