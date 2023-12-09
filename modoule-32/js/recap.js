const a = [1, 2, 3, 4, 56];

let salary = 450;
salary = 455;

let salary2 = 300;

salary2 = 400;
console.log(a, salary2);

function calcultesalary(salary, bonus = 0, tax = 0.25) {
  const tsalary = salary - salary * tax;

  const total = tsalary + bonus;
  return total;
}

const all = calcultesalary(1000, 500);
console.log(all);

// use arrow function

const calcultesalary1 = (salary, bonus = 0, tax = 0.25) => {
  const tsalary = salary - salary * tax;

  const total = tsalary + bonus;
  return total;
};

const all1 = calcultesalary1(2000, 500);

console.log(all1);
//
const usebacktrick = `my salary: ${calcultesalary1(1000, 200)} with tax`;
console.log(usebacktrick);
// destructaring

const [sh, re] = [2, 3, 5];
console.log(sh);

const { name1, address } = { name1: "shaon", address: "Rajshahi" };
console.log(name1);
//

const array2 = [1, 2, 3, 4, 5];

const array3 = [0, ...array2, 5, 6, 7];
console.log(array2);
console.log(array3);
