console.log("#Deep equal");

// Apartado A

const user = { name: "María", age: 30 };
const clonedUser = { name: "María", age: 30 };

function isEqual<T extends object>(a: T, b: T): boolean {
  const obj1 = Object.entries(a);
  const obj2 = Object.entries(b);

  if (obj1.length !== obj2.length) return false;

  for (const key in a) {
    if (!b.hasOwnProperty(key) || b[key] !== a[key]) {
      return false;
    }
  }
  return true;
}

console.log(isEqual(user, clonedUser)); // true
