function findDifference(nums1: number[], nums2: number[]): number[][] {
    const res: number[][] = [];
    const set1 = new Set<number>(nums1);
    const set2 = new Set<number>(nums2);

    res.push([]);
    res.push([]);

    for (let num of nums1) {
        if (!set2.has(num)) {
            res[0].push(num);
            set2.add(num);
        }
    }

    for (let num of nums2) {
        if (!set1.has(num)) {
            res[1].push(num);
            set1.add(num);
        }
    }

    return res;
}
