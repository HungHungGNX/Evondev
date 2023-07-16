// function with object parameter
function whatYourInfo(obj) {
    console.log(obj.name, obj.age, obj.school);
}

const newObject = {
    school: "Cao thang",
    age: 27,
    name: "evondev",
};

whatYourInfo(newObject);
// object destructuring parameter
function whatYourInfo2({ name, age, school }) {
    console.log(name, age, school);
}

whatYourInfo2({ name: "Tuan", age: 28, school: "Bach Khoa" });
