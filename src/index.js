// 배열 내장 함수

// includes메서드 : 매개변수로 받은 요소를 배열이 포함하고 있는지 판별 후 boolean으로 반환
let colors = ["green", "blue", "purple"];
console.log(colors.includes("blue")); // true
console.log(colors.includes("red")); // false

// (찾을 값, 찾을 위치 시작 인덱스)
console.log(colors.includes("blue", 2)); // false
console.log(colors.includes("blue", 1)); // true
