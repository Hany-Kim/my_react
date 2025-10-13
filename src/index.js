// 배열 내장 함수

// indexOf메서드 : 매개변수로 받은 요소가 배열의 몇번째에 있는지
// 배열의 요소값이 객체나 배열이면 못 찾음.

// findIndex : 배열의 요소 값이 객체라면, 어떤 요소가 배열의 몇번째인지 찾기 위해서
let colors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
];
console.log(colors.indexOf("blue", 1)); // -1

let idx = colors.findIndex((elm) => elm.color === "purple");
console.log(idx); // 2

colors.findIndex((elm, idx, array) =>
  console.log(`${idx} 번째 값은 id: ${elm.id}, color: ${elm.color}`)
);
// 출력
// 0 번째 값은 id: 1, color: green
// 1 번째 값은 id: 2, color: blue
// 2 번째 값은 id: 3, color: purple

colors.findIndex((elm, idx, array) => console.log(console.log(array)));
// 객체 출력
