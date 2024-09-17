// https://leetcode.com/problems/3sum/

export function threeSum(nums: number[]): number[][] {

    let usedresults = new Map<string, boolean>();
    let result = new Array<Array<number>>();

    nums.sort(); // probably wrong as in

    for(let i=0; i<nums.length; i++) {

            let twsum = twoSumNumbers(nums.slice(i+1), -1 * nums[i]);

            twsum.forEach((val, ind) => {
                if(val.length > 0 && val[0] !== undefined) {
                    let res = [nums[i], ...val];
                    let reskey = res.reduce((prev, curr) => {
                        return prev + curr;
                    });
                    if(!usedresults.has(res.toString())) {
                        usedresults.set(res.toString(), true);
                        result.push();
                    } 
                }
            });
        }
    return result;
};


function twoSumNumbers(nums: number[], target: number): number[][] {
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