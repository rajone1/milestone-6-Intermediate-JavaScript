// 1. create object using object literals
const player = {};
player.name = "Small Nirob";
player.specialty = "batsman";
player.bat = function () {
  console.log("swing your bat");
};
// console.log(player);
// player.bat();

// normal object

// const s = {
//   a: 23,
//   b: 23,
//   c: 23,
// };
// console.log(s);

// 2 use class es6 method

class Person {
  name = "abul";
  address = "sodor ghat";
  constructor(age, id) {
    this.allage = age;
    this.allid = id;
  }
}

const person1 = new Person(56, 101);
const person2 = new Person(50, 102);

console.log(person1);
console.log(person2);
