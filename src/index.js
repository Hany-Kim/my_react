// 구조 분해 할당
// : 배열이나 객체의 요소 및 프로퍼티들을 분해해,
// 그 값들을 각각의 변수에 할당하는 JS표현식

let colors = ["green", "blue", "purple"];

// 일반적인 구조 분해 방법
let c1 = colors[0];
let c2 = colors[1];
let c3 = colors[2];

console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple

// 구조 분해 표현식을 통한 분해 방법 1
let [nc1, nc2, nc3] = colors; // 구조 분해 할당

console.log(nc1); // green
console.log(nc2); // blue
console.log(nc3); // purple

// 구조 분해 표현식을 통한 분해 방법 2
let nnc1, nnc2, nnc3;
[nnc1, nnc2, nnc3] = ["green", "blue", "purple"]; // 선언 분리 할당

console.log(nnc1); // green
console.log(nnc2); // blue
console.log(nnc3); // purple

// 배열의 길이가 더 적을 때
let nnc11, nnc22;
[nnc11, nnc22] = ["green", "blue", "purple"]; // 선언 분리 할당

console.log(nnc11); // green
console.log(nnc22); // blue

// 배열의 길이가 더 길 때
let a1, a2, a3, a4;
[a1, a2, a3, a4] = ["green", "blue", "purple"]; // 선언 분리 할당

console.log(a1); // green
console.log(a2); // blue
console.log(a3); // purple
console.log(a4); // undefined

// 배열의 길이가 더 길 때
let b1, b2, b3, b4;
[b1, b2, b3, b4 = "yellow"] = ["green", "blue", "purple"]; // 선언 분리 할당
// 변수에 기본값을 할당하면, 해당 변구사 undefined일 때, 기본 값이 할당됨.

console.log(b1); // green
console.log(b2); // blue
console.log(b3); // purple
console.log(b4); // yellow
