import { SegmentTree } from './SegmentTree';
export function segmentTreeRunner(){
    runner1();
}

function runner1(){
    let tree: SegmentTree<number> = new SegmentTree<number>([1,3,5,7,9,11], (a:number, b:number) => {return a+b;});
}