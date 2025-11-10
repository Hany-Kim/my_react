// 프로미스 객체
// 콜백 지옥

const workA = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  });
  return promise;
};
const workB = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 3000);
  });
  return promise;
};

const workC = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });
  return promise;
};

// 프로미스 객체를 사용했지만 여전히 콜백지옥 형태와 유사
workA(10).then((resA) => {
  console.log(`workA : ${resA}`);
  workB(resA).then((resB) => {
    console.log(`workB : ${resB}`);
    workC(resB).then((resC) => {
      console.log(`workC : ${resC}`);
    });
  });
});
