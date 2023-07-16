function anothorFunction() {
    let otherMessage = "hello";
    function sayHi() {
        console.log(otherMessage);
    }
    return sayHi;
}

let callFunc = anothorFunction(); // otherMessage is no longer accessible
callFunc();
