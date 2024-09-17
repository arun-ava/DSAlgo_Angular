// https://leetcode.com/problems/top-k-frequent-words/description/
// TODO : Read other solutions
function topKFrequent(words: string[], k: number): string[] {
    let map = new Map<string, number>();
    for(let i=0; i<words.length;i++){
        if(!map.has(words[i])) {
            map.set(words[i], 0);
        }

        map.set(words[i], map.get(words[i]) + 1);
    }

    // console.log(Array.from(map));

    return Array.from(map).sort((a, b) => {
        // console.log(a[1], b);
        if(b[1] - a[1] === 0) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1] - a[1];
        }
    }).slice(0, k).map((val) => {
        return val[0];
    });

    // return [];
};