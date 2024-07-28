//Question 37

//making a function
function make_Shirt (size: string = "large" , printMessage:string = "I love Typescript"){
    console.log (` creating a ${size} shirt with a ${printMessage} prints on shirt`)

}

//calling a function with by default values
make_Shirt();

//calling a function now with medium size and default message
make_Shirt("Medium")

//calling a function now with small size and also different print message.
make_Shirt("small", "I love javaScript")