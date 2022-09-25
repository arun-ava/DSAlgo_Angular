export class MNode<T> {
    data: T;
    children: MNode<T>[];

    constructor(data: T, children?: MNode<T>[]) {
        this.data = data;
        this.children = children ? children : [];
    }


    printTree() {
        this._printTree(this, 1);
    }

    private _printTree(node: MNode<T>, counter: number) {
        if(node === undefined) {
            return;
        }
        console.log(this._printdash(counter) + ' ' + node.data);
        for(let i=0;i<node.children.length;i++) {
            this._printTree(node.children[i], counter+1);
        }
        return;
    }

    private _printdash(counter: number) {
        let res='';
        for(let i=1;i<=counter;i++){
            res+='--';
        }
        return res;
    }

    
    /**
     *  frw
     *  -- gesdses
     *      --dsds
     *      --gee
     *  -- tes
     *  -- gdg
     *  -- tee
     *  gst
     *  glees
     */

    
}

export function createTree1(){
    let root = new MNode<string>('');

    let node = root;
        let frw = new MNode<string>('frw');
            let gesdses = new MNode<string>('gesdses');
                let dsds = new MNode<string>('dsds');
                let gee = new MNode<string>('gee');
            let tes = new MNode<string>('tes');
            let gdg = new MNode<string>('gdg');
            let tee = new MNode<string>('tee');
        let gst = new MNode<string>('gst');
        let glees = new MNode<string>('glees');
        let ees = new MNode<string>('ees');

        root.children.push(frw);
            frw.children.push(gesdses);
                gesdses.children.push(dsds);
                gesdses.children.push(gee);
            frw.children.push(tes);
            frw.children.push(gdg);
            frw.children.push(tee);
        root.children.push(gst);
        root.children.push(glees);
        root.children.push(ees);

        return root;
}