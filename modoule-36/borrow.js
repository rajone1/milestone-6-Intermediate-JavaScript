const tom = {
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

const jarry = {
  name: "human",
  money: 5000,
};

const borrow1 = tom.exam.call(jarry);
const borrow1add = tom.treat.call(jarry, 900, 100);
const borrow2 = tom.treat.apply(jarry, [900, 100]);

console.log(borrow1);
console.log(borrow1add);
console.log(borrow2);
