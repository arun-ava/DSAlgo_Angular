// https://leetcode.com/problems/unique-morse-code-words/

export function uniqueMorseRepresentationsRunner() {
    console.log(uniqueMorseRepresentations([
        'abc'
    ]));
};

function uniqueMorseRepresentations(words: string[]): number {
    let morse = new Set<string>();
    for(let i=0;i<words.length;i++) {
        let code = '';
        for(let j=0;j<words[i].length;j++){
            code += getCharacter(words[i].charAt(j));
        }
        morse.add(code);
    }

    [1].reduce((p: any, c: any) => {return p+c}, );
    
    return morse.size;
};

function getCharacter(s: string): string {
    const a = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    return a[s.charCodeAt(0)-97];
};