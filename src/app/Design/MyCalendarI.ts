// https://leetcode.com/problems/my-calendar-i/

class MyCalendar {
    private _leftHeap: number[];
    private _rightHeap: number[];
   
    constructor() {
        this._leftHeap = [];
        this._rightHeap = [];
    }
    
    book(start: number, end: number): boolean {

    }

    private _addToHeap(val: number, heap: number[]) {
        heap.push(val);
        this._siftUp(heap);

        let a: bigint = 5;
        let b: bigint = 5;
        let c: number = a%b as number;


    }

    private _siftUp(heap: number[]) {

    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */