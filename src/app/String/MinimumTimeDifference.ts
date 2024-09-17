// https://leetcode.com/problems/minimum-time-difference/?envType=daily-question&envId=2024-09-16

function findMinDifference(timePoints: string[]): number {
    let timeInMinutes = timePoints.map(time => getMinutes(time)).sort((a,b)=>a-b);    
    let minDiff = Number.MAX_SAFE_INTEGER;

    for(let i=0; i<timeInMinutes.length-1; i++){
        minDiff = Math.min(minDiff, timeInMinutes[i+1]-timeInMinutes[i]);
    }
    minDiff = Math.min(minDiff, 24*60 - (timeInMinutes[timeInMinutes.length-1]-timeInMinutes[0]));
    return minDiff;
};

function getMinutes(time: string){
    let times = time.split(':');
    return Number.parseInt(times[0])*60 + Number.parseInt(times[1]);
}