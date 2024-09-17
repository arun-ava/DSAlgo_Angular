// https://leetcode.com/problems/search-a-2d-matrix-ii/submissions/

// TODO - read trick again

function searchMatrix(matrix: number[][], target: number): boolean {
    let row = 0;
    let column = matrix[0].length - 1;
    while(row < matrix.length && column >= 0) {
        let topRight = matrix[row][column];
        if(topRight === target) {
            return true;
        } else if(topRight < target) {
            row++;
        } else {
            column--;
        }
    }
    return false;
};