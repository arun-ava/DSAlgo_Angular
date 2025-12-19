// https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/description/

export function largestCombinationRunner(){
    console.log(largestCombination([16,17,71,62,12,24,14]));
    console.log(largestCombination([8,8]));
    console.log(largestCombination([8388608]));
}

function largestCombination(candidates: number[]): number {
    let limit = Math.ceil(Math.log2(10000000));
    let arr = new Array<number>(limit).fill(0);

    for(let i=1; i<=limit; i++){
        for(let j=0; j<candidates.length; j++){
            let lsb = candidates[j] % 2 === 1;
            candidates[j] = candidates[j] >> 1;
            if(lsb){
                arr[i-1]++;
            }
        }
    }

    return Math.max(...arr);
};