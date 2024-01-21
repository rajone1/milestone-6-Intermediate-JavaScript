function kitchn() {
  let egg = 0;

  return function () {
    egg++;
    return egg;
  };
}
const cook = kitchn();

console.log(cook());
console.log(cook());
console.log(cook());
console.log(cook());
