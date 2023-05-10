function generateMatrix(n: number): number[][] {
    const res = new Array(n).fill(null).map(() => new Array(n).fill(0));
    let count = 1;
    let row = 0;
    let col = 0;

    let up = 0;
    let down = n - 1;
    let left = 0;
    let right = n - 1;

    while (count <= n * n) {
        for (col = left; count <= n * n && col <= right; col++) {
            res[row][col] = count++;
        }
        col -= 1;

        for (row = up + 1; count <= n * n && row <= down; row++) {
            res[row][col] = count++;
        }
        row -= 1;

        for (col = right - 1; count <= n * n && col >= left; col--) {
            res[row][col] = count++;
        }
        col += 1;

        for (row = down - 1; count <= n * n && row >= up + 1; row--) {
            res[row][col] = count++;
        }
        row += 1;

        left++;
        right--;
        up++;
        down--;
    }

    return res;
}

console.log(generateMatrix(4));
