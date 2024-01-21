// const ar = [1, 2, 3, 4];

// if (ar) {
//   console.log("value is true");
// } else {
//   console.log("valur is false");
// }

const tr = "true";

if (tr === true) {
  console.log("value is true");
} else {
  console.log("valur is false");
}

//
const arrow1 = (num) => {
  console.log(typeof num);
  if (typeof num === "number") {
    console.log("true");
  } else {
    console.log("false");
  }
};

arrow1(10);
