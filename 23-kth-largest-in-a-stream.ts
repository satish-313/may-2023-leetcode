class myKthLargest {
    arr: number[];
    k: number;
    constructor(k: number, nums: number[]) {
        this.arr = nums.sort((a, b) => b - a);
        this.k = k;
    }

    add(val: number): number {
        this.arr.push(val);
        this.arr.sort((a, b) => b - a);
        return this.arr[this.k - 1];
    }
}

class Heap<T> {
    private heap: T[] = [];

    peak() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    push(v: T) {
        this.heap.push(v);
        let current = this.heap.length - 1;
        let parent = Math.floor(current / 2) - 1;

        while (current > 0 && this.heap[current] < this.heap[parent]) {
            [this.heap[current], this.heap[parent]] = [
                this.heap[parent],
                this.heap[current],
            ];
            parent = Math.floor(current / 2) - 1;
        }
    }

    pop() {
        if (this.heap.length === 0) throw new Error("overflow");

        const [head] = this.heap;
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.length -= 1;
        this.heapify(0);
        return head;
    }

    private heapify(i: number) {
        const left = i * 2 + 1;
        const right = 2 * i + 2;

        let smallest = i;

        if (left < this.heap.length && this.heap[left] < this.heap[i]) {
            smallest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right] < this.heap[smallest]
        ) {
            smallest = right;
        }

        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[i],
            ];
            this.heapify(smallest);
        }
    }
}

class KthLargest {
    private heap = new Heap<number>();
    constructor(private k: number, nums: number[]) {
        nums.sort((a, b) => a - b);

        for (let num of nums) this.heap.push(num);

        while (this.heap.size() > this.k) {
            this.heap.pop();
        }
    }

    add(val: number): number {
        this.heap.push(val);
        if (this.heap.size() === this.k + 1) {
            this.heap.pop();
        }

        return this.heap.peak();
    }
}

const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const upHeap = (arr: number[], start: number) => {
    if(start <= 0) {
        return;
    }
    const parent = Math.floor((start - 1) / 2);
    if(arr[start] > arr[parent]) {
        swap(arr, parent, start);
        upHeap(arr, parent)
    }
};
/*
2i + 1 = c1 ==> (c1 - 1) / 2
2i + 2 = c2
*/
const downHeap = (arr: number[], start: number, stop: number) => {
    const leftChild = 2 * start + 1;
    const rightChild = leftChild + 1; //2 * start + 2;
    if (leftChild >= stop) {
        return;
    }

    const largestChild = rightChild < stop && arr[rightChild] > arr[leftChild] ? rightChild : leftChild;
    if (arr[largestChild] > arr[start]) {
        swap(arr, largestChild, start);
        downHeap(arr, largestChild, stop);
    }
};



class finalKthLargest {
    private data: number[];
    private k: number;
    constructor(k: number, nums: number[]) {
        for (let i = 0; i < nums.length; i++) {
            nums[i] *= -1;
        }
        for (let i = 0; i < nums.length; i++) {
            upHeap(nums, i);
        }
        // console.log({nums})
        while(nums.length > k) {
            swap(nums, 0, nums.length - 1);
            nums.pop();
            downHeap(nums, 0, nums.length);
        }
        // console.log({nums})
        this.data = nums
        this.k = k;
    }

    add(val: number): number {
        val *= -1
        const data = this.data;
        // console.log({data : this.data, k :this.k, val})
        if(data.length < this.k) {
            data.push(val)
            upHeap(data, data.length - 1);
        }
        else if (val < data[0]) {
            data[0] = val;
            downHeap(data, 0, data.length);
        }
        return this.data[0] * -1;

    }
}