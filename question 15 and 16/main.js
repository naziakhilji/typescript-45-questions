//Question 15
// guletestlist:string[] = ["Imran", "Noureen","Shaheen"];
var guestlist = ["Abdullah", "Maheen", "Hina"];
//print the name who cant make dinner
let unableAttend:string = guestlist.splice(1,1)[0];
console.log(`${unableAttend} cant make dinner`);    
//push
guestlist.push("Nazia");
//print a message
guestlist.forEach ( guest => {
console.log(`Dear ${guest},you are cordially invited`);
})





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
