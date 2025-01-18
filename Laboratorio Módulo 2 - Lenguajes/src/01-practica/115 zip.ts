console.log("#Zip");

const zipObject = (
  keys: string[],
  values: string[]
): Record<string, string> => {
  const obj: Record<string, string> = {};
  values.forEach((value, index) => {
    obj[keys[index]] = value;
  });
  return obj;
};

console.log(
  zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
);
console.log(zipObject(["spanish", "english", "french"], ["hola"]));
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi"]));
