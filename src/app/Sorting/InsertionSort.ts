// https://leetcode.com/problems/sort-an-array/

function sortArray(nums: number[]): number[] {
    if(nums.length === 0) {
         return [];
     }
 
     insertionSort(nums);
     return nums;
 };
 
 function insertionSort(nums: number[]) {
     for(let i=0; i<nums.length; i++) {
         for(let j=i; j>0; j--) {
             if(nums[j]< nums[j-1]){
                 let t = nums[j];
                 nums[j]=nums[j-1];
                 nums[j-1]=t;
             }
         }
     }
 };