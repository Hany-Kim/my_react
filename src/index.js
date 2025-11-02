// 동기
// 함수가 순차적으로 실행됨

const workA = () => {
  console.log("workA");
};
const workB = () => {
  console.log("workB");
};
const workC = () => {
  console.log("workC");
};

workA();
workB();
workC();
