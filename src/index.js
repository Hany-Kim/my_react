// 배열 내장 함수

let a = Array.isArray([1, 100, 50]); // true
let b = Array.isArray([{ id: 1, color: "green" }]); // true
let c = Array.isArray("string"); // false
let d = Array.isArray(undefined); // false

console.log(a, b, c, d);
