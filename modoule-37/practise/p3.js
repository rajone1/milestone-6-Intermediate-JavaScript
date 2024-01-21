const operation = (num1, num2, string) => {
  const add = num1 + num2;
  const subtract = num1 - num2;
  const multyplay = num1 * num2;
  const divide = num1 / num2;
  const modulus = num1 % num2;

  if (string === "add") {
    return add + " add";
  } else if (string === "subtract") {
    return subtract + " sustract";
  } else if (string === "multyplay") {
    return multyplay + " multyply";
  } else if (string === "divide") {
    return divide + " divide";
  } else if (string === "modulus") {
    return modulus + " modulus";
  } else {
    return "invalide opretion";
  }
};

const a = operation(10, 2, "subtract");
console.log(a);
