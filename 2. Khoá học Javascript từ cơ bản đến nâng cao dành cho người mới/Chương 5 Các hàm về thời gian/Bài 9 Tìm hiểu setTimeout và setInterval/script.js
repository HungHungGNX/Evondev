// setTimeout and setInterval
setTimeout(function () {
    alert("call me after 3 seconds");
}, 1000);

const timer = setInterval(function () {
    console.log("call me");
}, 1000);
clearInterval(timer);
