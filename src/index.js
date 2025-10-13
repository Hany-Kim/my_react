// 배열 내장 함수
// 배열에서 특정 조건을 만족하는 값들만 추철 (필터링)

let colors = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
];

let filterArray = colors.filter((elm, idx, arrya) => elm.id > 1);
console.log(filterArray); // { id: 2, color: "blue" }, { id: 3, color: "purple" }
