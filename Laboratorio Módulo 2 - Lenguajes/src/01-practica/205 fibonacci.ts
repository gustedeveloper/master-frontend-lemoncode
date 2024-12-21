console.log("#Fibonacci");

const fib = (n) => {
  let a = 0;
  let b = 1;
  if (n === 0) return a;
  if (n === 1) return b;
  if (n >= 2) {
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  }
};

console.log(fib(8));
