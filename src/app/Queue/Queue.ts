export class Queue<T> {

    private _data: T[];
    private _size: number;

    constructor(size: number) {
        this._data = new Array<T>();
        this._size = size;
    }

    enqueue(val: T) {
        if(this._data.length >= this._size) {
            return;
        }
        this._data.push(val);
    }

    dequeue() {
        this._data.shift();
    }


}