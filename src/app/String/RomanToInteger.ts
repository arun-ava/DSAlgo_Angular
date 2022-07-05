// https://leetcode.com/problems/roman-to-integer/
// TODO : See 2nd method
export function romanToInt(s: string): number {
    let romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let modernNumerals = [1, 5, 10, 50, 100, 500, 1000];

    let romanDecNumerals =  [ 'IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
    let modernDecNumerals = [   4 ,   9 ,  40 ,  90 , 400 ,  900];
    let res = 0;

    let cindex=0;
    let numeralMap = new Map<string, number>();
    let numeralDecMap = new Map<string, number>();

    // Create Map of Roman to Modern numerals
    romanNumerals.forEach((value, index) => {
        numeralMap.set(value, modernNumerals[index]);
    });

    // Create Map of Roman Decrement to Modern numerals
    romanDecNumerals.forEach((value, index) => {
        numeralDecMap.set(value, modernDecNumerals[index]);
    });

    while(cindex < s.length) {
        if(numeralDecMap.has(s.substring(cindex, cindex+2))) {
            res = res + numeralDecMap.get(s.substring(cindex, cindex+2))!;
            cindex+=2;
        } else {
            res = res + numeralMap.get(s.charAt(cindex))!;
            cindex++;
        }
    }

    return res;
};


// 2nd method

function romanToInt2(s: string): number {
    const numbers = s.split("").map( (char: string) => {
        switch(char){
            case "I": return 1;
            case "V": return 5;
            case "X": return 10;
            case "L": return 50;
            case "C": return 100;
            case "D": return 500;
            case "M": return 1000; 
            default: return 0;
        }
    })
    
    let result = 0
    let prevNumber = 0
    
    for(let i=numbers.length-1;i>=0;i--){
        const number = numbers[i]!;
        if(number>=prevNumber){
            result+=number
            prevNumber = number
        } else {
            result-=number
        }
    }
    return result
};