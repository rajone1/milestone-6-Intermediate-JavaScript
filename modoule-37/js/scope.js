// {} its a block scope

function add2(a, b) {
  const result2 = a + b;
  if (b > 10) {
    const item = 5 + a + b;
  } else {
    const item = 2 + a + b;
  }

  return result2;
}

const result = add2(4, 12);
console.log(result);
