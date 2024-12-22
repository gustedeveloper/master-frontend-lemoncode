console.log("#Swap");

let aA = "A";
let bB = "B";

[aA, bB] = [bB, aA];

console.log(aA === "B" && bB === "A" ? "You did it!" : "Keep trying!");
