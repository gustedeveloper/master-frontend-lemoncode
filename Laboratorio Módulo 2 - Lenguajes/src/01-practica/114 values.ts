console.log("#Values");

const object = { id: 31, duration: 310, name: "long video", format: "mp4" };
const userInfo = {
  id: 2353,
  username: "mwgbt",
  password: "sdfsdKK124",
  country: "Spain",
};

const values = (obj) => {
  const listOfValues = [];

  for (const key in obj) {
    const value = obj[key];
    listOfValues.push(value);
  }

  return listOfValues;
};

console.log(values(object));
console.log(values(userInfo));
