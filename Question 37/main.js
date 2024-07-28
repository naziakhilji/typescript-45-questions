//making a function
function make_Shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log(" creating a ".concat(size, " shirt with a ").concat(printMessage, " prints on shirt"));
}
//calling a function with by default values
make_Shirt();
//calling a function now with medium size and default message
make_Shirt("Medium");
//calling a function now with small size and also different print message.
make_Shirt("small", "I love javaScript");
