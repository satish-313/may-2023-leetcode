class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

let a5 = new ListNode(5);
let a4 = new ListNode(4, a5);
let a3 = new ListNode(3, a4);
let a2 = new ListNode(2, a3);
let a1 = new ListNode(1, a2);

function print(h: ListNode | null): void {
    let a: number[] = [];

    while (h) {
        a.push(h.val);
        h = h.next;
    }

    console.log(a);
}

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    if (head === null) return null;

    let cur: ListNode | null = head;
    let len = 0;
    let count = 0;
    let l = 0;
    let r = 0;

    while (cur !== null) {
        len += 1;
        if (len === k) l = cur.val;
        cur = cur.next;
    }

    cur = head;
    while (cur !== null) {
        count += 1;
        if (count === len - k + 1) r = cur.val;
        cur = cur.next;
    }

    count = 0;
    cur = head;
    console.log(l, r);
    while (cur !== null) {
        count += 1;
        if (count === k) cur.val = r;
        if (count === len - k + 1) cur.val = l;
        cur = cur.next;
    }

    return head;
}

print(swapNodes(a1, 2));
