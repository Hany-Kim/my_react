// 프로미스 객체
// : JS에서 비동기 작업을 조금 더 편리하게 처리할 수 있음.
// : JS의 비동기 처리방식의 문제점인 콜백지옥을 해결하기 위해 프로미스 객체를 이용.

const executor = (resolve, reject) => {
  // executor는 작업처리의 성공여부에 따라
  // 성공 -> resolve 함수 호출
  setTimeout(() => {
    resolve("성공");
    reject("실패");
  }, 3000);
  // 실패 -> reject 함수 호출
};

const promise = new Promise(executor);

// 방법 1
// promise.then( 성공일 때, 실패일 때 );
promise.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
); // '성공' 출력

// 방법 2
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }); // '성공' 출력

console.log(promise);
