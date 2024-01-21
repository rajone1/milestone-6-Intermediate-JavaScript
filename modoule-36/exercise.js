const nums = [12, 22, 33, 44, 55];
for (const num of nums) {
  //   console.log(num);
}

// old method not use
// const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };

// const key = Object.keys(bottle);

// for (const keys of key) {
//   console.log(keys);
// }

// new method
/* 
3 ways to read object properties
bottle.color 'ata dea key pabo'
bottle[key]  'ata dea key r value pabo'
bottle['color']
*/

const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };

for (const result in bottle) {
  const value = bottle[result];
  //   console.log(result, bottle[result]);
  console.log(result, ":", value);
}
