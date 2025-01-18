console.log("#Includes");

function includes(array: number[], value: number): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

// Challenge

const getIndex = (array: number[], value: number) => {
  return array.indexOf(value);
};

console.log(getIndex([1, 2, 3], 3)); // index 2
console.log(getIndex([1, 2, 3], 0)); // index -1 because it does not exist
