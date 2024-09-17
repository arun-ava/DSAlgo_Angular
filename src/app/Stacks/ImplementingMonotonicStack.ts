export function implementingMonotonicStackRunner(){

    let stack = new MonotonicIncreasingStack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(4);
    console.log(stack.getStack());
    stack.push(3);
    console.log(stack.getStack());
    stack.push(0);
    console.log(stack.getStack());
}

class MonotonicIncreasingStack<T> {
    private stack!: T[];

    constructor(){
        this.stack = new Array<T>();
    }

    push(val: T) {
        while(this.stack.length>0 && this.stack[this.stack.length-1] > val) {
            this.stack.pop();
        }
        this.stack.push(val);
    }

    pop() {
        return this.stack.pop();
    }

    /**
     * Returns a shallow copy of the current stack
     */
    getStack() {
        return this.stack.slice(0);
    }

    getSize() {
        return this.stack.length;
    }
}