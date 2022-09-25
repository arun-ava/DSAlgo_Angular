// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
// todo

export function kthSmallestRunner() {
    let a = new Map<number, Array<Array<number>>>();
    a.has
}
function kthSmallest(matrix: number[][], k: number): number {
};


/**
 * Do A BFS on all the elements of the array.
 * Start from index 0,0 and then check which is smaller (1,0) or (0,1)
 * lets say (0,1) is smaller
 * then check (1,0), (1,1), (0,2) and iterate till k elements have been checked
 * print the kth element
 * @param matrix 
 * @param k 
 */
function method1(matrix: number[][], k: number): number {

    let smallest=Number.MAX_SAFE_INTEGER;
    let elem;
    let rows: number[] = [];
    let cols: number[] = [];

    rows.push(0);
    cols.push(0);

    while(k > 0) {
        let row = rows.shift() as number;
        let col = cols.shift() as number;

        smallest = matrix[row][col];

        k--;

        let right = col < matrix[row].length-1 ? matrix[row][col+1] : undefined;
        let left = row < matrix.length-1 ? matrix[row+1][col] : undefined;

        if(!right && !left) {
            break;
        } else if(!right) {
            row++;
        } else if(!left) {
            col++;
        } else if(right && left) {
            if(right < left) {
                col++;
            } else {
                row++;
            }
        }
    }

    return smallest;
}