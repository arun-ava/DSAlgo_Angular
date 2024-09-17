export function convertDecimalToBinary(n: number): string {
    let res = '';
    while(n>0) {
        res = (n % 2) + res;
        n = Math.floor(n/2);
    }
    return res;
}