// https://leetcode.com/problems/valid-palindrome-ii/submissions/


export function validPallindromeRunner() {
    console.log(validPalindrome('eeccccbebaeeabebccceea'));
}

function validPalindrome(s: string): boolean {

    let deleted=0;
    let left=0;
    let right=s.length-1;
    let ss = 'sdsds';
    
    while(left<right) {
        if(s.charAt(left) === s.charAt(right)) {
            left++;
            right--;
        } else {
            if(deleted>1) {
                return false;
            }
            if(s.charAt(left+1) === s.charAt(right)) {
                left++;
            } else if(s.charAt(left) === s.charAt(right-1)) {
                right--;
            }
            
            deleted++;
        }
    }
    
    return true;
};