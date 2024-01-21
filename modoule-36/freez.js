const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
// const pair = Object.entries(bottle);
// console.log(pair);

console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isCleaned;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);

// ex
const bottle = {
  name: "water-bottle",
  price: 300,
  colour: "pink",
  isclean: true,
};

console.log(bottle);
const key = Object.keys(bottle);
const values2 = Object.values(bottle);
const all = Object.entries(bottle);
// console.log("key:", key, "value:", values2, "all:", all);
// const freeze = Object.freeze(bottle);
// const seal = Object.seal(bottle);
delete bottle.isclean;
bottle.name = "tank";
bottle.price = 500;
console.log(bottle);
