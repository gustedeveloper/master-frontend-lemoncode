type NestedArray = number | NestedArray[];

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

function flattenArray(arr: NestedArray[]): number[] {
  const result: number[] = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flattenArray(sample));
