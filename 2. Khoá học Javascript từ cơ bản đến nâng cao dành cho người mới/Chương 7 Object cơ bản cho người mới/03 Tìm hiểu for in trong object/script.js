let student = {
    name: "Evondev",
    age: 18,
    male: true,
};

for (let key in student) {
    if (key === "name") {
        console.log("Hello Name");
    }

    const value = student[key];
    console.log(`${key}:${student[key]}`);
}
