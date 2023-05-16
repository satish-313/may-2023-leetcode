class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function print(h: ListNode | null): void {
    let arr: number[] = [];

    while (h !== null) {
        arr.push(h.val);
        h = h.next;
    }

    console.log(arr);
}

let a4 = new ListNode(4);
let a3 = new ListNode(3, a4);
let a2 = new ListNode(2, a3);
let a1 = new ListNode(1, a2);

function swapPairs(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;

    let ans = new ListNode(0, head);
    let cur: ListNode | null = ans;

    while (cur !== null && cur.next !== null && cur.next.next !== null) {
        let t1 = cur.next;
        let t2 = cur.next.next;

        cur.next = t2;
        t1.next = t2.next;
        t2.next = t1;
        cur = cur.next!.next;
    }

    return ans.next;
}

print(swapPairs(a1));
