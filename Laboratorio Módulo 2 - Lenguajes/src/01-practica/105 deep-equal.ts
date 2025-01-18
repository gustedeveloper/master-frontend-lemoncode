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

function isDeepEqual<T extends object>(a: T, b: T): boolean {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (const key in a) {
    const valA = a[key];
    const valB = b[key];

    if (
      typeof valA === "object" &&
      typeof valB === "object" &&
      valA !== null &&
      valB !== null
    ) {
      if (!isDeepEqual(valA, valB)) {
        return false;
      }
    } else if (valA !== valB) {
      return false;
    }
  }
  return true;
}

const user2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

const clonedUser2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

console.log(isDeepEqual(user2, clonedUser2));
