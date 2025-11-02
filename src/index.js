// 함수에서 spread, rest 모두 사용
const print = (a, b, c, d, e, f) => {
  console.log(a, b, c, d, e, f);
};
const numbers = [1, 2, 3, 4, 5, 6];
print(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]); // 1 2 3 4 5 6

// 매개변수가 늘어날수록 번거로워진다.
// spread는 인수로 많은 값을 넘겨줄 때 흔히 사용
print(...numbers); // 1 2 3 4 5 6

// numbers배열의 크기가 6개인것을 알고 있기 때문에, print() 파라미터로 6개 작성
// numbers배열의 크기가 바뀌면, print()에서 오류가 발생할 가능성이 있음.
// 매개변수가 많으면 하나하나 작성하기 번거로움
const print1 = (...rest) => {
  console.log(...rest);
};
print1(...numbers); // 1 2 3 4 5 6
