//Define a function with a rest parameter that accept items arguments representing our sandwitch
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("/Making a sandwich with the following items: /n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("/nNow Enjoy Sandwich");
}
// call the function 3 times with 3 different numbers of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Buttter");
makeSandwich("Bread", "Chicken", "Cheese", "Mayo", "Egg", "Butter");
