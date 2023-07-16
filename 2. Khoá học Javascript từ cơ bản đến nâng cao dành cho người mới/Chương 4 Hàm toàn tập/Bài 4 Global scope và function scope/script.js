let myName = "evondev"; // global scope

function logYourName() {
    let myName2 = myName; // function scope
    console.log(myName2);
}

logYourName();
