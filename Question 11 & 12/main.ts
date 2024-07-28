//Question 11
//Array
//Define an array of names

let names: string [] = ["Noureen", "Huma" , "umair", "imran" , "mushtaq"];

//Methods
// 1 loop
// for each
// for of loop

for (let i = 0; i < names.length;  i++) {
console.log(names[i]);
       }
//for each

names.forEach(friend => {
    console.log(friend)
});

//for of loop
for (let friendName of names) {
    console.log(friendName)
}


//Question 12
for (let i = 0; i < names.length;  i++) {
    console.log(`Hello, ${names}! how are you today?`);
      } 


//for each

names.forEach(friend => {
    console.log(`Hi, ${friend}! how are you today?`);
});

//for of loop
for (let friendName of names) {
    console.log(`Dear, ${friendName}! how are you?`);
}

