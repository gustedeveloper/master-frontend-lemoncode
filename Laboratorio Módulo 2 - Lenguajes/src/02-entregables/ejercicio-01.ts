console.log("************** DELIVERABLE 01 *********************");

const numbers = [20, 33, 45, 56, 64, 71];
const names = ["Pedro", "María", "Lucía", "Mario"];
const countries = ["France", "Spain", "Portugal", "Greece", "Italy"];

// 1. Array operations

console.log("**HEAD**");

const head = (array) => {
  const arrayCopy = [...array];
  const [firstElement] = arrayCopy;
  console.log(firstElement);
};

head(numbers);
head(names);
head(countries);

console.log("**TAIL**");

const tail = (array) => {
  const excludeFirstElement = ([_firstElement, ...rest]) => rest;
  const rest = excludeFirstElement(array);
  console.log(rest);
};

tail(numbers);
tail(names);
tail(countries);

console.log("**INIT*");

const init = (array) => {
  const arrayCopy = [...array];
  const allButNotLast = arrayCopy.splice(0, array.length - 1);
  console.log(allButNotLast);
};

init(numbers);
init(names);
init(countries);

console.log("**LAST*");

const last = (array) => {
  const arrayCopy = [...array];
  const lastElement = arrayCopy.splice(array.length - 1);
  console.log(lastElement);
};

last(numbers);
last(names);
last(countries);
