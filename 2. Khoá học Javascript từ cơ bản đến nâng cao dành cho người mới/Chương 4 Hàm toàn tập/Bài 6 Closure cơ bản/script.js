// Closure
// Function con có thể truy xuất scope của function cha

function sayHello() {
    let message = "Hi";
    // inner function
    function sayHi() {
        console.log(message);
    }

    return sayHi;
}

let hello = sayHello();
hello();

function showMessage(message) {
    return function (name) {
        console.log(`${message} ${name}`);
    };
}

let myMessage = showMessage("My name is ");
myMessage("Hung");
