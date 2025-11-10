// 프로미스 객체
// 콜백 지옥

const workA = (value, callback) => {
  setTimeout(() => {
    callback(value + 5); // 인수로 전달받은 callback() 실행
  }, 5000);
};
const workB = (value, callback) => {
  setTimeout(() => {
    callback(value - 3);
  }, 3000);
};

const workC = (value, callback) => {
  setTimeout(() => {
    callback(value + 10);
  }, 10000);
};

// 콜백지옥
workA(10, (resA) => {
  console.log(`workA : ${resA}`);
  workB(resA, (resB) => {
    console.log(`workB : ${resB}`);
    workC(resB, (resC) => {
      console.log(`workC : ${resC}`);
    });
  });
});
// 이렇게 작성하면 여러 작업을 비동기로 처리하더라도 순서대로 처리할 수 있다.
// 비동기 함수의 특정 결과값을 다른 비동기  함수에서 활용할 수 있다.
