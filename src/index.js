// 원시 타입 자료형 - 숫자형

let num1 = 125;
let num2 = 10.00012;

console.log(typeof num1); // number
console.log(typeof num2); // number

// Infinity
let num = Infinity; // 무한대
console.log(typeof num); // number

let inf = 100 / 0; // 어떤 수에 0을 나누면 무한대
console.log(inf); // Infinity

// NaN : Not a Number
let number = NaN;
console.log(typeof number); // number

let nan = "javascript" / 10;
console.log(nan); // NaN

// 잘못된 연산이라도 Infinity와 NaN으로 표시되기 때문에, JS의 숫자연산은 '안전하다'
