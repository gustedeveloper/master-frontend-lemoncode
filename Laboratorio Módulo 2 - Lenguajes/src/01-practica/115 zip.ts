console.log("#Zip");

const zipObject = (keys, values) => {
  const obj = {};
  keys.map((key, index) => {
    Object.defineProperty(obj, key, {
      value: values[index],
    });
  });
  return obj;
};

console.log(
  zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
);
