console.log("#Includes");

function includes(array, value) {
  let exists;
  array.map((element) => {
    if (element === value) {
      exists = true;
    } else {
      exists = false;
    }
  });
  return exists;
}

console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

// Challenge

const getIndex = (array, value) => {
  return array.indexOf(value);
};

console.log(getIndex([1, 2, 3], 3)); // index 2
console.log(getIndex([1, 2, 3], 0)); // index -1 because it does not exist
