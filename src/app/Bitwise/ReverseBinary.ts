// https://leetcode.com/problems/reverse-bits/

export function reverseBits(n: number): number {
    let bitLength = 32;
    let res = 0;
    
    let digitCount =  Math.floor(Math.log2(n)) + 1;

    let pow = Math.pow(2, bitLength-1);
    while(n>0) {
        res = res + pow * (n % 2);
        n= Math.floor(n/2);
        pow = pow / 2;
    }
    return res;
};


export function reverseBitsAlternate(n: number): number {
    let bitLength = 32;
    let res = 0;
    for(let i=0; i<bitLength; i++) {
        res = res*2 + (n % 2);
        n= Math.floor(n/2);
    }
    return res;
};