//To create multiple objects of same properties using constructor function//

function Person () {
  this.name = 'xyz',
  this.age = 19,
  this.place="aaa",
  this.gender="Male"
}
var person1 = new Person();
var person2 = new Person();
console.log("Hello " + person1.name);  
console.log(person2.name);  
console.log(person1.name+" "+"from"+" "+person1.place);

////////////////////////////////////////////////////////////////

//Passing parameters in a constructor function //
function Person (person_name, person_age, person_gender) {
  this.name = person_name,
   this.age = person_age,
   this.gender = person_gender
}
var person1 = new Person('xx', 18, 'Male');
var person2 = new Person('yy', 18, 'Male');
console.log("Hello"+" "+person1.name); 
console.log(person2.name);  

/////////////////////////////////////////////////////////////

//Adding a new property in constructor function and inheriting the property values//
function Person () {
  this.name = 'xyz',
  this.age = 18
}
person1 = new Person();
person2 = new Person();
person2.name="zyx";
Person.prototype.gender = 'Male';
Person.prototype.place="aaa";
console.log(Person.prototype);
console.log(Person);
console.log(person1.gender);
console.log(person2.name+" "+"from"+" "+person2.place);

//////////////////////////////////////////////////////////

//Javascript prototype chaining//
function Person() {
  this.name = "xyz"
}
Person.prototype.name = 'zyx';
Person.prototype.age = 18;
const person1 = new Person();
console.log(person1.name); 
console.log(person1.age);

////////////////////////////////////////////////////////////

// Changing Prototype//
function Person() {
  this.name = 'xyz'
}
Person.prototype.age = 18;
Person.prototype.gender = "Male";
person1 = new Person();
person2 = new Person();
console.log(person1.name);
console.log(person2.age+" "+person2.gender);
Person.prototype = { age: 30 ,gender: "Female" }
console.log(Person.prototype);
person1.name="zyx";
person3 = new Person();
person4 = new Person();
console.log(person1.name+" "+person3.gender); 
console.log(person4.name+" "+person4.age);