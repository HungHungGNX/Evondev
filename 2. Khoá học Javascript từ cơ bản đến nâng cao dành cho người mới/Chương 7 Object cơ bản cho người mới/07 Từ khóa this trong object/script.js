// Trong Javascript, "this" là một từ khóa đại diện cho đối tượng hiện tại mà phương thức hoặc hàm đang được thực thi trên.

// Giá trị của "this" thường phụ thuộc vào cách phương thức hoặc hàm được gọi và nó có thể được xác định bằng nhiều cách khác nhau, bao gồm:

// Trong phương thức của đối tượng, "this" được tham chiếu đến đối tượng chứa phương thức đó.
// Trong một hàm độc lập, giá trị của "this" sẽ được xác định bởi ngữ cảnh mà hàm được gọi.
// Trong một sự kiện (event) của HTML, "this" thường đại diện cho phần tử HTML được kích hoạt sự kiện đó.
// Cách mà "this" được xác định trong mỗi trường hợp khác nhau là rất quan trọng để hiểu khi làm việc với Javascript.

const student = {
    name: "evondev",
    age: 27,
    male: true,
    "last-name": "tuan",
    hi: function () {
        console.log(`my name is ${this.name} and i am ${this.age} years old`);
    },
};

student.hi();
