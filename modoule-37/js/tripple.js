// always use ===
// equal comparison doesnt work for non-primitive

const first = [1, 2, 3, 4, 5];
const second = [1, 2, 3, 4, 5];
// const second = first;

if (first == second) {
  console.log("values are equal");
} else {
  console.log("valus are not equal");
}
