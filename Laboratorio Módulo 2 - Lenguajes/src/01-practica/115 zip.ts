console.log("#Zip");

const zipObject = (keys, values) => {
  const obj = {};
  values.map((value, index) => {
    Object.defineProperty(obj, keys[index], {
      value: value,
    });
  });
  return obj;
};

console.log(
  zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
);
console.log(zipObject(["spanish", "english", "french"], ["hola"]));
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi"]));
