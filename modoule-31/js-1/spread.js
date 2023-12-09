const max = Math.max(12, 13, 14, 100, 20);
console.log(max);

const array = [12, 13, 14, 500, 20];
const maxarray = Math.max(...array);
console.log(maxarray);
//

const array2 = [...array];
array.push(3333);
array2.push(9999);
// set array differnt value

console.log(array);
console.log(array2);
const array3 = [...array];
console.log(array3);
// add extra value
const array4 = [1, 2, ...array, 100, 300];
console.log(array4);
