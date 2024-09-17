/**
 * Swap two positions in array
 */
export function SwapArrPosition(positionA: number, positionB: number, arr: any[]) {
    let c = arr[positionA];
    arr[positionA] = arr[positionB];
    arr[positionB] = c;
}