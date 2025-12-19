class KthLargest {
    nums: number[];
    k: number;

    constructor(k: number, nums: number[]) {
        this.nums = nums;
        this.k=k;
        this.nums.sort((a,b)=>{
            return a-b;
        });
    }

    add(val: number): number {
        this.addToQueue(val);
        return this.nums[this.k-1];
    }

    addToQueue(num){
        let i;
        for(i=0; i<this.nums.length;i++){
            if(this.nums[i]>num){
                break;
            }
        }
        for(let j=this.nums.length; j>i; j--){
            this.nums[j]=this.nums[j-1];
        }
        this.nums[i]=num;
    }
}