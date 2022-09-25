// https://leetcode.com/problems/remove-duplicate-letters/

// todo

export function removeDuplicateLettersRunner() {
    // console.log(removeDuplicateLetters("bcabc"));
    console.log(removeDuplicateLetters("cbacdcbc"));
    console.log(recur(5));
    
}

function recur(val: number): number {
    if(val===0) {
        return val;
    } else 
    recur(val-1);
    return val;
}

function removeDuplicateLetters(s: string): string {

    // let unique = s.split('').sort().join('');
    let unique = s.split('').sort().reduce((prev, curr, ci, arr) => {
        if(arr[ci-1]===curr){
            return prev;
        } else {
            return prev + curr;
        }
    });
    let res = '';
    let j=s.length-1;
    
    for(let i=unique.length-1; i>=0;i--){
        let c=unique.charAt(i);
        for(;j>=0;j--) {
            if(s.charAt(j)===c) {
                res=c+res;
                break;
            }
        }
    }
    
    return res;
};