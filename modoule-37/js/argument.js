function sum(a, b, c) {
  // ata korla (array like object)
  //   console.log(arguments);
  //   sorarsori arry deba
  const arg = [...arguments];
  console.log(arg);
  const result = a + b + c;
  return result;
}

const value = sum(1, 2, 3, 5, 10, 15);
console.log(value);
// para meater r length deba
console.log(sum.length);
