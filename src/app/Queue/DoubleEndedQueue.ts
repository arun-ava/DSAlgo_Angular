export class DoubleEndedQueue<T> {

    private _data: T[];
    private _size: number;
    private _front = -1;
    private _rear = -1;

    constructor(size: number) {
        this._data = new Array<T>(size);
        this._size = size;
    }

    enqueueAtFront(val: T) {
        if(this._isFull()) {
            return;
        }

        this._front = (this._size + this._front - 1) % this._size;
        this._data[this._front] = val;
    }

    enqueueAtRear(val: T) {
        if(this._isFull()) {
            return;
        }

        this._rear = (this._rear + 1) % this._size;
        this._data[this._rear] = val;
    }

    dequeueFromFront() {

        this._data.shift();
    }

    dequeueFromRear() {
        this._data.shift();
    }

    private _isFull() {
        if(this._front !== -1 && (this._rear+1)%this._size === this._front) {
            // OVERFLOW
            console.log('OVERFLOW');
            return true;
        }

        return false;
    }

    private _isEmpty() {
        if(this._front !== -1 || this._rear === this._front) {
            // OVERFLOW
            console.log('OVERFLOW');
            return true;
        }

        return false;
    }


}