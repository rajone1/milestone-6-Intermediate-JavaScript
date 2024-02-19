// let zz = "shaon";

// function a() {
//   console.log("a");
//   console.log(zz);
//   b();
//   console.log("aa");
// }

// function b() {
//   console.log("b");
//   c();
//   console.log("bb");
// }
// function c() {
//   console.log("c");
//   d();
//   console.log("cc");
// }
// function d() {
//   console.log("d");

//   console.log("dd");
// }

// setTimeout(() => {
//   console.log("time");
// }, 2000);
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// function x() {
//   console.log("x");
//   y();
//   console.log("xx");
// }
// function y() {
//   console.log("y");
//   console.log("yy");
// }

// a();

// x();

// 2222
// try catch use
const output = () => {
  const inputfilds = document.getElementById("inputfild");
  const inputfild2 = inputfilds.value;
  console.log(inputfild2);
  const errorShow = document.getElementById("errorshow");
  try {
    //     console.log(hhhhh);
    //     console.log("jjjjjjjjj");
    const age = parseInt(inputfild2);

    if (isNaN(age)) {
      throw "Enter number";
    } else if (age < 18) {
      //  console.log("fff");
      throw "bacca not allow";
    }

    //
    errorShow.innerHTML = "";
  } catch (error) {
    console.log("error:", error);
    errorShow.innerHTML = "some thing is wrong:" + error;
  } finally {
    console.log(" after use  try and catch");
  }
};

// output();
