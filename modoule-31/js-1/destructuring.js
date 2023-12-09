const fish = {
  name: "King Hilsa",
  address: "Chandpur",
  color: "silver",
  phone: "017176588899",
  price: 4000,
};

const { price } = fish;
console.log(price);

const { age, name1 } = { name1: "Almas", age: 56, profession: "makeup artist" };

console.log(name1);
// array destructuring
const [first, another] = [44, 99, 88, 456];
console.log(first, another);
//

function getNames() {
  return ["Alim", "Halim"];
}

const [baba, chacha] = getNames();
console.log(chacha, baba);
