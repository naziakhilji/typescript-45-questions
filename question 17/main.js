//Question 15
// guletestlist:string[] = ["Imran", "Noureen","Shaheen"];
var guestlist = ["Abdullah", "Maheen", "Hina"];
//print the name who cant make dinner
var unableAttend = guestlist.splice(1, 1)[0];
console.log("".concat(unableAttend, " cant make dinner"));
//push
guestlist.push("Nazia");
//print a message
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you are cordially invited"));
});
// Question 16
//let guestlist:string[] = ["Abdullah", "Maheen", "Hina"];
console.log("Great News! we found a bigger table");
// add something in beggining at Array
//unshift() method
guestlist.unshift("hammad");
//splice()
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Nouman");
//push(),
guestlist.push("cheetah");
console.log(guestlist);
//foreach
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you all are cardially invited to dinner"));
});
// Question 17
//inform that only two guests can be invited
console.log("unfortunatily! the new dinner table wont arrive on time, so i can only invite two guest to dinner with me");
//using while loop to remove guest from the Array untill onl two names remain.
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
//Sending invitation to the last to guest on the list.
console.log("invitation to the last two guests");
guestlist.forEach(function (lasttwo) { return console.log("luckily ".concat(lasttwo, ", you are still invited to the dinner")); });
//removing last two guest from the list
guestlist.pop();
guestlist.pop();
console.log("Empty list", guestlist);
