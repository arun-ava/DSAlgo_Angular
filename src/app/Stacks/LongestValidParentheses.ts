// https://leetcode.com/problems/longest-valid-parentheses/submissions/
// TODO: See faster solution and calculate longest string inplace instead of doing it later

export function longestValidParenthesesRunner() {
    console.log(longestValidParentheses(")()())"));
    console.log(longestValidParentheses("(()"));
    console.log(longestValidParentheses(""));
    console.log(longestValidParentheses(")("));
    console.log(longestValidParentheses("()(()"));
}
  

function longestValidParentheses(s: string): number {

    let buffer=0;
    let stack: number[] = [];
    
    for(let i=0;i<s.length;i++){
        let currchar = s.charAt(i);
        
        if(currchar==='(')  {
            stack.push(i);
        } else {
            let e = stack.pop();
            if(e===undefined) {
                stack.push(i);
            } else if(s.charAt(e)===')') {
                stack.push(e);
                stack.push(i);
            } 
        }
    }
    
    console.log(stack);
    
    if(stack.length === 0) {
        return s.length;
    }
    
    let idx = 0;
    let res = -1;
    
    stack.forEach((elem, id) => {
        res = Math.max(res, elem-idx);
        idx=elem+1;
    });
    res = Math.max(res, s.length-idx);
    return res;
};