/**
 * https://leetcode.com/problems/find-pivot-index/
 */

//TODO : See second method and how it saves memory by not using array

 export function pivotIndex(arr: number[]) : number {

    if(arr.length === 0) {
        return -1;
    }

    let leftsum=new Array<number>(arr.length), rightsum=new Array<number>(arr.length);
    leftsum[0] = arr[0];
    rightsum[arr.length-1] = arr[arr.length-1];

    for(let i=1; i<arr.length; i++) {
        leftsum[i] = leftsum[i-1] + arr[i];
        rightsum[arr.length - i - 1] = rightsum[arr.length - i] + arr[arr.length - i - 1];
    }

    for(let i=0; i<arr.length; i++) {
        if((i===0 && rightsum[i+1] === 0) ||
            (i===arr.length-1 && leftsum[i-1]===0) ||
            (leftsum[i-1] === rightsum[i+1])) {
                return i;
            }
    }
    return -1;
}

// 2nd method
export function pivotIndex2(arr: number[]) : number {

    let left = 0, right = arr.length - 1, leftsum=0, rightsum = arr.reduce((sum , num) => {return sum+num;});

    for(let i=0; i<arr.length; i++) {
        rightsum -= arr[i];
        if(leftsum === rightsum) {
            return i;
        }
        leftsum += arr[i];
    }
    
    return -1;

}
