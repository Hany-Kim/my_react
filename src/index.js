// null 병합 연산자
// A ?? B
// A가 null이거나 undefined인 경우 B반환
// A가 null과 undefined가 아닌 경우 A반환

let num1;
let num2 = 10;

console.log(num1 ?? 20); // 20, num1 = undefined
console.log(num2 ?? 20); // 10
