/* 
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string
4. '0', 'false'
5. {}
6. []


Falsy:
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
*/

let x = false;

if (x) {
  console.log("value of  x is truthy");
} else {
  console.log("value of x is falsy");
}

let y = false;

if (!y) {
  console.log(" y is truthy");
} else {
  console.log(" y is falsy");
}
