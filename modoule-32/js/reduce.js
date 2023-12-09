// map, forEach, filter, find, reduce

// .reduce (accumulatorFunction, initial value)
// accumulatorFunction use two parameters

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// reduce add all array value one by one
// const addall = array.reduce(
//   (previousvalue, currentvalue) => previousvalue + currentvalue,
//   0
// );

// console.log(addall);

// or

const addall = array.reduce((previousvalue, currentvalue) => {
  console.log(previousvalue, currentvalue);

  return previousvalue + currentvalue;
}, 0);

console.log(addall);
