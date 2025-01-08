// Section A

const expensiveFunction = (): number => {
  console.log("Una única llamada");
  return 3.1415;
};

const memoize = <T>(f: () => T): (() => T) => {
  let cachedResult: T | undefined;

  return function (): T {
    if (cachedResult !== undefined) {
      return cachedResult;
    }
    cachedResult = f();
    return cachedResult;
  };
};

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

// Section B

const memoizeOneLine = <T>(f: () => T): T => {
  let cachedResult: T | undefined;
  return cachedResult ?? (cachedResult = f());
};

const memoized2 = memoizeOneLine(expensiveFunction);
console.log(memoized2);
console.log(memoized2);
console.log(memoized2);

// Section C

let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => (
  count++, `${text} `.repeat(repetitions).trim()
);

const memoizeWithArguments = (f) => {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = f(...args);
    cache.set(key, result);
    return result;
  };
};

const memoizedGreet = memoizeWithArguments(repeatText);

console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(2, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count);
