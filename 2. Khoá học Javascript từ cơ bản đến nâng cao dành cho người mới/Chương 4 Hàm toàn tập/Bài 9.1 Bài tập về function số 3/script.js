function findMax(a, b) {
    return Math.max(a, b);
}

function useCallBack(a, b, callback) {
    let max = findMax(a, b);
    callback(max);
}

function showMax(number) {
    console.log("Max number is " + number);
}

console.log(useCallBack(500, 1000, showMax));
