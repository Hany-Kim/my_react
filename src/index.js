// 동기와 비동기 - setTimeout() 내장 함수

const workA = () => {
  // 비동기
  setTimeout(() => {
    console.log("workA");
  }, 5000);
};

const workB = () => {
  // 비동기
  setTimeout(() => {
    console.log("workB");
  }, 3000);
};

const workC = () => {
  // 비동기
  setTimeout(() => {
    console.log("workC");
  }, 10000);
};

const workD = () => {
  // 동기
  console.log("workD");
};

workA();
workB();
workC();
workD();

// 출력 결과
// workD
// workB
// workA
// workC
