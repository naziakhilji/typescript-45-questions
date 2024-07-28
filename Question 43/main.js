//question 42
//define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magicians names
var magicians_names = ["harry potor", "Hamza", "Umair"];
//making a copy of orignal array through .slice function
var copy_magicians_names = magicians_names.slice();
//modify the copied array to include "the great " with their names
var copy_great_magicians = make_great(copy_magicians_names);
//show both arrays orignal and copied
//orignal
show_magicians(magicians_names);
//copied
show_magicians(copy_great_magicians);
//copied
