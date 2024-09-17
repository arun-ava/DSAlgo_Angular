// https://leetcode.com/problems/removing-stars-from-a-string/

export function removeStarsFromStringRunner() {
    removeStars('leet****cod*e');
}
function removeStars(s: string): string {
    let res = '';
    let starcount = 0;
    for(let i=s.length-1; i>=0; i--) {
        if(s.charAt(i) === '*') {
            starcount++;
        } else if(starcount > 0) {
          starcount--;
        } else {
            res = s.charAt(i) + res;
        }
    }
    return s;
};