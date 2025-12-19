// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/

export function tictactoeRunner() {
    // console.log(tictactoe([[2,2],[1,2],[2,1],[1,1],[2,0]]));
    console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]));
}

function tictactoe(moves: number[][]): string {
    //Set board

    let board = [new Array<string>(3).fill(' '),new Array<string>(3).fill(' '),new Array<string>(3).fill(' ')];

    for(let i=0; i<moves.length; i++){
        board[moves[i][0]][moves[i][1]] = i%2===0?'X':'O';
    }

    let column = anyColumnHasWinner(board);
    let row = anyRowHasWinner(board);
    let diagonal = anyDiagonalHasWinner(board);

    if(column==='X' || row==='X' || diagonal==='X'){
        return 'A';
    }

    if(column==='O' || row==='O' || diagonal==='O'){
        return 'B';
    }

    if(isPending(board)) {
        return 'Pending';
    }

    return 'Draw';
    
};

function anyColumnHasWinner(moves: any){
        if(moves[0][0]===moves[1][0] && moves[0][0]===moves[2][0] && moves[0][0]!==' ')  // first column
        {
            return moves[0][0];
        }
        if(moves[0][1]===moves[1][1] && moves[0][1]===moves[2][1] && moves[0][1]!==' ')  // second column
        {
            return moves[0][1];
        }
        if(moves[0][2]===moves[1][2] && moves[0][2]===moves[2][2] && moves[0][2]!==' ')  // third column
        {
            return moves[0][2];
        }

        return 'N';
}

function anyRowHasWinner(moves: any){
        if(moves[0][0]===moves[0][1] && moves[0][0]===moves[0][2] && moves[0][0]!==' ') // first row 
        {
            return moves[0][0];
        }
        if(moves[1][0]===moves[1][1] && moves[1][0]===moves[1][2] && moves[1][0]!==' ') // second row
        {
            return moves[1][0];
        }
        if(moves[2][0]===moves[2][1] && moves[2][0]===moves[2][2] && moves[2][0]!==' ') // third row
        {
            return moves[2][0];
        }

        return 'N';
}

function anyDiagonalHasWinner(moves: any){
        if(((moves[0][0]===moves[1][1] && moves[0][0]===moves[2][2]) || // top left to bottom right diagonal
        (moves[0][2]===moves[1][1] && moves[0][2]===moves[2][0])) && moves[1][1]!==' ')  // top right to bottom left diagonal
        {
            return moves[1][1];
        }
        return 'N';
}

function isPending(moves: any) {
    for(let i=0; i<3; i++){
        for(let j=0; j<3;j++){
            if(moves[i][j]===' ') {
                return true;
            }
        }
    }
    return false;
}