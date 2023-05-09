function spiralOrder(matrix: number[][]): number[] {
    let result: number[] = [];

    let colMax = matrix[0].length;
    let colMin = -1;
    let rowMax = matrix.length;
    let rowMin = 0;
    let row = 0;
    let col = 0;
    let total = colMax * rowMax;

    while (result.length < total) {
        // for Left to Right
        for (col; result.length < total && col < colMax; col++) {
            result.push(matrix[row][col]);
        }
        col -= 1;
        row += 1;
        rowMax -= 1;
        // for Top to Down
        for (row; result.length < total && row <= rowMax; row++) {
            result.push(matrix[row][col]);
        }
        row -= 1;
        col -= 1;
        colMin += 1;

        // for Left to Right
        for (col; result.length < total && col >= colMin; col--) {
            result.push(matrix[row][col]);
        }
        col += 1;
        row -= 1;
        rowMin += 1;

        // for Down to Up
        for (row; result.length < total && row >= rowMin; row--) {
            result.push(matrix[row][col]);
        }
        row += 1;
        col += 1;
        colMax -= 1;
    }

    return result;
}

console.log(
    spiralOrder([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
    ])
);
