var cars = 'subaru';
//test 1: Equality comparison (true)
console.log("Is car == 'subaru' ? I predict True.");
console.log(cars == 'subaru'); //true
//test 2 : strict equality  comparison (true)
console.log("Is car ===  'subaru'? I predict true.");
console.log(cars === 'subaru'); // true
//test 3 : Inequality  comparison (False)
console.log("Is car !=  'subaru'? I predict false.");
console.log(cars != 'subaru'); // false
//test 4 : strict Inequality  comparison (False)
console.log("Is car !==  'subaru'? I predict false.");
console.log(cars !== 'subaru'); // false
//test 5 : less than comparison (False)
console.log("Is car <  'subaru'? I predict false.");
console.log(cars < 'subaru'); // false (lexicographic comparison)
//test 6 : greater than comparison (False)
console.log("Is car >  'subaru'? I predict false.");
console.log(cars > 'subaru'); // false (lexicographic comparison)
//test 7 : less than or equal comparison (true)
console.log("Is car <=  'subaru'? I predict false.");
console.log(cars <= 'subaru'); // true
//test 8 : greater than or equal  comparison (true)
console.log("Is car >=  'subaru' ? I predict false.");
console.log(cars >= 'subaru'); // true
//test 9 : checking truthness (true)
console.log("Is car?   I predict true.");
console.log(!cars); // true (non-empty string is truthy)
//test 10 : checking falseness (false)
console.log("Is car?   I predict false.");
console.log(!cars); // false (negation of a truthy  value)
