//question 14
let guestlist:string[] = ["Imran", "Noureen","Shaheen"];

//Invite each guest for dinner
// for each Method

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, You are cordially invited to dinner`);
});



//Question 15


//map()
//Invite Guests
let invitation:string[] = guestlist.map( guest => `Dear ${guest}, You are cordially invited to dinner`)

console.log(invitation);


invitation.forEach(invitations => {
console.log(invitations);
});