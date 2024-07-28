//Question 13
var transportationMode = ["car", "motor cycle", "bicycle", "bus"];
for (var i = 0; i < transportationMode.length; i++) {
    console.log("I would to own a ".concat(transportationMode[i]));
}
transportationMode.forEach(function (mode) {
    console.log("i would like to own ".concat(mode));
});
for (var _i = 0, transportationMode_1 = transportationMode; _i < transportationMode_1.length; _i++) {
    var mode = transportationMode_1[_i];
    console.log("i would like to own ".concat(mode));
}
