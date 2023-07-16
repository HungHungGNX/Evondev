// 1. Viết 1 function kiểm tra value có phải là object hay không
function isObject(value) {
    if (typeof value === "object" && !Array.isArray(value) && value != null) {
        return true;
    }
    return false;
}

console.log(isObject({}));
