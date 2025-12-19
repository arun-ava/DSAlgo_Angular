// https://leetcode.com/problems/maximum-swap/description/

// 670. Maximum Swap

export function maximumSwapRunner(){
    console.log(maximumSwap(2736));
    console.log(maximumSwap(9973));
}

function maximumSwap(num: number): number {
    let sarr = num.toString().split('');
    let currmax = sarr[sarr.length-1];
    let currmaxIdx = sarr.length-1;

    for(let i=sarr.length-1;i>0;i--){
        if(sarr[i] > currmax) {
            currmax = sarr[i];
            currmaxIdx = i;
        } 
    }

    for(let i=0; i<sarr.length; i++){
        if(currmax>sarr[i]) {
            let t = sarr[i];
            sarr[i] = currmax;
            sarr[currmaxIdx]=t;
            break;
        }
    }


    let res = Number.parseInt(sarr.join(''));
    return res;
};

function maximumSwap2(num: number): number {
    let sarr = num.toString().split('');
    let marr = [];
    let currmax = sarr[sarr.length-1];
    let currmaxIdx = sarr.length-1;

    for(let i=sarr.length-1;i>=0;i--){
        if(sarr[i] > currmax) {
            currmax = sarr[i];
            currmaxIdx = i;
        } 
        
        marr[i] = [currmax, currmaxIdx.toString()];
    }

    for(let i=0; i<sarr.length; i++){
        if(marr[i][0]>sarr[i]) {
            let t = sarr[i];
            sarr[i] = marr[i][0];
            sarr[Number.parseInt(marr[i][1])]=t;
            break;
        }
    }


    let res = Number.parseInt(sarr.join(''));
    return res;
};