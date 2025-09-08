// 스코프 - 전역, 지역

let global = "나는 전역 변수입니다"; // 전역 스코프

function outerFunction() {
  let outer = "나는 외부 함수의 변수입니다."; // 지역 스코프

  function innerFunction() {
    let inner = "나는 내부 함수의 변수입니다."; // 지역 스코프
    console.log(global);
    console.log(outer);
    console.log(inner);
  }

  innerFunction();
  console.log(global);
  console.log(outer);
  console.log(inner); // Uncaught ReferenceError: inner is not defined at outerFunction (index.js:18:15) at index.js:21:1
}

outerFunction();
