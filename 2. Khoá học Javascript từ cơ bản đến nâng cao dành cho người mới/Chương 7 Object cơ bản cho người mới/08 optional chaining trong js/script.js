const student = {
    firstName: "Long",
    lastName: "Nguyen",
    class: {
        id: 18,
        name: "12A7",
    },
};

// Optional chaining là một tính năng mới được thêm vào trong phiên bản ECMAScript 2020 của Javascript. Nó cho phép bạn truy cập các thuộc tính hoặc phương thức của một đối tượng mà không cần kiểm tra xem đối tượng đó có tồn tại hay không.

// Ví dụ, trước khi optional chaining được hỗ trợ, để kiểm tra xem một thuộc tính tồn tại trong một đối tượng, bạn phải sử dụng một biểu thức kiểm tra như sau:

// if (obj && obj.prop1 && obj.prop1.prop2 && obj.prop1.prop2.method1) {
//     obj.prop1.prop2.method1();
//   }

// Nhưng với optional chaining, bạn có thể viết như sau:

// if (obj?.prop1?.prop2?.method1) {
//     obj.prop1.prop2.method1();
//   }
