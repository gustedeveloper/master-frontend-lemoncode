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

const currySet = (prop: string) => {
  return (obj: object, value: string | number) => {
    const newObj = { ...obj };
    newObj[prop] = value;
    return newObj;
  };
};

const setName = currySet("name");
const setSurName = currySet("surname");
const setAge = currySet("age");

console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurName(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
