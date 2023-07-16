const student = {
    first_name: "Hung",
    last_name: "Nguyen",
    school: {
        name: "Pham Van Dong",
        room: {
            id: "1001",
        },
    },
};

const student_clone = JSON.parse(JSON.stringify(student));
