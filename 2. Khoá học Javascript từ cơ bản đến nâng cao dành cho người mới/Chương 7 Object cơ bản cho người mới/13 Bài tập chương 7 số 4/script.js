// So sánh 2 objects
function isEqualObject(obj1, obj2) {
    const objkey1 = Object.keys(obj1);
    const objkey2 = Object.keys(obj2);
    if (objkey1.length != objkey2.length) return false;
    const result = object1.every((key) => obj1[key] === obj2[key]);
    return result;
}

console.log(isEqualObject({ a: 1 }, { a: 1, b: 2 }));
