// 콜백 함수 : 다른 함수의 매개변수로 넘겨준 함수

const printResult = (a, b) => {
  let result = a + b;
  console.log("결과: " + result);
};
const doubleResult = (a, b) => {
  let result = a + b;
  console.log("결과에 2를 곱한 값: " + result * 2);
};

printResult(5, 3);
doubleResult(5, 3);
