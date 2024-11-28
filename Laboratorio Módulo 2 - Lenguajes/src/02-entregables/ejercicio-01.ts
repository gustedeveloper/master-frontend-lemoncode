console.log("************** DELIVERABLE 01 *********************");

const numbers: number[] = [20, 33, 45, 56, 64, 71];
const names: string[] = ["Pedro", "María", "Lucía", "Mario"];
const countries: string[] = ["France", "Spain", "Portugal", "Greece", "Italy"];

// 1. Array operations

console.log("**HEAD**");

const head = <T>(array: T[]): void => {
  const [firstElement] = array;
  console.log(firstElement);
};

head<number>(numbers);
head<string>(names);
head<string>(countries);

console.log("**TAIL**");

const tail = <T>(array: T[]): void => {
  const [, ...rest] = array;
  console.log(rest);
};

tail<number>(numbers);
tail<string>(names);
tail<string>(countries);

console.log("**INIT*");

const init = <T>(array: T[]): void => {
  const allButNotLast = array.slice(0, -1);
  console.log(allButNotLast);
};

init<number>(numbers);
init<string>(names);
init<string>(countries);

console.log("**LAST*");

const last = <T>(array: T[]): void => {
  const lastElement = array[array.length - 1];
  console.log(lastElement);
};

last<number>(numbers);
last<string>(names);
last<string>(countries);
