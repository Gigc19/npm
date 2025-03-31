import { burger } from "./burger.js";
burger();

const Person = function (fname, bYear) {
  this.firstName = fname;
  this.BirthYear = bYear;
};
Person.prototype.getAge = function () {
  console.log(2024 - this.BirthYear);
};
const newObj = new Person("anna", 2004);
console.log(newObj);
newObj.getAge();

class PersonInfoNew {
  constructor(fisrtName, birthYear) {
    this.userfirstname = fisrtName;
    this.userbirthYear = birthYear;
  }
  printAge() {
    console.log(2024 - this.userbirthYear);
  }
}

const infoobj = new PersonInfoNew("luka", 2005);
console.log(infoobj);
infoobj.printAge();

axios
  .get("http://localhost:3000/posts")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
