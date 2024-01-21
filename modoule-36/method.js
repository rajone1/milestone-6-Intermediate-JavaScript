// const myinfo = {
//   name: "shaon",
//   money: 10000,
//   age: 30,
//   study: "finance",
//   subject: ["math", "english", "java script"],

//   exam: function () {
//     console.log(this.name, "is a best web Developer");
//   },
// };
// myinfo.exam();

// use return
// object r moddha function value set korta hola this. use korta hoba

const myinfo = {
  name: "shaon",
  money: 10000,
  age: 30,
  study: "finance",
  subject: ["math", "english", "java script"],

  exam: function () {
    return this.name + " is the best weab developer";
  },

  improve: function (sub) {
    //     this.exam();
    return `${this.name} want to improve ${sub}`;
  },

  treat: function (treat, tip) {
    this.money = this.money - treat - tip;
    return this.money;
  },
};

const exam1 = myinfo.exam();
// console.log(exam1);
const improvement = myinfo.improve("bangla");
// console.log(improvement);
const restmoney = myinfo.treat(1900, 100);
console.log(restmoney);
