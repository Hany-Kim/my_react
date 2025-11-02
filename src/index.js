// rest (나머지 매개변수)
// 특정 부분들을 하나의 객체나 배열로 묶어줌.

const blueToy = {
  type: "bear",
  price: 15000,
  color: "blue",
};

// const { type, price, color } = blueToy;
const { type, ...rest } = blueToy;

// const { ...rest, type } = blueToy;
//  rest문법은 spread와 다르게 순서에 상관없이 여러번 작성할 수 없고
// 항상 맨 마지막에 작성해야 한다.

console.log(type);
// console.log(price);
// console.log(color);
console.log(rest); // {price: 15000, color: 'blue'}
