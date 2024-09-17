// https://leetcode.com/problems/reverse-vowels-of-a-string/

export function reversVowelsRunner() {
    console.log('start');
    reverseVowels('hello');
    // reverseVowels('leetcode');
}

function reverseVowels(s: string): string {
    let left = 0, right = s.length - 1;
    let leftword = '', rightword = '';

    while(left<right) {
        console.log(isVowel(s.charAt(left)) );
        console.log(isVowel(s.charAt(right)) );
        
        if( isVowel(s.charAt(left)) && isVowel(s.charAt(right))) {
            leftword += s.charAt(right);
            rightword = s.charAt(left) + rightword;
            left++;
            right--;
        }

        if(!isVowel(s.charAt(left))) {
            leftword += s.charAt(left);
            left++;
        }

        if(!isVowel(s.charAt(right))) {
            rightword = s.charAt(right) + rightword;
            right--;
        }
    }

    return leftword + rightword;
};


function isVowel(s: string) {
    return s.charAt(0) === 'a' ||
    s.charAt(0) === 'e' ||
    s.charAt(0) === 'i' ||
    s.charAt(0) === 'o' ||
    s.charAt(0) === 'u' ||
    s.charAt(0) === 'A' ||
    s.charAt(0) === 'E' ||
    s.charAt(0) === 'I' ||
    s.charAt(0) === 'O' ||
    s.charAt(0) === 'U';
}