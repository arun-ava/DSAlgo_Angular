// https://leetcode.com/problems/uncommon-words-from-two-sentences/?envType=daily-question&envId=2024-09-17

export function uncommonFromSentencesRunner() {
    let s1 = "this apple is sweet";
    let s2 = "this apple is sour";
    console.log(uncommonFromSentences(s1, s2));

    s1 = "apple apple", s2 = "banana"
    console.log(uncommonFromSentences(s1, s2));
}

function uncommonFromSentences(s1: string, s2: string): string[] {
    let map1 = new Map<string, number>();
    let map2 = new Map<string, number>();

    for(let word of s1.split(' ')) {
        if(!map1.has(word)) {
            map1.set(word, 0);
        }
        map1.set(word, map1.get(word)! + 1);
    }

    for(let word of s2.split(' ')) {
        if(!map2.has(word)) {
            map2.set(word, 0);
        }
        map2.set(word, map2.get(word)! + 1);
    }

    let uncommonWords = new Array<string>();

    for(let [key, value] of map1){
        if(value === 1 && !map2.has(key)) {
            uncommonWords.push(key);
        }
    }

    for(let [key, value] of map2){
        if(value === 1 && !map1.has(key)) {
            uncommonWords.push(key);
        }
    }

    return uncommonWords;
};