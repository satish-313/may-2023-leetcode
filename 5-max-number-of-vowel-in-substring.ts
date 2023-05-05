function maxVowels(s: string, k: number): number {
    let maxV = 0;
    const window = new Array(26).fill(0);

    for (let i = 0; i < k; i++) {
        window[s.charCodeAt(i) - 97]++;
    }

    function countVowel(a: number[]): number {
        let v = [0, 4, 8, 14, 20];
        let n = 0;

        for (let num of v) {
            n += a[num];
        }

        return n;
    }

    maxV = Math.max(countVowel(window), maxV);

    for (let i = k; i < s.length; i++) {
        window[s.charCodeAt(i) - 97]++;
        window[s.charCodeAt(i - k) - 97]--;
        maxV = Math.max(countVowel(window), maxV);
    }

    return maxV;
}
