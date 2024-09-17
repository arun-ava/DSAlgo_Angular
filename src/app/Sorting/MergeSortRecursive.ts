// https://leetcode.com/problems/sort-an-array/


export function mergeSortRunner() {
    console.log(mergeSortArray([4,3,2,1]));
    // console.log(mergeSortArray([1,-5,-20,4,-1,3,-6,-3]));
}


function mergeSortArray(nums: number[]): number[] {
    if(!nums || nums.length === 0) {
        return [];
    }
    mergeSort(0, nums.length-1, nums)!;
    return nums;
};


function mergeSort(start: number, end: number, arr: number[]) {

    if(start >= end) {
        return;
    }

    let mid = Math.floor((start + end) / 2);
    mergeSort(start, mid, arr);
    mergeSort(mid+1, end, arr);
    return merge(start, mid, mid+1, end, arr);
}

function merge(leftstart: number, leftend: number, rightstart: number, rightend: number, arr: number[]) {
    console.log('merge');
    let leftarr = [];
    let rightarr = [];
    let left=0, right =0;
    

    for(let i=leftstart; i<=leftend; i++) {
        leftarr[left] = arr[i];
        left++;
    }

    for(let i=rightstart; i<=rightend; i++) {
        rightarr[right] = arr[i];
        right++;
    }

    left=0, right =0;
    let ind = leftstart;

    while(left < leftarr.length && right < rightarr.length) {
        if(leftarr[left] <= rightarr[right]) {
            arr[ind] = leftarr[left];
            left++;
        } else {
            arr[ind] = rightarr[right];
            right++;
        }
        ind++;
    }

    for(let i=left; i<leftarr.length; i++, ind++) {
        arr[ind] = leftarr[i];
    }

    for(let i=right; i<rightarr.length; i++, ind++) {
        arr[ind] = rightarr[i];
    }

}
