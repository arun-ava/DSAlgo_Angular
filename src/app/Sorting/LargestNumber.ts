// https://leetcode.com/problems/largest-number/
// TODO - Read Solution and the trick used in comparison by adding both numbers in two different ways and comparing

export function largestNumber(nums: number[]): string {

    let res = '';
    nums.sort((a, b) => {

        let astring = a.toString();
        let bstring = b.toString();

       return (bstring + astring) > (astring + bstring) ? 1 : -1;
    });

    nums.forEach((val) => {
        res = res + val.toString();
    })
    return res[0]==='0'? '0' : res;
};

export function largestNumber2(nums: number[]): string {

    let res = '';
    nums.sort((a, b) => {

        let astring = a.toString();
        let bstring = b.toString();

        let maxSize = astring.length > bstring.length ? astring.length : bstring.length;

        for(let i=0; i<maxSize; i++) {
            if(astring.charAt(i) === '') {
                if(bstring.charAt(i) === '0') {
                    return -1;
                } else {
                    return 1;
                }
            } else if(bstring.charAt(i) === '') {
                if(astring.charAt(i) === '0') {
                    return 1;
                } else {
                    return -1;
                }
            } else if(astring.charAt(i) === bstring.charAt(i)) {
                continue;
            } else if(astring.charAt(i) > bstring.charAt(i)) {
                return -1;
            } else if(astring.charAt(i) < bstring.charAt(i)) {
                return +1;
            }
        }

        return 0;
    });

    nums.forEach((val) => {
        res = res + val.toString();
    })
    return res;
};