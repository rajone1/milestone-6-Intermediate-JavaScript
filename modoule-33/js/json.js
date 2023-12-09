const user = { id: 1, name: "Gorib Aamir", job: "actor" };
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

//

const shop = {
  owner: "shaon",
  address: {
    dis: "rajshahi",
    country: "bd",
  },
  products: ["laptop", "tablet"],
  revenue: 5000,
  isopen: true,
};

console.log(shop);
const stringified1 = JSON.stringify(shop);

console.log(stringified1);
// if we want to set previous value
const previousvalue = JSON.parse(stringified1);

console.log(previousvalue);
