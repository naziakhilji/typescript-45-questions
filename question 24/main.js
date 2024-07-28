//Question 24
//test for equality and inequality with string
var string1 = "hello";
var string2 = "world";
console.log(string1 === string2); //false
console.log(string1 !== string2); //true
// tests using the lower case function
var upperCase = "HELLO";
var lowerCase = "hello";
console.log(upperCase.toLowerCase() === lowerCase); //true
//Numerical test involving equality and inequality. Greater  than and less than, or equal to, and less than or equal to.
var number1 = 10;
var number2 = 20;
console.log(number1 === number2); //false
console.log(number1 !== number2); //true
console.log(number1 > number2); //false
console.log(number1 < number2); //true
console.log(number1 >= number2); //false
console.log(number1 <= number2); //true
//tests using "and" and "or" operators
var x = 10;
var y = 20;
var z = 30;
console.log(x < y && y < z); //true
console.log(x > y || y < z); //true
//test whether an item is in a array
var array1 = [1, 2, 3, 4, 5, 6];
var itemToFind = 3;
console.log(array1.indexOf(itemToFind) !== -1); //true
//test whether an item is not in array
console.log(array1.indexOf(10) === -1); //true
