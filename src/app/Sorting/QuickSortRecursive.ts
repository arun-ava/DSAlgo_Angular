// https://leetcode.com/problems/sort-an-array/


export function quickSortRunner() {
    // console.log(quickSortArray([4,3,2,1]));
    // console.log(quickSortArray([-1,2,-8,-10]));
    console.log(quickSortArray([-1,2,-8,-10,-8,-10,-8,-10,3,1,6,2,8,9]));
}

function quickSortArray(nums: number[]): number[] {
    if(nums.length === 0) {
        return [];
    }

    quicksort(0, nums.length-1, nums);
    return nums;
};


function quicksort(start: number, end: number, arr: number[]) {
    console.log('Quicksort called');
    if(start > end) {
        return;
    }
    let pindex = partitionArr(start, end, arr);
    if(pindex < 0) {return;}

    if(start <= pindex-1)
    quicksort(start, pindex-1, arr);

    if(pindex-1 <= end)
    quicksort(pindex+1, end, arr);
    return;
}

function partitionArr(start: number, end: number, arr: number[]) {
    let pivot = arr[start];
    let pindex = start;
    start++;
    if(start > end) {return -1;}

    while(start <= end) {
        if(arr[start] < pivot) {
            start++;
            continue;
        }

        if(arr[end] >= pivot) {
            end--;
            continue;
        }
        swap(start, end, arr);
    }
    swap(pindex, end, arr);
    return end;
}

function swap(posa: number, posb: number, arr: number[]) {
    let t = arr[posa];
    arr[posa] = arr[posb];
    arr[posb] = t;
}
