// 배열 내장 함수

let arr = [1, 2, 3, 4, 5];

// 배열 원소내의 값을 일괄적으로 바꿈
let newArray = [];

for (let i = 0; i < arr.length; i++) {
  newArray.push(arr[i] * 10);
}

console.log(newArray);
//[10, 20, 30, 40, 50]

// Map내장함수를 활용하면 위 과정이 간소화 된다.
let newArrayMap = arr.map((elm) => {
  return elm * 10;
});

console.log(newArrayMap);
// [10, 20, 30, 40, 50]
