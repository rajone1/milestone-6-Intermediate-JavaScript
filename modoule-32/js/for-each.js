const friends = ["Tom Hanks", "Tom Cruise", "Tom Brady", "TOM Solaiman"];

friends.forEach((friend) => {
  console.log(friend);
});

// friends.forEach((product) => console.log(product));

const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 1, name: "mobile", price: 80000 },
  { id: 1, name: "watch", price: 35000 },
  { id: 1, name: "tablet", price: 23000 },
];

products.forEach((product) => console.log(product.price));
