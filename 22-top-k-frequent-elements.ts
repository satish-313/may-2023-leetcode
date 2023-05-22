function topKFrequent(nums: number[], k: number): number[] {
    const result: number[][] = [];
    const map = new Map<number, number>();
    const ans: number[] = [];

    nums.forEach((num) => map.set(num, (map.get(num) || 0) + 1));

    for (let m of map) {
        result.push(m);
    }
    result.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        ans.push(result[i][0]);
    }
    return ans;
}

console.log(topKFrequent([-1, -1], 1));
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
