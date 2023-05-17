class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function print(h: ListNode | null) {
    let arr: number[] = [];

    while (h !== null) {
        arr.push(h.val);
        h = h.next;
    }
    console.log(arr);
}

let a4 = new ListNode(1);
let a3 = new ListNode(3, a4);
let a2 = new ListNode(2, a3);
let a1 = new ListNode(1, a2);

function pairSum(head: ListNode | null): number {
    if (head === null) return 0;

    let prev: ListNode | null = null;
    let cur: ListNode | null = head;
    let vals: number[] = [];
    let maxSumPair = 0;

    while (cur !== null) {
        vals.push(cur.val);
        let t = cur.next;
        cur.next = prev;
        prev = cur;
        cur = t;
    }

    let i = 0;
    while (prev !== null) {
        maxSumPair = Math.max(vals[i] + prev.val, maxSumPair);
        prev = prev.next;
        i += 1;
    }

    return maxSumPair;
}

console.log(pairSum(a1));
