// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/description/?envType=daily-question&envId=2024-09-11

import { convertDecimalToBinary } from "./util";

export function minimumBitFlipsRunner(){
    // console.log(minBitFlips(2, 6));
    // console.log(minBitFlips(10, 7));
    // console.log(minBitFlips(3, 4));
    console.log(minBitFlips(81, 87));
}

function minBitFlips(start: number, goal: number): number {
    let startBin = convertDecimalToBinary(start);
    let goalBin = convertDecimalToBinary(goal);

    let count=0;
    let smaller, larger;
    if(startBin.length < goalBin.length) {
        smaller = startBin;
        larger = goalBin
    } else {
        smaller = goalBin;
        larger  = startBin;
    }

    for(let si=smaller.length-1, li=larger.length-1; si>=0; si--, li--) {
        if(smaller[si]!==larger[li]) {
            count++;
        }
    }

    for(let i=0; i<larger.length - smaller.length; i++){
        if(larger[i]!=='0') {
            count++;
        }
    }

    return count;
};