function predictPartyVictory(senate: string): string {
    let rCount = 0;
    let rBan = 0;
    let dCount = 0;
    let dBan = 0;

    let queue: string[] = [];

    for (let char of senate) {
        queue.push(char);
        if (char == "R") rCount += 1;
        else dCount += 1;
    }

    while (rCount > 0 && dCount > 0) {
        let char = queue.shift()!;

        if (char == "D") {
            if (dBan > 0) {
                dBan -= 1;
                dCount -= 1;
            } else {
                rBan += 1;
                queue.push("D");
            }
        } else {
            if (rBan > 0) {
                rBan -= 1;
                rCount -= 1;
            } else {
                dBan += 1;
                queue.push("R");
            }
        }
    }

    return rCount > 0 ? "Radiant" : "Dire"
}

console.log(predictPartyVictory("DRRD"));
// console.log(predictPartyVictory("DDRRR"));
// console.log(predictPartyVictory("RD"));
// console.log(predictPartyVictory("DR"));
// console.log(predictPartyVictory("RDD"));
