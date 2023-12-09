function find(name1, name2 = 0) {
  const add = name1 + name2;
  return add;
}

const newadd = find(12);
console.log(newadd);

//

function addname(add1, add2 = " ahommed") {
  const addall = add1 + " " + add2;
  return addall;
}

const nameadd = addname("shaon", "patoary");
console.log(nameadd);
