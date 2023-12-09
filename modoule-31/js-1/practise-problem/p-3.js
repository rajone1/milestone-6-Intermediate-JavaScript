const number1 = [2, 3, 4, 5, 6, 10];

// const doubleit = (num) => num * 2;

// const makeDouble = number1.map(doubleit);
// console.log(makeDouble);

const squareex = (num) => {
  const square = num * num;

  return square;
};
const squarearray = number1.map(squareex);

console.log(squarearray);
