function diagonalSum(mat:number[][]):number {
    const n = mat.length;
    let total = 0;

    for (let i=0; i<n; i++){
        total += mat[i][i] + mat[i][n-i-1];
    }

   if (n%2) total -= mat[Math.floor(n/2)][Math.floor(n/2)];

   return total;
}
