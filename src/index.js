// 배열 내장 함수

let numbers = [1, 100, 25, 50];
let sum = 0;

// 누적합
numbers.forEach((elm) => {
  sum += elm;
});

console.log(sum); // 176

// acc : 콜백함수 반환값 누적
// cur : 현재 처리할 요소 값
// idx : 처리한 현재 요소의 인덱스
let reduceSum = numbers.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx);
  return acc + cur;
}, 0);

console.log(reduceSum); // 176

let reduceSum1 = numbers.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx);
  return acc + cur;
}, 10);

console.log(reduceSum1); // 186
