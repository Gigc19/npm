// js oop

const Person = function (fname, bYear) {
  this.firstName = fname;
  this.birthYear = bYear;
};
//prototype - არის მექანიზმი,რომელთაც ჯანასკრიპტის ობიექტები ერთმანეთისგან თვისებებს მემკვიდრეობენ.
Person.prototype.getAge = function () {
  console.log(2024 - this.birthYear);
};
const newObj1 = new Person("anna", 2004);
const newObj2 = new Person("nini", 1990);

console.log(newObj1);
console.log(newObj2);

newObj1.getAge();
newObj2.getAge();

// class oop
//class expression
// const PersonInfo = class {

// }
//class declaration
class PersonInfoNew {
  constructor(firstName2, birthYear2) {
    this.userFirstName = firstName2;
    this.userBirthYear = birthYear2;
  }
  printAge() {
    console.log(2024 - this.userBirthYear);
  }
}
const infoObj3 = new PersonInfoNew("luka", 2005);
console.log(infoObj3);

infoObj3.printAge();
