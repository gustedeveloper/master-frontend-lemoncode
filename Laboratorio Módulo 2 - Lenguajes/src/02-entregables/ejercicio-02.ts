console.log("************** DELIVERABLE 02 *********************");

const arrayA: number[] = [1, 2, 3, 4];
const arrayB: number[] = [5, 6, 7, 8, 9, 10];
const arrayC: number[] = [11, 12, 13];
const arrayD: number[] = [14, 15, 16, 17];

// 2. Concat

const concat = (a: number[], b: number[]): void => {
  const concat = [...a, ...b];
  console.log(concat);
};

concat(arrayA, arrayB);

// Concat more than two

const concatMoreThanTwo = (...arrays: number[][]): void => {
  const totalArray = [];
  arrays.map((array) => totalArray.push(...array));
  console.log(totalArray);
};

concatMoreThanTwo(arrayA, arrayB, arrayC, arrayD);
