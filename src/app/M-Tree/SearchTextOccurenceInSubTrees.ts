import { createTree1, MNode } from './MNode';
/**
 * Faced in google first round on 29/7/2022
 * 
 * problem-
 * return all subtrees containing a given string
 * return all subtrees containing a given string for first K matched string
 * 
 * frw
 *  -- gesdses
 *      --dsds
 *      --gee
 *  -- tes
 *  -- gdg
 *  -- tee
 * gst
 * glees
 * ees
 * 
 * string to search = ee
 * 
 * case 1 returns
 * frw
 *  -- gesdses
 *      --gee
 *  -- tee
 * glees
 * ees
 * 
 * case 2 returns for K=3
 * frw
 *  -- gesdses
 *      --gee
 *  -- tee
 * glees
 */


export function executeSearchTreeRunner() {
    let node = createTree1();
    node.printTree();
    let res = getTreeWithString(node, 'ee');
    console.log('res', res);
    res?.printTree();

    let res2 = getTreeWithFirstCountString(node, 'ee', [2]);
    console.log('res 2', res2);
    res2?.printTree();
}

function getTreeWithFirstCountString(root: MNode<string>, search: string, count: number[]) {
    if(root===undefined || count[0] === 0) {
        return undefined;
    }

    let curr = new MNode(root.data);
    count[0] = curr.data!.indexOf(search) >= 0 ? count[0]-1 : count[0];

    for(let i=0;i<root.children.length;i++) {
        let res = getTreeWithFirstCountString(root.children[i], search, count);

        if(res) {
            curr.children.push(res);
        }
    }

    return curr.data!.indexOf(search) >= 0 || curr.children.length > 0 ? curr : undefined;
}

function getTreeWithString(root: MNode<string>, search: string) {
    if(root===undefined) {
        return undefined;
    }

    let curr = new MNode(root.data);
    for(let i=0;i<root.children.length;i++){
        let res = getTreeWithString(root.children[i], search);

        if(res) {
            curr.children.push(res);
        }
    }

    return curr.data!.indexOf(search)>=0 || curr.children.length > 0 ? curr : undefined;
}
