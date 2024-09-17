// https://leetcode.com/problems/count-vowels-permutation/submissions/

// TODO: See if this can be done only using combinatorics or atleast a combinatorics formula can be derived

function countVowelPermutation(n: number): number {

    let a: bigint=1n, e: bigint=1n, o: bigint=1n, i: bigint=1n, u: bigint=1n;
    let at: bigint=0n, et: bigint=0n, it: bigint=0n, ot: bigint=0n, ut: bigint=0n;
    let modulo: bigint = 1000000007n;
    
    while(n>1) {
        n--;
        at = e + i + u;
        et = a + i;
        it = e + o;
        ot = i;
        ut = i + o;
        a=at;
        e=et;
        i=it;
        o=ot;
        u=ut;
    }
    
    return (a+e+i+o+u)%modulo as unknown as number;
};


/*

a -> e -> 1
e -> a or i -> 2
i -> a, e, o or u -> 4
o -> i or u -> 2
u -> a -> 1

*/