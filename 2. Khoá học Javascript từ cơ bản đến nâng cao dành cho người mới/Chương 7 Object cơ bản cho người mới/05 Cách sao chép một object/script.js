// Cách clone một object
const user = {
    userName: "evondev",
};
// Cách 1: Sử dụng spread operator
const newUser = { ...user };
newUser.userName = "tran anh tuan";
console.log(user);
console.log(newUser);
// Cách 2: Sử dụng Object.assign
const newUser2 = Object.assign({}, user);
