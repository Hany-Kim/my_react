// 원시 타입 자료형 - BigInt
// 2^53-1보다 크거나 -(2^53-1)보다 작은 값 = 숫자형으로 표현되지 않는 값

let bigNum1 = 9999999999999999999999999999n;
let bigNum2 = BigInt("9999999999999999999999999999");

console.log(typeof bigNum1); // bigint
console.log(typeof bigNum2); // bigint
