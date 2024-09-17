// TODO https://leetcode.com/problems/longest-palindromic-substring/discuss/2928/Very-simple-clean-java-solution
// https://leetcode.com/problems/longest-palindromic-substring/


export function longestPalindrome(s: string): string {
    let se = new Set();
    let m = new Map();
    
    let dpOdd = new Array<number>(s.length).fill(0);
    for(let i=1; i<s.length; i++) {
      for(let j=i; j+i<s.length; j++) {
        if(s.charAt(j+i) === s.charAt(j-i) && dpOdd[j] >= i-1) {
          dpOdd[j]++;
        }
      }
    }

    let dpEven = new Array<number>(s.length).fill(0);

    for(let i=0; i<s.length; i++) {
      for(let j=i; j+i+1<s.length; j++) {
        if(s.charAt(j+i+1) === s.charAt(j-i) && dpEven[j] >= i) {
          dpEven[j]++;
        }
      }
    }

    let res: string;

    if(Math.max(...dpEven) > Math.max(...dpOdd)) {
      let maxindex = dpEven.indexOf(Math.max(...dpEven));
      res = s.substring(maxindex - dpEven[maxindex] + 1, maxindex + dpEven[maxindex] + 1);
    } else {
      let maxindex = dpOdd.indexOf(Math.max(...dpOdd));
      res = s.substring(maxindex - dpOdd[maxindex], maxindex + dpOdd[maxindex] + 1);
    }

    return res;
  };