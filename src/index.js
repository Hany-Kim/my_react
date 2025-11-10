// async와 await
// 프로미스 객체를 더욱 쉽게 사용할 수 있도록 도와줌

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3초가 지났습니다.");
    }, ms);
  });
};

// async와 await 사용 X
const start = () => {
  delay(3000).then((result) => {
    console.log(result);
  });
};

start();
