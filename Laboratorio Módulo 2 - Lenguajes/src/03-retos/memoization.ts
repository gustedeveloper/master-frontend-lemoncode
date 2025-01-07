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
