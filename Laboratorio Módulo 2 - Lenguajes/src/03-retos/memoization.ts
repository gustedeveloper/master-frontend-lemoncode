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
