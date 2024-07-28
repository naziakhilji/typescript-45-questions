//question 14
var guestlist = ["Imran", "Noureen", "Shaheen"];
//Invite each guest for dinner
// for each Method
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are cordially invited to dinner"));
});
//Question 15
//map()
//Invite Guests
var invitation = guestlist.map(function (guest) { return "Dear ".concat(guest, ", You are cordially invited to dinner"); });
console.log(invitation);
invitation.forEach(function (invitations) {
    console.log(invitations);
});
