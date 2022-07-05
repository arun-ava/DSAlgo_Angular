// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
// TODO: Read faster method from leetcode. ALWAYS read the constraints and ask about them
export function minDeletions2(s: string): number {

    let charCounts = new Map<string, number>();
    let countMap = new Map<number, string>();
    let totalDeletions = 0;
    
    for(let i=0; i<s.length; i++) {
        if(!charCounts.has(s.charAt(i))) {
            charCounts.set(s.charAt(i), 0);
        }
        charCounts.set(s.charAt(i), charCounts.get(s.charAt(i))! + 1);
    }

    for(let key of charCounts.keys()) {

        let countValue = charCounts.get(key)!;
        totalDeletions += countValue - getNextPossibleCharacterFrequency(countValue, countMap, key);
    }

    return totalDeletions;
};


function getNextPossibleCharacterFrequency(countVal: number, countMap: Map<number, string>, char: string){

    let i;
    for(i=countVal; i>0; i--) {
        if(countMap.has(i)) {
            continue;
        } else {
            countMap.set(i, char);
            break;
        }
    }
    return i;
}


export function minDeletions(s: string): number {
    if(s.length<2){
        return 0;
    }
    let arr = Array(26).fill(0);
    let aCode = 'a'.charCodeAt(0);
    for(let i=0;i<s.length;i++){
        let index = s[i].charCodeAt(0) - aCode;
        if(arr[index] >= 1){
            arr[index]++;
        } else {
            arr[index] = 1;
        }
    }
    
    arr = arr.sort((a,b)=>b-a);
    console.log(arr);
    return 0;
}