//Quesion 30

//creating a array

let userNames = ["mahad", "usman", "zeeshan", "Admin", "Ali"];


//using forEach method
userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again`)
    }
});