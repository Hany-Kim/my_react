// 콜백 함수 : 다른 함수의 매개변수로 넘겨준 함수

const testFunc = (callback) => {
  callback();
};

testFunc(() => {
  console.log("콜백 함수 테스트");
});

testFunc(function () {
  console.log("콜백 함수 테스트");
});
