/* 
 8 ways to get Undefine
1. variable that is not initialized will give undefined
2. function with no return 
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside of the index range 
7. deleting an element inside an array
8. set a value directly to undefined
*/

// 1
let first;
// console.log(first);

// 2
function a() {
  na = "shaon";
  //   return na;
}

const b = a();
// console.log(b);

// 3
function name2(a, b, c) {
  const value2 = a + b + c;
  console.log(a, b, c);
}
name2(5, 5);
// 4
function name1(a, b) {
  if (a > 0 || b > 0) {
    return;
  }
  return a + b;
}
const return1 = name1(5, -10);
console.log(return1);
// 5

const fifth = { id: 2, name: "ponchom", age: 40 };

console.log(fifth.id, fifth.address);

// 6
// delete sixth[1];
// slice()
// slice(start)
// slice(start, end)

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
const sixth = [4, 89, 87, 56, 54, 100, 500];
console.log(sixth[1], sixth[10]);
console.log(sixth.slice(2));
console.log(sixth.slice(2, 5));
console.log(sixth.splice(1));
// console.log(sixth);

//

const set = undefined;
// console.log(set);

// null
const set2 = null;
// console.log(set2);

//

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));

const months = ["Jan", "March", "April", "June"];
months.splice(1, 2, "Feb", "fe");
console.log(months);
