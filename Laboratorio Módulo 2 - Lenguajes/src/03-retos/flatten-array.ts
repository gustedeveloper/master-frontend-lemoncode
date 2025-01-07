const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const result = [];

function flattenArray(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      flattenArray(item);
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flattenArray(sample));
