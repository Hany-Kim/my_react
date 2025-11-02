// rest (나머지 매개변수)
// 특정 부분들을 하나의 객체나 배열로 묶어줌.

const color = ["red", "orance", "yellow", "green"];
const [c1, c2, ...rest] = color;
console.log(c1, c2);
console.log(rest); // ['yellow', 'green']
