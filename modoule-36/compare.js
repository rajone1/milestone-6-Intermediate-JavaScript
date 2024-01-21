// const value1 = [1, 2, 3, 4, 5];
// const value2 = [1, 2, 3, 4, 5];

const value1 = { 1: "2a", 3: "4b" };
const value2 = { 1: "2a", 3: "4b" };
if (value1 === value2) {
  console.log("equal");
} else {
  console.log("not equal");
}
// dont use

const value1string = JSON.stringify(value1);
const value2string = JSON.stringify(value2);
// console.log(value1string, value2string);
if (value1string === value2string) {
  console.log("true");
} else {
  console.log("false");
}

// use function
function compareObject(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length === secondKeys.length) {
    for (const key of firstKeys) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
const isSame = compareObject(first, second);
console.log(isSame);
