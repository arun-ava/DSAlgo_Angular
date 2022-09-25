export class SegmentTree<T> {
    private _segmentdata: T[];
    private _data: T[];
    private _queryRelationOperation: Function;

    constructor(data: T[], operation: Function) {
        this._queryRelationOperation = operation;
        this._segmentdata = new Array<T>(2*data.length-1);
        this._data = data;

        this._recursivelyCreateTree(0, this._data.length-1, 0);

        console.log(this._data);
        console.log(this._segmentdata);
    }

    private _recursivelyCreateTree(left: number, right: number, index: number) {
        if(left === right) {
            this._segmentdata[index]=this._data[left];
            return;
        }

        let mid = Math.floor((left+right)/2);
        this._recursivelyCreateTree(left, mid, index*2+1),
        this._recursivelyCreateTree(mid+1, right, index*2+2)
        this._segmentdata[index] = this._queryRelationOperation(this._segmentdata[index*2+1], this._segmentdata[index*2+2]);
        return;
    }


}