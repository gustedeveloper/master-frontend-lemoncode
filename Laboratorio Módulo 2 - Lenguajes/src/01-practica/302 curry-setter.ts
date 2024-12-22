console.log("#Curry setter");

const julia = { name: "Julia", surname: "Álvarez", age: 19 };

const set = (obj: object, prop: string, value: string | number): object => {
  const newObj = { ...obj };
  newObj[prop] = value;
  return newObj;
};

const updatedJulia = set(julia, "age", 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false
