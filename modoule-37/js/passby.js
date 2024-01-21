// primitive types are pass by value
let num1 = 5;
let num2 = 7;

function number(a, b) {
  a = 10;
  const mult = a * b;
  return mult;
}
console.log(num1);
number(num1, num2);
console.log(num1);

// object and array are pass by reference
let student1 = { name: "Jalil", partner: "borsha" };
let student2 = { name: "raj", partner: "sara" };

function pass(a, b) {
  a.name = "shaon";
  b.name = "era";
}
console.log(student1, student2);
pass(student1, student2);
console.log(student1, student2);
