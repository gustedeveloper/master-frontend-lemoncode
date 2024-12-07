const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primes = (from, to) => {
  let numArray = composeGivenNumsArray(from, to);
  numArray.map((num) => {
    console.log(isPrime(num));
  });
};

const composeGivenNumsArray = (from, to) => {
  let numArray = [];
  for (let i = from; i < to + 1; i++) {
    numArray.push(i);
  }
  return numArray;
};

const isPrime = (num) => {
  if (num === 1) {
    return `${num} is not PRIME!`;
  } else if (num === 2) {
    return `${num} is PRIME!`;
  }

  let result;
  let results = [];

  for (let i = 2; i < num; i++) {
    result = num % i;
    results.push(result);
    i + 1;
  }

  return results.includes(0) ? `${num} is not PRIME!` : `${num} is PRIME!`;
};

console.log(isPrime(34));

primes(60, 100);
