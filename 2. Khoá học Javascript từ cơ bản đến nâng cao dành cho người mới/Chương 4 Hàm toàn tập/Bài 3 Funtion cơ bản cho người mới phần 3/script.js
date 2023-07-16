// Anonymous function (function expression)
// + Không bị hosting
// Function declaration
// + Bị hoisting

//Anonymous function
const logName = function () {
    console.log("your name:");
};

logName();

// IIFE -> immediately invoked function execution
(function () {
    console.log("This is IIFE function");
})();
