// https://leetcode.com/problems/pacific-atlantic-water-flow/description/


export function pacificAtlanticRunner() {
    console.log('start');
    pacificAtlantic('hello');
    // reverseVowels('leetcode');
}



function pacificAtlantic(heights: number[][]): number[][] {
    
    console.log('heights  ', heights);
    let pacific = -1;
    let atlantic= -2;

    pacificAtlancticHelper(heights, pacific, 0, 0);
    pacificAtlancticHelper(heights, atlantic, heights.length-1, heights[0].length-1);

    let res = [];

    for(let i=0; i<heights.length; i++) {
        for(let j=0; j<heights[i].length; j++) {
            if(heights[i][j] === -3) {
                res.push([i, j]);
            }
        }
    }

    return res;

};


function pacificAtlancticHelper(heights: number[][], ocean: number, srow: number, scol: number) {
    let queue = [];
    queue.push([srow, scol]);

    while(queue.length > 0) {
        let el: any = queue.pop();
        let row = el![0];
        let column = el![1];
        console.log('row ', row);
        console.log('col ', column);
        heights[row][column] = getContextValue(heights, row, column, ocean);

        if(shouldAddCell(heights, row-1, column, heights.length, heights[row].length, row-1, column)) {
            queue.push([row-1, column]);
        }
        if(shouldAddCell(heights, row+1, column, heights.length, heights[row].length, row+1, column)) {
            queue.push([row+1, column]);
        }
        if(shouldAddCell(heights, row, column-1, heights.length, heights[row].length, row, column-1)) {
            queue.push([row, column-1]);
        }
        if(shouldAddCell(heights, row, column+1, heights.length, heights[row].length, row, column+1)) {
            queue.push([row, column+1]);
        }
            
    }
}

function shouldAddCell(heights: number[][], row: number, column: number, rowlen: number, collen: number, nr: number, nc: number) {
    if(row-1 >= 0 && column-1 >= 0 && row < rowlen && column < collen && heights[row][column] > 0 && heights[row][column] !== -3 && heights[nr][nc] <= heights[row][column]) {
        return true;
    }
    return false;
}

function getContextValue(heights: number[][], row: number, col: number, ocean: number) {
    return heights[row][col] > 0 ? ocean : heights[row][col] + ocean;
}