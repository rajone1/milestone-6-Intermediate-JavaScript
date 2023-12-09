const numbers = [12, 56, 87, 44];

const half = numbers.map((number) => number / 2);
// console.log(half);
const third = numbers.map((number) => number / 3);
// console.log(third);
const fourth = numbers.map((number) => {
  const result = number / 4;

  const fiext = result.toFixed(2);

  console.log(fiext);
});

const friends = ["Tom Hanks", "Rezwan", "Tom Brady", "TOM Solaiman"];

const firstlatter = friends.map((latter) => latter[0]);

// console.log(firstlatter);

const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 1, name: "mobile", price: 80000 },
  { id: 1, name: "watch", price: 35000 },
  { id: 1, name: "tablet", price: 23000 },
];

const pricefind = products.map((n) => n.price);
const namefind = products.map((n) => n.name);
// console.log(pricefind);
// console.log(namefind);
