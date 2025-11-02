// spread (확산, 퍼짐, 전파)
// : 특정 배열의 원소나 객체의 프로퍼티 값을 펼침
const color1 = ["red", "orance", "yellow"];
const color2 = ["blue", "navy", "purple"];

const rainbow = [...color1, "green", ...color2];

console.log(rainbow); // ['red', 'orance', 'yellow', 'green', 'blue', 'navy', 'purple']
