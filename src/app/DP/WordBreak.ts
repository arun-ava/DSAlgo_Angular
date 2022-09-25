// https://leetcode.com/problems/word-break/

export function wordBreakRunner() {

    let a = [1,2,3,4,5];
    console.log(a);

    a.splice(4);
    console.log(a);
    console.log(a[4]);

    console.log(wordBreak("leetcode", ["leet","code"]));
    console.log(wordBreak("applepenapple", ["apple","pen"]));
    console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"]));
}
// toDO: See faster solutions
// See first comment and try out methods using trie, kmp and ac automata https://leetcode.com/problems/word-break/discuss/43790/Java-implementation-using-DP-in-two-ways
function wordBreak(s: string, wordDict: string[]): boolean {

    wordDict.sort((a, b) => {
        return a.length - b.length;
    });

    
    
    let dict = new Set<string>();
    let dp = new Array<boolean>(s.length).fill(false);
    
    wordDict.forEach((val) => {
        dict.add(val);
    });
    
    for(let i=0; i<s.length; i++) {
        let tdx=i;
        do {
            tdx = getPreviousDP(dp, tdx);
            let st = s.substring(tdx+1, i+1);
            if(dict.has(st)) {
                dp[i]=true;
                break;
            }
        
        } while(tdx >= 0);
    }
    
    return dp[s.length-1];
    
};

function getPreviousDP(dp: boolean[], index: number) {
    let i;
    
    for(i=index-1; i>=0; i--) {
        if(dp[i]) {
            break;
        }
    }
    return i;
}