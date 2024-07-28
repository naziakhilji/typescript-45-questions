//Question 13
let transportationMode: string[] = ["car","motor cycle","bicycle","bus"];
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would to own a ${transportationMode[i]}`);

}
 transportationMode.forEach(mode => {
       console.log(`i would like to own ${mode}`);

});
for (const mode of transportationMode
) {
    console.log(`i would like to own ${mode}`);
}