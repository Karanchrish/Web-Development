console.log('ADDING AN ELEMENT')
var array = ['Red','Yellow','Green'];
console.log(array);
array.unshift('Pink');
console.log(array);
array.push('Black');
console.log(array);
array.splice(3,0,'White')
console.log(array);
console.log('DELETING AN ELEMENT')
var array = ['Red','Pink','Green','Yellow','Blue'];
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);
console.log('SORTING AN ELEMENT')
var num = [2,5,7,1];
num.sort();
console.log(num);
num.reverse();
console.log(num);

////////////////////////////////////////////////

var text1 = 'hello';
var text2 = 'world';
var text3 = ' JavaScript ';
//String to uppercase//
const result1 = text1.toUpperCase();
console.log(result1); 
//Remove white space from the string//
const result2 = text3.trim();
console.log(result2); 
//Convert string into an array//
const result3 = text1.split();
console.log(result3); 
//Slicing//
const result4 = text1.slice(1, 3);
console.log(result4); 

////////////////////////////////////////////////

//DECLARING AN OBJECT AND DELETING ONE PROPERTY
var student={
  name : "Karan Chrish",
  age : 18,
 gender :"Male"
};    
delete student.age;
console.log(student.age);    
console.log(student);

/////////////////////////////////////////////////

 //NESTED OBJECT CONCEPT//
 const student = {
  name:'Karan',
  age: 20,
  marks:{
      Science: 97,
      Maths: 98
}
}
console.log(student.marks);
console.log(student.marks.Science);

///////////////////////////////////////////////

//NUMBER IS PRIME OR NOT//
function test_prime(n)
{
if (n===1)
{
return false;
}
else if(n === 2)
{
return true;
}else
{
for(var x = 2; x<n; x++)
{
if(n % x === 0)
{
return false;
}
}
return true;
}
}
console.log(test_prime(37));

// true