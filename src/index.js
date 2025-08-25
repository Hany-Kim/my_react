// 비교 연산자
// 일치 : ===, ==

let num1 = 10;
let num2 = "10";

console.log(num1 === num2); // false, 자료형까지 비교
console.log(num1 == num2); // true, 형 비교 x 값만 비교 o

// 불일치 : !==, !=
console.log(num1 !== num2); // true, 자료형까지 비교
console.log(num1 != num2); // false, 형 비교 x 값만 비교 o

// 대소 비교 : <, >, <=, >=
let a = 10;
let b = 20;
let c = 10;

console.log(a < b); // true
console.log(a > b); // false
console.log(a <= b); // true
console.log(a >= b); // false
