// https://leetcode.com/problems/dungeon-game/

/**
Create DP array.
Add from bottom irght to top left.
If current cell is negative and number to be added is positive then add 0.
If current cell is positive then add whatever.
*/


export function calculateMinimumHPRunner(){
    console.log(calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]]));
}

function calculateMinimumHP(dungeon: number[][]): number {
    for(let i=dungeon.length-1; i>=0; i--) {
        for(let j=dungeon[i].length-1; j>=0; j--) {
            if(i===dungeon.length-1 && j===dungeon[i].length-1){continue;}
            let t1 = Number.MIN_SAFE_INTEGER;
            let t2 = Number.MIN_SAFE_INTEGER;
            
            if(j<dungeon[i].length-1) {
                t1 = dungeon[i][j+1];
            }
            
            if(i<dungeon.length-1) {
                t2 = dungeon[i+1][j];
            }
            
            if(dungeon[i][j] <= 0) {
                dungeon[i][j] += Math.min(0, Math.max(t1, t2));
            } else {
                let k =  Math.max(t1, t2);
                dungeon[i][j] += k;
            }
        }
    }
    
    console.log(dungeon);
    if(dungeon[0][0] >= 0) {
        return 1;
    } else {
        return Math.abs(dungeon[0][0]) + 1;
    }
};