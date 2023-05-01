function average(salary: number[]): any {
    let min = Infinity;
    let max = -Infinity;
    let total = 0;

    for (let num of salary) {
        min = Math.min(num, min);
        max = Math.max(num, max);
        total += num;
    }

    return parseFloat(((total - min - max) / (salary.length - 2)).toFixed(5));
}

console.log(average([4000, 3000, 1000, 2000]));
