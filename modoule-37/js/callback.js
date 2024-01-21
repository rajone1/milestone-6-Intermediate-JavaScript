function greeting(greetingHandler, name2) {
  //   console.log("hallo");
  greetingHandler(name2);
}
// const name = 'Halim mama';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};
function greetingHandler(name) {
  console.log("Good Morning", name);
}
function greetEvening(name3) {
  console.log("Good Evening", name3);
}

function greetNight(name4) {
  console.log("Good Night", name4);
}

greeting(greetingHandler, "shaon");
greeting(greetingHandler, "Tom Cruise");
greeting(greetEvening, "Tom Solaiman");
greeting(greetEvening, "Tom Salman");
greeting(greetNight, "Rasel");

// function submitHandler() {
//   console.log("submit button clicked");
// }
// document.getElementById("btn-submit").addEventListener("click", submitHandler);
