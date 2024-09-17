// https://leetcode.com/problems/min-stack/ 
// TODO : Read the method of handling getMIN implemented here
class MinStack {
    constructor() {
        this._data = new Array<number>();
        this._minimums = new Array<number>();
        this._top = -1;
    }

    push(val: number): void {
        this._top++;
        this._minimums[this._top] = this._minimums.length === 0 ? val : Math.min(...[this._minimums[this._top-1], val]);
        this._data[this._top] = val;
    }

    pop(): void {
        this._top = Math.max(0, this._top-1);
    }

    top(): number {
        return this._data[this._top];
    }

    getMin(): number {
        return this._minimums[this._top];
    }

    private _data: Array<number>;
    private _minimums: Array<number>;
    private _top;
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */