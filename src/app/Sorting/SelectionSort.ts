// https://leetcode.com/problems/sort-an-array/

function sortArray(nums: number[]): number[] {
    if(nums.length === 0) {
         return [];
     }
 
     selectionSort(nums);
     return nums;
 };
 
 function selectionSort(nums: number[]) {
     for(let i=0; i<nums.length; i++) {
         let ind = findMinIndexFromStartingIndex(nums, i);
         let t = nums[ind];
         nums[ind]=nums[i];
         nums[i]=t;
     }
 }
 
 function findMinIndexFromStartingIndex(nums: number[], ind: number) {
 
     let i;
     let min = nums[ind];
 
     for(i=ind+1; i<nums.length; i++) {
         if(min>nums[i]){
             min=nums[i];
             ind = i;
 
         }
     }
 
     return ind;			
 }