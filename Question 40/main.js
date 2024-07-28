//Question 40
//define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three functions and creating 3 variables with different values
var album1 = make_album("hamza", "Album title 1");
var album2 = make_album("Umair", "Album title 2");
//calling a make_album function with third parameter
var album3 = make_album("Huma", "Album title 3", 10);
//printing values of our object created by function
console.log(album1);
console.log(album2);
console.log(album3);
