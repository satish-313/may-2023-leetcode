function arraySign(nums: number[]): number {
    let prod: number = 1;

    for (let num of nums) {
        if (num === 0) return 0;
        else if (num < 0) prod = prod * -1;
        else prod = prod * 1;
    }

    return prod;
}
