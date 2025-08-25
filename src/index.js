// 명시적 형 변환

let num1 = "15";
let num2 = 5;

console.log(num1 + num2); // 155
// JS는 +연산은 숫자형을 문자형으로 자동 변환한다.
// 나머지는 문자형을 숫자형으로 자동 변환한다.

console.log(parseInt(num1) + num2); // 20 -> 명시적 형 변환
