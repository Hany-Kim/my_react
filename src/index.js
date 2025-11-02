// rest (나머지 매개변수)
// 특정 부분들을 하나의 객체나 배열로 묶어줌.

// 함수에서 사용 법
const print = (a, b, c, d, e, f) => {
  console.log([c, d, e, f]); // [3, 4, 5, 6]
};

print(1, 2, 3, 4, 5, 6);

// 더 많은 매개변수를 받아야 한다면?
const print1 = (a, b, ...rest) => {
  console.log([a, b, rest]);
  // 0: 1
  // 1: 2
  // 2: (4) [3, 4, 5, 6]
};
print1(1, 2, 3, 4, 5, 6);
