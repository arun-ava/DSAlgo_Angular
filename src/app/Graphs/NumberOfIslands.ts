// https://leetcode.com/problems/number-of-islands/

export function numIslandsRunner() {
    console.log(numIslands([["1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","0","1","0","1","1"],["0","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","0"],["1","0","1","1","1","0","0","1","1","0","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","0","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","0","1","1","1","1","1","1","0","1","1","1","0","1","1","1","0","1","1","1"],["0","1","1","1","1","1","1","1","1","1","1","1","0","1","1","0","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","0","1","1"],["1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["0","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","0","1","1","1","1","1","1","1","0","1","1","1","1","1","1"],["1","0","1","1","1","1","1","0","1","1","1","0","1","1","1","1","0","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","0"],["1","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","0","0"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]]));

    console.log(numIslands([
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
      ]));
}

function numIslands(grid: string[][]): number {
    
    let res=0;

    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[i].length;j++) {
            if(grid[i][j] === '1') {
                res++;
                numIslandHelper(grid, i, j);
            }
        }
    }

    return res;
};

function numIslandHelper(grid: string[][], row: number, col: number){
    if(row<0 || col<0 || row>=grid.length || col >= grid[row].length || grid[row][col] === '0') {
        return;
    }

    grid[row][col]='0';
    numIslandHelper(grid, row+1, col);
    numIslandHelper(grid, row, col+1);
    numIslandHelper(grid, row-1, col);
    numIslandHelper(grid, row, col-1);
    return;
}

function numIslands3(grid: string[][]): number {

    let unusedIslands = new Set<string>();
    let usedIslands = new Set<string>();
    let queue: string[] = [];
    let islandNumber = 0;

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==='1'){
                unusedIslands.add(getKey(i,j));
            }
        }
    }

    for(let key of unusedIslands.keys()){
        queue[0] = key;

        islandNumber++;
        while(queue.length > 0) {
            
            let el = queue.shift() as string;

            usedIslands.add(el);
            unusedIslands.delete(el);
            let r = Number.parseInt(getVal(el)[0]);
            let c = Number.parseInt(getVal(el)[1]);

            if(r-1 >= 0 && !usedIslands.has(getKey(r-1, c))) {
                queue.push(getKey(r-1, c));
            }

            if(c-1 >= 0 && !usedIslands.has(getKey(r, c-1))) {
                queue.push(getKey(r, c-1));
            }

            if(r+1 < grid.length && !usedIslands.has(getKey(r+1, c))) {
                queue.push(getKey(r+1, c));
            }

            if(c+1 < grid[0].length && !usedIslands.has(getKey(r, c+1))) {
                queue.push(getKey(r, c+1));
            }
        }
    }

    return islandNumber;

};

function numIslands2(grid: string[][]): number {

    let unusedIslands = new Map();
    let queue = [];
    let islandNumber = 0;

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==='1'){
                unusedIslands.set(getKey(i,j), 0);
            }
        }
    }

    for(let key of unusedIslands.keys()){
        queue[0] = key;

        if(unusedIslands.get(key) === 0) {
            islandNumber++;
            while(queue.length > 0) {
                
                let el = queue.shift();

                unusedIslands.set(el, islandNumber);
                let r = Number.parseInt(getVal(el)[0]);
                let c = Number.parseInt(getVal(el)[1]);

                if(r-1 >= 0 && unusedIslands.get(getKey(r-1, c))===0) {
                    queue.push(getKey(r-1, c));
                }

                if(c-1 >= 0 && unusedIslands.get(getKey(r, c-1))===0) {
                    queue.push(getKey(r, c-1));
                }

                if(r+1 < grid.length && unusedIslands.get(getKey(r+1, c))===0) {
                    queue.push(getKey(r+1, c));
                }

                if(c+1 < grid[0].length && unusedIslands.get(getKey(r, c+1))===0) {
                    queue.push(getKey(r, c+1));
                }
            }
        }
    }

    return islandNumber;

};


function getKey(row: number, column: number) {
    return row+'|'+column;
}

function getVal(key: string) {
    return key.split('|');
}