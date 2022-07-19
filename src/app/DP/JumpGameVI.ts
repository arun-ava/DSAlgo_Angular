// https://leetcode.com/problems/jump-game-vi/submissions/

export function maxResult(nums: number[], k: number): number {

    for(let i=1; i<nums.length; i++) {
        nums[i] = nums[i] + Math.max(...nums.slice(Math.max(0, i-k), i));
    }
    
    return nums[nums.length - 1];
};