const add = (num1, num2) => num1 + num2;

const new1 = add(5, 10);
console.log(new1);

const multiplie = (num1, num2) => num1 * num2;
const new2 = multiplie(5, 10);
console.log(new2);

//
const name1 = (num1, num2) => num1 + " " + num2;
const new3 = name1("shaon", "ahommed");
console.log(new3);

// multiple array

const addall = (a, b, c, d) => a + b + c + d;
const new4 = addall(5, 10, 10, 10);
console.log(new4);
// again

const arrayall = (seta, setb, setc) => {
  const new1 = seta + setb;
  const new2 = setb + setc;
  const new3 = new1 * new2;
  const divide = new3 / 2;

  return divide;
};

const all = arrayall(5, 5, 5);
console.log(all);
