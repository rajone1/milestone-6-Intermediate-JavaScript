const promise1 = new Promise((resolve, reject) => {
  let rendomnum = Math.random() * 10;
  console.log(rendomnum);

  if (rendomnum < 5) {
    resolve(200);
  } else {
    reject("its rejected");
  }
  //   resolve(200);
});

promise1
  .then((res) => console.log(res + 50))
  .catch((err) => console.log("error:", err));

console.log(1);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 1000);

console.log(4);
console.log(5);

let time = 0;

const setIntervalid = setInterval(() => {
  console.log(time++);
  if (time === 5) {
    clearInterval(setIntervalid);
  }
}, 3000);
