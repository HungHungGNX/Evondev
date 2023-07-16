const student = {
    name: "evondev",
    age: 27,
    male: true,
    hi: function () {
        console.log("hello evondev");
    },
};

// 2 cách truy xuất giá trị của object
// 2.1 Dot notation object.key
console.log(student.name);
// 2.2 Bracket notation ["key"]
console.log(student["age"]);
// Thay đổi giá trị Object
student.age = 20;
student.male = "male";
student.isDeveloper = true;
student["is-developer"] = false;
student.hello = function () {
    console.log("hello");
};
// Cách xóa giá trị trong Object
delete student["last-name"];
