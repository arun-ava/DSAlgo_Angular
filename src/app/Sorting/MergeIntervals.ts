// https://leetcode.com/problems/merge-intervals/

function merge(intervals: number[][]): number[][] {

    intervals.sort((a, b) => {
        return b[0] - a[0];
    });

    let res = [];
    let start = intervals[0][0];
    let end = intervals[0][1];

    for(let i=1; i<intervals.length; i++) {
        if(start <= intervals[i][0] && intervals[i][0] <= end) {
        } else {
            res.push([start, end]);
            start = intervals[i][0];
        }
        end = intervals[i][1];
    }

    res.push([start, end]);

    return res;
};

