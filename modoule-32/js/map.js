// const numbers = [2, 8, 4, 6, 3];
// const output = [];
// for (const number of numbers) {
//   const doubled = number * 2;
//   output.push(doubled);
// }
// console.log(output);
// use function
const numbers = [2, 4, 6, 8, 100];
function getdouble(numbers) {
  const output = [];
  for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
  }
  return output;
}
const result = getdouble(numbers);
console.log(result);
// use map
const doubleit = (num) => num * 2;

const makeDouble = numbers.map(doubleit);
console.log(makeDouble);
// or

const makeDouble2 = numbers.map((n) => n * 2);
console.log(makeDouble2);

// we can use all togather array and function

const useall = [1, 2, 3, 4, 5].map((num) => num * 3);
console.log(useall);
