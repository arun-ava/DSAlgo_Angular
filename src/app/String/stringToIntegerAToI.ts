// https://leetcode.com/problems/string-to-integer-atoi/
// TODO: Read myAtoi2
export function myAtoi(s: string): number {

    s = s.trim();
    let sign = 1;

    if(s.charAt(0) === '-') {
        s = s.substring(1);
        sign = -1;
    } else if(s.charAt(0) === '+') {   
        s = s.substring(1);
        sign = 1;
    } else {
        sign = 1;
    }

    let cindex = 0;
    let result = 0;

    while(cindex < s.length && s.charAt(cindex)>='0' && s.charAt(cindex)<='9'){
        result = result * 10 + sign * Number.parseInt(s.charAt(cindex), 10);
        cindex++;

        if(result < -1 * Math.pow(2, 31)){
            result = -1 * Math.pow(2, 31);
            break;
        } else if(result > (Math.pow(2, 31) - 1)) {
            result = Math.pow(2, 31) - 1;
            break;
        }
    }

    return result;
};

export function myAtoi2(s: string): number {

    const n = parseInt(s);
    if(isNaN(n)) return 0;

    return Math.min(Math.max(n, Math.pow(-2, 31)), Math.pow(2, 31) - 1);

};