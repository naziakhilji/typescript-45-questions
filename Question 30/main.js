//creating a array
var userNames = ["mahad", "usman", "zeeshan", "Admin", "Ali"];
//using forEach method
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again"));
    }
});
