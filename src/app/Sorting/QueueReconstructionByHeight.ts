// https://leetcode.com/problems/queue-reconstruction-by-height/
// TODO - READ MY OWN SOLUTION AGAIN
// export function reconstructQueue(people: number[][]): number[][] {

//     let res = new Array<Array<number>>(people.length);

//     people.sort((a, b) => {
//         if(a[0] === b[0]) {
//             return a[1] - b[1];
//         } else {
//             return a[0] - b[0];
//         }
//     });

//     for(let i=0; i<people.length; i++) {
//         let nextpos = getNextEmptyPosition(res, people[i][1]-1);

//         if(nextpos > -1) {

//             res[nextpos] = new Array<number>(people[i][0], people[i][1]);
//         }
        
//     }

//     return res;
// };

// function getNextEmptyPosition(arr: number[][], ind: number) {
//     for(let i=ind+1; i<arr.length; i++) {
//         if(arr[i] === undefined) {
//             return i;
//         }
//     }

//     return -1;
// };