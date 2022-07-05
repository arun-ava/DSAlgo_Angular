// https://leetcode.com/problems/implement-strstr/submissions/

export function strStr(haystack: string, needle: string): number {
    let haystackptr=0, needleptr = 0;
    let result = 0;
    
    while(haystack.length - haystackptr >= needle.length - needleptr &&
         needleptr < needle.length) {
        if(haystack[haystackptr] === needle[needleptr]) {
            needleptr++;
        } else {
            haystackptr -= needleptr;
            needleptr=0;
            }
        haystackptr++;
    }
    return needleptr === needle.length ? haystackptr - needleptr : -1;
};


export function strStrIndexOf(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
};