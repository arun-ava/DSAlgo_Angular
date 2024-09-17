// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// TODO: Check why solution is giving so little time
export function searchRangeRunner() {
    console.log(searchRange([5,7,7,8,8,10], 8));
}


function searchRange(range: number[], target: number) {
	let left=leftsearch(0, range.length-1, range, target, true);
	let right=leftsearch(0, range.length-1, range, target, false);
	return [left, right];
}

function leftsearch(left: number, right: number, range: number[], target: number, isLeftSearch: boolean) {
	let isfound = -1;

	while(left<=right) {

		let mid = Math.floor((left+right)/2);

		if(range[mid]===target) {

			if(isLeftSearch) {
				right=mid-1;
			} else {
				left=mid+1;
			}

			isfound=mid;
            
		} else if(range[mid]<target){
			left=mid+1;
		} else if(range[mid]>target){
			right=mid-1;
		}
	}
	return isfound;
}
