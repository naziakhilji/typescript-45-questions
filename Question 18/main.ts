
// Making an Array of countries and prints itorignal order
let countriesTovisit: string[] = ["china", "Denmark", "Brazil", "Arjentina"];
console.log("orignal order:", countriesTovisit);

//print the array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", [...countriesTovisit].sort());


//show that the array is still in orignal order
console.log("still in orignal order:", countriesTovisit);

//print the Array in reversed order without modifying the actual list
console.log("Reverse order:", [...countriesTovisit].reverse());


//show that the array is still in orignal order
console.log("still in orignal order:", countriesTovisit);

//we have change the orignal array order  now
console.log("orignal Array Reversed:", countriesTovisit.reverse());


//print th array to show that its back to its orignal order
console.log("back to orignal order:", countriesTovisit.reverse());

//print the Array to that its order has been changed in alphabatical order
console.log("sorted in alphabatical order:", countriesTovisit.sort());


//we have change again the orignal array order  now in reverse order again
console.log("orignal Array Reversed again:", countriesTovisit.reverse());
