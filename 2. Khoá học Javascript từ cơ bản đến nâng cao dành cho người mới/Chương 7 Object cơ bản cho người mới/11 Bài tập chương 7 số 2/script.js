// 2. {a: 1,b: 2} -> [["a",1], ["b",2]]
const isObject = function (object) {
    if (
        typeof object === "object" &&
        !Array.isArray(object) &&
        object != null
    ) {
        return true;
    }

    return false;
};
const objectToArray = function (obj) {
    // Cách 1
    // return Object.entries(obj);
    // Cách 2
    // return Object.keys(obj).map((key) => {
    //     return [key, obj[key]];
    // });
    // Cách 3
    let result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push([key, obj[key]]);
        }
    }
    return result;
};
