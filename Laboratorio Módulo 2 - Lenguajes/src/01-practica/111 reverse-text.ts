console.log("#Reverse text");

const line: string = "One two three";

const reverseText = (text: string): string =>
  text.split(" ").reverse().join(" ");

console.log(reverseText(line));
