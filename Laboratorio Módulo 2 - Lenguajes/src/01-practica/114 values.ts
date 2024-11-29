console.log("#Values");

interface Object {
  id: number;
  duration: number;
  name: string;
  format: string;
}

interface UserInfo {
  id: number;
  username: string;
  password: string;
  country: string;
}

const object: Object = {
  id: 31,
  duration: 310,
  name: "long video",
  format: "mp4",
};
const userInfo: UserInfo = {
  id: 2353,
  username: "mwgbt",
  password: "sdfsdKK124",
  country: "Spain",
};

const values = (
  obj: Object | UserInfo
): Array<Object[keyof Object] | UserInfo[keyof UserInfo]> => {
  const listOfValues: Array<Object[keyof Object] | UserInfo[keyof UserInfo]> =
    [];

  for (const key in obj) {
    const value = obj[key];
    listOfValues.push(value);
  }

  return listOfValues;
};

console.log(values(object));
console.log(values(userInfo));
