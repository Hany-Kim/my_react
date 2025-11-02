// 비동기 - setTimeout() 내장 함수

// setTimeout(() => {}, delayTime) -> (콜백함수, 지연시간)
setTimeout(() => {
  console.log("비동기");
}, 3000);

console.log("종료");

// 출력 결과
// 종료
// 비동기

setTimeout(() => {
  console.log("비동기");
  console.log("종료");
}, 3000);

// 출력 결과
// 비동기
// 종료

// ---------------
// '비동기'를 출력하는 함수(setTimeout)가 하나의 함수(work)로 이루어져 있다면
// '종료'를 출력하는 함수는 work함수에 콜백함수로 전달해 비동기롤 작업을 수행할 수 있다.
const work = (callback) => {
  setTimeout(() => {
    console.log("비동기");
    callback();
  }, 3000);
};

work(() => {
  console.log("종료");
});

// 출력 결과
// 비동기
// 종료
