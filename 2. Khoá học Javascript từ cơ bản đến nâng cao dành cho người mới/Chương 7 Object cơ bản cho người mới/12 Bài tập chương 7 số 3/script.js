// 3. ({a: 1, b: 2}, 'b') => {a: 1}
function without(object, ...key) {
    // spread operator
    const newObject = { ...object };
    key.forEach((item) => {
        delete newObject[item];
    });
    return newObject;
}

console.log(without({ a: 1, b: 2 }, "b"));
