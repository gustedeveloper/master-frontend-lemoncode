console.log("#Clone merge");

// Apartado A

const person = {
  name: "Mary",
  age: 37,
  country: "USA",
  occupation: "Writer",
};

const cloneObject = <T>(source: T): T => {
  return { ...source };
};

console.log(cloneObject(person));

// Apartado B

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const mergeObjects = <T, U>(source: T, target: U): T & U => {
  return {
    ...cloneObject(target),
    ...cloneObject(source),
  };
};

console.log(mergeObjects(a, b));
