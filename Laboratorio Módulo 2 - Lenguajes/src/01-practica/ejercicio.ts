console.log("************** PRACTICE *********************");
console.log("Use this folder 00 practice to practice with homework exercises");
console.log("You can add new files as long as they are imported from index.ts");

console.log("#Biggest word");

const biggestWord = (phrase: string): string => {
  let longestWord = "";

  const phraseWords = phrase.split(" ");

  phraseWords.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
};

console.log(biggestWord("Esta frase puede contener muchas palabras"));
console.log(biggestWord("Ejercicios básicos de JavaScript"));
