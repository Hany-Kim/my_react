// 배열 내장 함수

let colors = ["green", "blue", "purple"];
colors.sort(); // 오름 차순

console.log(colors); // ['blue', 'green', 'purple']

const compare = (a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
};
colors.sort(compare);
console.log(colors); // ['purple', 'green', 'blue']

let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort();
console.log(numbers); // [1, 100, 120, 25, 3, 50] -> 수비교가 아닌, 사전 순으로 정렬됨

const compareNum1 = (a, b) => {
  return a - b;
};
numbers.sort(compareNum1);
console.log(numbers); // [1, 3, 25, 50, 100, 120] -> 수비교가 아닌, 사전 순으로 정렬됨

const compareNum2 = (a, b) => {
  return b - a;
};
numbers.sort(compareNum2);
console.log(numbers); // [120, 100, 50, 25, 3, 1] -> 수비교가 아닌, 사전 순으로 정렬됨
