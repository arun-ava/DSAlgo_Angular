// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/

// todo: read solution once again and understand
/**
 * since it does not matter what the value of median is as we are just concerned with the steps
 * @param nums 
 * @returns 
 */

 export function minMoves2(nums: number[]): number {
    nums.sort((a,b) => {
        return a-b;
    });

    let steps = 0;

    for(let i=0; i<Math.floor(nums.length/2); i++) {
        steps += nums[nums.length - i - 1] - nums[i];
    }
    return steps;
}

export function minMovesmedian(nums: number[]): number {
    let median = nums.sort((a,b) => {
        return a-b;
    })[Math.floor(nums.length/2)];

    return  nums.reduce((a, b) => a + Math.abs(median - b), 0);
};

export function minMoves2b(nums: number[]): number {

    nums.sort();
    
    // if odd
    
    if(nums.length%2 === 1) {
        let sum = 0;
        for(let i=0;i<nums.length;i++){
            sum = sum + Math.abs(nums[Math.trunc(nums.length/2)] - nums[i]);
        }
        return sum;
    } else {
        // if even
        
        let sum1=0, sum2=0;
        for(let i=0;i<nums.length;i++){
            sum1 += Math.abs(nums[Math.trunc(nums.length/2)-1] - nums[i]);
            sum2 += Math.abs(nums[Math.trunc(nums.length/2)] - nums[i]);
        }
        return Math.min(sum1, sum2);
    }

};