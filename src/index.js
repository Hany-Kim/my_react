// 배열 내장 함수

// find 메서드 : 찾아낸 값의 인덱스가 아닌, 값 그자체를 리턴

let colors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
];

let idx = colors.find((elm) => elm.color === "purple");

console.log(idx); // {id: 3, color: 'purple'}
