// syntactic sugar
class Instructorlist {
  name;
  designation = "Web Course Instructor";
  team = "web team";
  location;
  constructor(name1, location1) {
    this.name = name1;
    this.location = location1;
  }
  startSupportSession(time) {
    console.log(`start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`please create quiz for module ${module}`);
  }
}

const ammi = new Instructorlist();
console.log(ammi);

ammi.startSupportSession(10.0);
ammi.createQuiz("100 module");
//
const solaiman = new Instructorlist("Solaiman Khan", "dhaka");
console.log(solaiman);
