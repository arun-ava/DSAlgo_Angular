// https://leetcode.com/problems/most-common-word/

function mostCommonWord(paragraph: string, banned: string[]): string {
    let words = new Map<string, number>();

    paragraph = Array.from(paragraph).filter((val: string) => {
        return (val === "!" || val === "\'" || val === '\'' || val === ','
        || val === ';' || val === '.');
    }).join();

    return '';
};