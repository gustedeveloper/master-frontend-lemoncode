console.log("#Subsets");

const subsets = (word: string): string[] => {
  let wordArray: string[] = [];
  for (let i = 1; i < word.length; i++) {
    wordArray.push(word.slice(i));
  }
  return wordArray;
};

console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

// Challenge

const subsetChallenge = (word: string): void => {
  const wordArray = word.split("");
  wordArray.map((_letter, index) => {
    console.log(wordArray.slice(index + 1).join(""));
  });
};

subsetChallenge("message");
