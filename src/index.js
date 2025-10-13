// 배열 내장 함수

let arr = [1, 2, 3, 4, 5];

// 기본 반복문
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for-each
// for-each 내장함수는 매개변수로 함수를 전달할 수 있다.
// 콜백 : 함수를 매개변수로 전달
// for-each 콜백함수에는 3가지 파라미터를 전달할 수 있다. => (CurrentValue, index, array)
// CurrentValue : 처리할 현재 요소를 매개변수로 전달.
// index : 실제 배열 요소의 순서
// array : 실제 배열 자체를 출력

arr.forEach((elm) => {
  console.log(elm);
});
// 출력
// 1
// 2
// 3
// 4
// 5

arr.forEach((elm, idx) => {
  console.log(`${idx}번째 요소는 ${elm}입니다.`);
});
// 출력
// 0번째 요소는 1입니다.
// 1번째 요소는 2입니다.
// 2번째 요소는 3입니다.
// 3번째 요소는 4입니다.
// 4번째 요소는 5입니다.

arr.forEach((elm, idx, array) => {
  console.log(`${idx}번째 요소는 ${elm}입니다.`);
  console.log(array);
});
// 출력
// 0번째 요소는 1입니다.
// [1, 2, 3, 4, 5]
// 1번째 요소는 2입니다.
// [1, 2, 3, 4, 5]
// 2번째 요소는 3입니다.
// [1, 2, 3, 4, 5]
// 3번째 요소는 4입니다.
// [1, 2, 3, 4, 5]
// 4번째 요소는 5입니다.
// [1, 2, 3, 4, 5]
