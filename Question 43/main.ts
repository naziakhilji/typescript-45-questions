
//question 42
//define the function to show magicians names

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}


//function to make magicians great through .map() it will modify array
function make_great(magicians : string[]){
   return magicians.map(name => `The Great ${name}`);
    
}
//Define an array of magicians names
let magicians_names = ["harry potor", "Hamza", "Umair"];


 //making a copy of orignal array through .slice function

 let copy_magicians_names = magicians_names.slice();

 //modify the copied array to include "the great " with their names
 let copy_great_magicians = make_great(copy_magicians_names);

 //show both arrays orignal and copied

 //orignal
 show_magicians(magicians_names);

 //copied
 show_magicians(copy_great_magicians);

 //copied

