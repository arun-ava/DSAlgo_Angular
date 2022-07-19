/**
 * Create a Min Heap using array
 */

import { SwapArrPosition } from "../Utilities/Swap";

export class MinHeap<T> {
    private _heapData = new Array<T>();

    // // to heapify a subtree with the root at given index
    // void MinHeapify(int );
  
    
  
    // // to extract the root which is the minimum element
    // int extractMin();
  
    // // Decreases key value of key at index i to new_val
    // void decreaseKey(int i, int new_val);
  
    
  
    // // Deletes a key stored at index i
    // void deleteKey(int i);
  
    // // Inserts a new key 'k'
    // void insertKey(int k);

    // Get Index of Parent Node
    getParent(i: number): number { 
        return Math.floor((i-1)/2); 
    }

    // to get index of left child of node at index i
    getLeft(i: number) {
        return 2 * i + 1;
    }

    // to get index of right child of node at index i
    getRight(i: number) {
        return 2 * i + 2;
    }

    // Returns the minimum key (key at root) from min heap
    getMin() { 
        return this._heapData[0]; 
    }

    // Makes sure that all parent elements of given node maintain the Min-Heap property
    bottomUpHeapify(ind: number) {

        while(this._heapData[ind] > this._heapData[this.getParent(ind)]) {
            SwapArrPosition(ind, this.getParent(ind), this._heapData);
        }
    }

}