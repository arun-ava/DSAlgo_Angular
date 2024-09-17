// https://leetcode.com/problems/binary-trees-with-factors/
// todo: Check if there are any better solutions

export function numFactoredBinaryTreesRunner() {

    let a =  [2];
    console.log(numFactoredBinaryTrees(a));
    a =  [2,4];
    console.log(numFactoredBinaryTrees(a));
    a =  [2,4, 5,10];
    console.log(numFactoredBinaryTrees(a));

};

function numFactoredBinaryTrees(arr: number[]): number {

    return method1(arr);
};



function method1(arr: number[]) {

    // Sort Array as we know that the root element must be the largest
    arr.sort((a, b) => {
        return a-b;
    });

    // Storing the dp value for each factor in a map will improve the search efficiency for factors
    let dpfactors = new Map<number, bigint>();
    arr.forEach((val) => {
        dpfactors.set(val, 1n);
    });


    // Starting from index 1 because the smallest element can only have one combination
    for(let i=1; i<arr.length; i++) {
        for(let j=0; j<i; j++) {
            if(arr[i] % arr[j] === 0 && dpfactors.has(arr[i]/arr[j])) {
                dpfactors.set(arr[i], dpfactors.get(arr[i])! + dpfactors.get(arr[j])! * dpfactors.get(arr[i]/arr[j])!);
            }
        }
    }

    let res: bigint = 0n;

    for(let v of dpfactors.values()) {
        res = res + v;
    }

    return res%1000000007n;

}