function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    const visit: number[] = [];

    for (let i=0; i<n; i++) visit.push(i)
    for (let [from, to] of edges) visit[to] = -1

    return visit.filter((value) => value != -1);
}

console.log(
    findSmallestSetOfVertices(6, [
        [0, 1],
        [0, 2],
        [2, 5],
        [3, 4],
        [4, 2],
    ])
);
