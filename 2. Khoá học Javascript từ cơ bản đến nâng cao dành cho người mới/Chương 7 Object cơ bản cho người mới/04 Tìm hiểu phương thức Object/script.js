let student = {
    name: "Evondev",
    age: 18,
    male: true,
};

// Object.keys() -> trả về 1 mảng chứa tất cả các keys của object
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);
// Object.value(object) -> trả về 1 mảng chứa tất cả các giá trị cảu object
const values = Object.values(student);
console.log(values);
// Object.entries(object) -> trả về 1 mảng nested gồm key và value
const entries = Object.entries(student);
console.log(entries);
// Object.assign() gộp object
let a = {
    firstName: "Long",
};
let b = {
    lastName: "Hung",
};

let c = Object.assign(a, b);
console.log(c);
// hoặc gộp object bằng spread
const d = { ...a, ...b };
console.log(d);
// Object.freeze(object) -> ngăn chặn chỉnh sửa key và value của object
const car = {
    brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
console.log(newCar);
// Object.seal(object) -> Cho phép chỉnh sửa key value nhưng ko được thêm key và value mới
const user = {
    userName: "evondev",
};
const newUser = Object.seal(user);
newUser.userName = "tran anh tuan";
newUser.lastName = "john";
console.log(newUser);
