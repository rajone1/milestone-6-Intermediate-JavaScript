const student = {
  name: "Kolim Uddin",
  age: 15,
  class: "Ten",
  marks: {
    math: [12, 55, 23],
    physics: 89,
    chemistry: 65,
  },
};

const marks = student.marks;
const math = student.marks.math[1];
// console.log(math);

// or
const findmark = "physics";
const mark = student.marks.findmark;
const mark2 = student.marks[findmark];

console.log(mark);
console.log(mark2);

//  const chemistry = student['marks']['chemistry'];
//  const subject = 'math';
//  const subjectMarks = student.marks[subject];
//  const marks2 = student.marks[subject];
//  console.log(marks2);
