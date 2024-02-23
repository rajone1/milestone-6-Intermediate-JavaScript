const searchproduct = () => {
  const prodouctfild = document.getElementById("product");
  const prdouct = prodouctfild.value;
  const quentityfild = document.getElementById("quantity");
  const quentity = quentityfild.value;
  prodouctfild.value = " ";
  quentityfild.value = null;
  console.log(prdouct, quentity);
  displayitem(prdouct, quentity);
};

const displayitem = (product, quantity) => {
  const ul = document.getElementById("product-container");

  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;

  ul.appendChild(li);
};
