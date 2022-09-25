// https://leetcode.com/problems/broken-calculator/

export function brokenCalcRunner() {
    let s=2, t=3;
    console.log(brokenCalc(s, t));
}
// TODO - see if dp can be done
/*
METHOD - 1
dp[i] = 1 + min(dp[i/2], dp[i+1]);
*/
function brokenCalc(startValue: number, target: number): number {

    let dp = new Map<number, number>();
    brokenCalcRec(startValue, target, dp, startValue/2);
    return dp.get(startValue)!;
};

function brokenCalcRec(startValue: number, target: number, dp: Map<number, number>, us: number) {
    if(target === startValue) {
        return 0;
    } else if(dp.has(target)) {
        return dp.get(target)!;
    } else if(startValue>target*2) {
        return Number.MAX_SAFE_INTEGER;
    } else if(startValue<=us) {
        return Number.MAX_SAFE_INTEGER;
    }
    
    dp.set(startValue, 1 + Math.min(brokenCalcRec(startValue*2, target, dp, us), brokenCalcRec(startValue-1, target, dp, us)));
    return dp.get(startValue)!;
}