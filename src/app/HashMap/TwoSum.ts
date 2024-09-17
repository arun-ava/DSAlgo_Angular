// https://leetcode.com/problems/two-sum/

export function twoSum(nums: number[], target: number): number[] {
    let nummap = new Map<number, number>();
    let res = new Array<number>(2);

    for(let i=0; i<nums.length; i++) {
        if(nummap.has(target - nums[i])) {
            res[0] = i;
            res[1] = nummap.get(target - nums[i])!;
            break;
        }
        nummap.set(nums[i], i);
    }

    return res;
};


/**
 * 
 * @param nums 
 * @param target 
 * @returns the numbers and not their indexes
 */
export function twoSumNumbers(nums: number[], target: number): number[][] {
    let nummap = new Map<number, number>();
    let res = new Array<Array<number>>();

    for(let i=0; i<nums.length; i++) {
        if(nummap.has(target - nums[i])) {
            res.push([nums[i],target - nums[i]]);
        }
        nummap.set(nums[i], i);
    }

    return res;
};