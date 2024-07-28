//Question 32
//Array of current user
let current_users = ["ali" ,"hamza", "sajid", "osama", "adnan"]

//Array of new user
let new_users = ["amad", "hamza", "sajid", "zoha","balban"]

//loop through new_users to check for username avalability

new_users.forEach(new_one_user => {

    //making a condition for username aleady exist and save in our condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    //print different message using if-else statement
    if(our_condition){
      console.log(`sorry ${new_one_user}is already taken!`)
    }else{
        console.log(`This username ${new_one_user}is available`)
        }
})

