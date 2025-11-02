// spread (확산, 퍼짐, 전파)
// : 특정 배열의 원소나 객체의 프로퍼티 값을 펼침
const toy = {
  type: "bear",
  price: 15000,
};

// 반복되는 프로퍼티 값이 많으면 번거로운 작업이 됨.
// const blueToy = {
//   type: 'bear',
//   price: 15000,
//   color: 'blue'
// }

// const yellowToy = {
//   type: 'bear',
//   price: 15000,
//   color: 'yellow'
// }

const blueToy = {
  ...toy,
  color: "blue",
};

const yellowToy = {
  ...toy,
  color: "yellow",
};

console.log(blueToy);
// 출력
// color
// :
// "blue"
// price
// :
// 15000
// type
// :
// "bear"
console.log(yellowToy);
// 출력
// color
// :
// "yellow"
// price
// :
// 15000
// type
// :
// "bear"
