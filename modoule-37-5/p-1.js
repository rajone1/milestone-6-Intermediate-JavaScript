const num = 100;
const bol = true;
const arr = ["shaon", "ishrak", "robin", "kamal"];
const obj = {
  name: "rezwan",
  phone: "018",
  home: "rajshahi",
};

const info = (item) => {
  infotem(item);
  //   return num;
};

const infotem = (name) => {
  console.log("tem");

  const display = document.getElementById("temp");
  display.innerText = " ";

  display.innerHTML = `
<h2>${num}</h2>
<h2>${bol}</h2>
<h2>${arr}</h2>
<h2>${arr[0]}</h2>
<h2>${obj.name}</h2>

`;
};

// info();
// console.log(result);

// button add
document.getElementById("btn").addEventListener("click", function () {
  console.log("uj");

  const display = document.getElementById("temp2");
  display.innerHTML = `

  <h2>${num}</h2>
  <h2>${bol}</h2>
  <h2>${arr[0]}</h2>
  <h2>${obj.name}</h2>
`;
});
