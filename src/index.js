// 구조 분해 할당

// 값 바꾸기
let a = 10;
let b = 5;
let tmp;

tmp = a;
a = b;
b = tmp;

console.log(a, b); // 5 10

// 구조 분해를 통한 값 바꾸기
[a, b] = [b, a];

console.log(a, b); // 10 5
