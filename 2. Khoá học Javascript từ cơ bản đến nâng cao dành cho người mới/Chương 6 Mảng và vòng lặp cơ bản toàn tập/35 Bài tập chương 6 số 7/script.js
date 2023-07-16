// 7. Viết 1 function xử lý từ 1 mảng lớn thành nhiều mảng con dựa vào một số nguyên đầu vào. Ví dụ ([1,2,3,4,5],2) -> [[1,2],[3,4],[5]]

function splitArray(arr, number) {
    let result = [];
    for (let i = 0; i < arr.length; i = i + number) {
        result.push(arr.slice(i, i + number));
    }
    return result;
}

console.log(splitArray([1, 2, 3, 4, 5], 2));
