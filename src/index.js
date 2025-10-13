// 배열 내장 함수

// indexOf메서드 : 매개변수로 받은 요소가 배열의 몇번째에 있는지
// 배열의 요소값이 객체나 배열이면 못 찾음.

let colors = ["green", "blue", "purple"];
console.log(colors.indexOf("purple")); // 2
console.log(colors.indexOf("yellow")); // -1

// (찾을 원소, 찾기 시작할 위치)
console.log(colors.indexOf("blue", 1)); // 1
console.log(colors.indexOf("blue", 2)); // -1

let colorsObj = [
  { id: 1, colors: "green" },
  { id: 2, colors: "blue" },
  { id: 3, colors: "purple" },
];
