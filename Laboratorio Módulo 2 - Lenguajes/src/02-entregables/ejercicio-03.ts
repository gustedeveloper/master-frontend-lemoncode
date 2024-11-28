console.log("************** DELIVERABLE 03 *********************");

// 3. Clone Merge

console.log("**Clone**");

const person1: object = {
  name: "Chloe",
  surname: "Smith",
  country: "UK",
};

const person2: object = {
  name: "Sarah",
  age: 27,
  occupation: "Web Developer",
};

const clone = (source: object): object => {
  const clone = { ...source };
  return clone;
};

console.log(clone(person1));

console.log("**Merge**");

const merge = (source: object, target: object): void => {
  const a = clone(source);
  const b = clone(target);

  const merge = {
    ...b,
    ...a,
  };

  console.log(merge);
};

merge(person1, person2);
