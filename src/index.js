// 스코프 - 전역, 지역

let globalNum = 100; // 전역 스코프

function testFunc() {
  let innerNum = 50; // 지역 스코프
  console.log(globalNum);
  console.log(innerNum);
}

testFunc();
console.log(globalNum);
console.log(innerNum); // Uncaught ReferenceError: innerNum is not defined at index.js:13:13
