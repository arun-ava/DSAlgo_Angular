// https://leetcode.com/problems/valid-mountain-array/description/
// Valid Mountain Array

export function validMountainArrayRunner(){
    console.log(validMountainArray([2,1]));
    console.log(validMountainArray([3,5,5]));
    console.log(validMountainArray([0,3,2,1]));
    console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]));
}



function validMountainArray(arr: number[]): boolean {
    let n = arr.length;
    if(n<3) return false; // Cannot be strictly increasing or decreasing with less than 3 elements

    let left=0, right=arr.length-1;
    while(left<n-1 && arr[left]<arr[left+1]) {
        left++;
    }

    while(right>0 && arr[right]<arr[right-1]) {
        right--;
    }

    return left!==0 && right!==n-1 && right===left;
};


function validMountainArray2(arr: number[]): boolean {
    let n = arr.length;
    if(n<3) return false; // Cannot be strictly increasing or decreasing with less than 3 elements
    let peakidx = getPeak(arr);
    if(peakidx==-1) return false;
    let allDecreasingToLeft = areAllElementsLeftOfPeakStrictlyDecreasing(arr, peakidx);
    let allDecreasingToRight = areAllElementsRightOfPeakStrictlyDecreasing(arr, peakidx);
    return allDecreasingToLeft && allDecreasingToRight;
};

function getPeak(arr: number[]) {
    let i=1;
    let peakfound = false;
    while(i<arr.length-1) {
        if(arr[i]>arr[i+1] && arr[i]>arr[i-1]) {
            peakfound = true;
            break;
        }
        i++;
    }
    return peakfound ? i : -1;
}

function areAllElementsLeftOfPeakStrictlyDecreasing(arr: number[], peakIdx: number) {
    for(let i=peakIdx; i>0; i--) {
        if(arr[i]>arr[i-1]) {
        } else {
            return false;
        }
    }
    return true;
}

function areAllElementsRightOfPeakStrictlyDecreasing(arr: number[], peakIdx: number) {
    for(let i=peakIdx; i<arr.length-1; i++) {
        if(arr[i]>arr[i+1]) {
        } else {
            return false;
        }
    }
    return true;
}