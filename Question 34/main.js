//creating a Array
var pizza = ["chicken tikka", "malai boti", "fajita"];
//using for-loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("I like ".concat(onePizza, " pizza"));
    console.log("i eat pizza");
}
//print a message outside of the for-loop
console.log("pizza is love");
console.log("i eat pizza");
