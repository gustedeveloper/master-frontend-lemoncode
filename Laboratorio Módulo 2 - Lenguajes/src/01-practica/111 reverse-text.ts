console.log("#Reverse text");

const line = "One two three";

const reverseText = (text) => {
  return text.split(" ").reverse().join(" ");
};

console.log(reverseText(line));
