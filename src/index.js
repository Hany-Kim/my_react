// 화살표 함수 장점

// 익명 함수
const add1 = function (a, b) {
  return a + b;
};

// 화살표 함수 : 함수를 간단하게 작성할 수 있다는 장점이 있다.
const add2 = (a, b) => a + b;

console.log(add1(10, 20)); // 30
console.log(add2(10, 20)); // 30
