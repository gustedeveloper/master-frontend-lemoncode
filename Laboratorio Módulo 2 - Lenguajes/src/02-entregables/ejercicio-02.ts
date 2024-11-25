console.log("************** DELIVERABLE 02 *********************");

const arrayA = [1, 2, 3, 4];
const arrayB = [5, 6, 7, 8, 9, 10];
const arrayC = [11, 12, 13];
const arrayD = [14, 15, 16, 17];

// 2. Concat

const concat = (a, b) => {
  const concat = [...a, ...b];
  console.log(concat);
};

concat(arrayA, arrayB);

/*const concatMoreThanTwo = (...arrays) => {
  console.log(arrays);
};

concatMoreThanTwo(arrayA, arrayB, arrayC, arrayD);*/
