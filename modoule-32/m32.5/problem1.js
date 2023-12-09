// p-1

const odds = [1, 3, 5, 7, 9];

const odd2 = odds.map((new1) => {
  const even = new1 + 1;
  //   console.log(even);
});

// p-2

const getarray = [33, 50, 79, 78, 90, 101, 30];

const getarray2 = getarray.filter((add2) => add2 % 10 === 0);
const getarray3 = getarray.find((add) => add % 10 == 0);

// console.log(getarray2);
// console.log(getarray3);

//

const array = [1, 9, 17, 22];

const find = array.reduce((previousvalue, presentvalue) => {
  const add = previousvalue + presentvalue;
  return add;
}, 0);

// console.log(find);

const addall = [20, 15, 22];

const add = addall.reduce((prev, pres) => {
  const aded = prev + pres;
  return aded;
  console.log(aded);
}, 0);
console.log(add);

//

const odds2 = [1, 3, 5, 7, 9];

const students = [
  {
    name: "shaon",

    age: 29,

    class: { a: [1, 2, 3, 4], b: [4, 5, 6, 7] },
  },

  { university: "rajshai" },
  { unive: "BD" },
];

console.log(students[0].class.b[1]);
console.log(students[1].university);
console.log(students[2].unive);
