// Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
//Calling a function with by-default values
make_shirt();
// Calling a function now with Medium size and default message
make_shirt("Medium");
// Calling a functio now with Small size and also Diffirent print Message
make_shirt("Small", "I Love JawaScript");
