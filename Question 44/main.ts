

//Define a function with a rest parameter that accept items arguments representing our sandwitch
function makeSandwich(...items: string[]){

   
    console.log("/Making a sandwich with the following items: /n")
    
items.forEach(singleItem => console.log(singleItem));


console.log("/nNow Enjoy Sandwich");
}

// call the function 3 times with 3 different numbers of arguments

makeSandwich("Chicken" , "Cheese" , "Mayo", "Egg");

makeSandwich("Bread" , "Buttter");

makeSandwich("Bread","Chicken" , "Cheese" , "Mayo", "Egg", "Butter")