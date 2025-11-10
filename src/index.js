const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workA");
    }, 5000);
  });
};

const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workB");
    }, 3000);
  });
};

const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workC");
    }, 10000);
  });
};

// 18초가 지나야 결과가 나옴
// const start = async () => {
//   try {
//     const resultA = await workA();
//     const resultB = await workB();
//     const resultC = await workC();
//     console.log(resultA);
//     console.log(resultB);
//     console.log(resultC);
//   } catch (e) {
//     console.log(e);
//   }
// };

// Promise all 각 작업을 병렬적으로 처리해 작업시간 단축
// 10초만에 끝남
// 모든 프로미스가 작업이 완료되고 결과 한번에 반환
// 하나라도 실패하면 실패, 모두 성공해야 성공
const start = async () => {
  try {
    const result = await Promise.all([workA(), workB(), workC()]);
    result.forEach((result) => console.log(result));
  } catch (e) {
    console.log(e);
  }
};

start();
