//726. Number of Atoms

// https://leetcode.com/problems/number-of-atoms/?envType=daily-question&envId=2024-07-14
export function countOfAtomsRunner(){
    countOfAtoms('H2O2He3Mg4');
}
function countOfAtoms(formula: string): string {
    let exp = new RegExp('[a-zA-Z]+ | [0-9]+');
  let words = formula.split(exp)  ;
  return '';
};