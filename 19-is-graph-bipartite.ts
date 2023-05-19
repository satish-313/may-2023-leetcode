function isBipartite(graph: number[][]): boolean {
    interface queueType {
        [index: number]: number;
    }

    class Queue {
        items: queueType;
        head: number;
        tail: number;

        constructor() {
            this.items = {};
            this.head = 0;
            this.tail = 0;
        }

        push(ele: number) {
            this.items[this.tail] = ele;
            this.tail++;
        }

        shift(): number {
            let removeEl = this.items[this.head];
            delete this.items[this.head];
            this.head++;
            return removeEl;
        }

        isEmpty(): boolean {
            return this.head === this.tail ? true : false;
        }
    }

    const visit: number[] = new Array(graph.length).fill(0);

    for (let i = 0; i < graph.length; i++) {
        if (visit[i] !== 0) continue;

        const queue = new Queue();
        queue.push(i);
        visit[i] = 1;

        while (!queue.isEmpty()) {
            let cur = queue.shift();

            for (let adjNode of graph[cur]) {
                if (visit[adjNode] === 0) {
                    visit[adjNode] = -visit[cur];
                    queue.push(adjNode);
                } else if (visit[adjNode] !== -visit[cur]) {
                    return false;
                }
            }
        }
    }

    return true;
}

console.log(
    isBipartite([
        [1, 2, 3],
        [0, 2],
        [0, 1, 3],
        [0, 2],
    ])
); // false
console.log(
    isBipartite([
        [1, 3],
        [0, 2],
        [1, 3],
        [0, 2],
    ])
); // true
