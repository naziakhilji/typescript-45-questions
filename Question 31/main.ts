//Question 31
//creating arrray with 5 values
let userNames = ["mahad", "usman", "zeeshan", "Admin", "Ali"];

//remove all values from our array now our array is empty
userNames = []

//if statement for cheking length of our Array is empty?
if(userNames.length === 0){
console.log("your array is empty we need to find some users!")
}else{
//If array is not empty using forEach loop on array method
userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again`)
    }
})
}