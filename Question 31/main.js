//Question 31
var userNames = ["mahad", "usman", "zeeshan", "Admin", "Ali"];
userNames = [];
if (userNames.length === 0) {
    console.log("your array is empty we need to find some users!");
}
else {
    //using forEach loop on array method
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again"));
        }
    });
}
