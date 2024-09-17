// https://leetcode.com/problems/flood-fill/

export function floodFillRunner(){
    console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));
}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    type imageCell = {
        row: number,
        col: number
    };

    let s=new Array<imageCell>();

    s.push({
        row: sr,
        col: sc
    });

    while(s.length>0){
        let cell = s.pop();

        if(image[cell!.row][cell!.col]===color) {
            continue;
        }

        // push relevant cells
        if( cell!.row + 1 < image.length && 
            image[cell!.row + 1][cell!.col] === image[cell!.row][cell!.col]) {
            s.push({
                row: cell!.row+1,
                col: cell!.col
            })
        }

        if(cell!.row - 1 >= 0 && 
            image[cell!.row - 1][cell!.col] === image[cell!.row][cell!.col]) {
            s.push({
                row: cell!.row-1,
                col: cell!.col
            })
        }

        if(cell!.col + 1 < image[0].length && 
            image[cell!.row][cell!.col+1] === image[cell!.row][cell!.col]) {
            s.push({
                row: cell!.row,
                col: cell!.col+1
            })
        }

        if(cell!.col - 1 >= 0 && 
            image[cell!.row][cell!.col-1] === image[cell!.row][cell!.col]) {
            s.push({
                row: cell!.row,
                col: cell!.col-1
            })
        }

        image[cell!.row][cell!.col]=color;
    }

    return image;
};