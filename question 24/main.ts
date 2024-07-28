//Question 24

//test for equality and inequality with string

const string1 : string = "hello"
const string2 :string = "world"

console.log( string1 === string2); //false
console.log( string1 !== string2); //true

// tests using the lower case function

const upperCase : string = "HELLO";
const lowerCase : string = "hello";

console.log(upperCase.toLowerCase() === lowerCase); //true

//Numerical test involving equality and inequality. Greater  than and less than, or equal to, and less than or equal to.

const number1 : number = 10;
const number2 : number = 20;

console.log(number1 === number2); //false
console.log(number1 !== number2); //true
console.log(number1 > number2); //false


console.log(number1 < number2); //true
console.log(number1 >= number2); //false
console.log(number1 <= number2); //true

//tests using "and" and "or" operators
 
const x: number =10;
const y: number =20;
const z: number =30;

console.log( x < y &&  y < z); //true
console.log( x > y ||  y < z); //true

//test whether an item is in a array

const array1: number[] = [1, 2, 3 ,4, 5, 6];
const itemToFind : number = 3;

console.log(array1.indexOf(itemToFind) !== -1 ); //true


//test whether an item is not in array

console.log(array1.indexOf(10) === -1 ); //true







