// 1. Cho 1 mảng các giá trị [1,2,3,4,5,6,6,6,7,8,7]. Viết một function trả về một mảng với các giá trị unique. Kết quả ở trên sẽ là [1,2,3,5,6,7]
function unique(arr) {
    if (!Array.isArray(arr)) return null;
    let result = [];
    arr.forEach((item) => {
        if (!result.includes(item)) {
            result.push(item);
        }
    });
    return result;
}

unique([1, 2, 3, 4, 5, 5, 5, 6, 7]);
