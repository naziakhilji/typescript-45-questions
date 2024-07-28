var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making an Array of countries and prints itorignal order
var countriesTovisit = ["china", "Denmark", "Brazil", "Arjentina"];
console.log("orignal order:", countriesTovisit);
//print the array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", __spreadArray([], countriesTovisit, true).sort());
//show that the array is still in orignal order
console.log("still in orignal order:", countriesTovisit);
//print the Array in reversed order without modifying the actual list
console.log("Reverse order:", __spreadArray([], countriesTovisit, true).reverse());
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
