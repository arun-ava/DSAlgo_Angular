// https://leetcode.com/problems/sort-an-array/submissions/

function sortArray(nums: number[]): number[] {
    if(nums.length === 0) {
         return [];
     }

     nums.fn
 
     bubbleSort(nums);
     return nums;
 };
 
 function bubbleSort(nums: number[]) {
     for(let i = 0; i<nums.length; i++) {
         for(let j=0; j<nums.length-i-1; j++) {
             if(nums[j] > nums[j+1]) {
                 let t = nums[j];
                 nums[j]=nums[j+1];
                 nums[j+1]=t;
             }
         } 
     }
 }