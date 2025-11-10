// async와 await
// 프로미스 객체를 더욱 쉽게 사용할 수 있도록 도와줌

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3초가 지났습니다.");
    }, ms);
  });
};

// async와 await 사용
// async는 비동기를 사용할 함수의 오른쪽에 작성
// async를 사용하면 해당 함수는 항상 Promise객체를 반환
// await은 async함수를 작성한 내부에서 사용
const start = async () => {
  let result = await delay(3000);
  console.log(result);
};

start();
