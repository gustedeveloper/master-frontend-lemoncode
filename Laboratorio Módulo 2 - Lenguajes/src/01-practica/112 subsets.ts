console.log("#Subsets");

const subsets = (word) => {
  let wordArray = [];
  for (let i = 1; i < word.length; i++) {
    wordArray.push(word.slice(i));
  }
  return wordArray;
};

console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
