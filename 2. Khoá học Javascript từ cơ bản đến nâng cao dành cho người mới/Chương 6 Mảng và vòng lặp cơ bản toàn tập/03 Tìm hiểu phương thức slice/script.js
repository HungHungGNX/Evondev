// Tạo ra mảng copy của mảng ban đầu
console.log("-----------array.slice-----------");
const animals = ["tiger", "lion", "horse", "elephant"];
// slice (): Tạo ra mảng mới y hệt mảng ban đầu
const animals2 = animals.slice();
// slice (start): Từ vị trí start đến cuối mảng
const animals3 = animals.slice(1);
// slice (start,end): Từ vị trí start đến end - 1
const animals4 = animals.slice(1, 4);
// slice(số âm): Từ số âm đến cuối mảng
const animals5 = animals.slice(-3);
