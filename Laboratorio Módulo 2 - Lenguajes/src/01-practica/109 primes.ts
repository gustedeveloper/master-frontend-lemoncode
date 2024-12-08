// isPrime function not optimized

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

/*const primes = (from, to) => {
  for (let i = from; i <= to; i++) {
    console.log(`${i} is ${isPrime(i) ? "PRIME!" : "not PRIME!"}`);
  }
};

primes(0, 100);*/

// Challenge

const isPrimeRoot = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;

  const root = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= root; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// Final function optimized

const primes = (from, to) => {
  for (let i = from; i <= to; i++) {
    console.log(`${i} is ${isPrimeRoot(i) ? "PRIME!" : "not PRIME!"}`);
  }
};

primes(0, 100);
