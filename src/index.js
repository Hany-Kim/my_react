// 객체의 속성 추가방법 : 점 표기법, 괄호 표기법

let cat = {
  age: 2,
};

cat.name = "야옹이";
cat["color"] = "white";

console.log(cat); // {age: 2, name: '야옹이', color: 'white'}

cat.age = 3; // -> 값 업데이트
cat["color"] = "black";
console.log(cat); // {age: 3, name: '야옹이', color: 'black'}

cat = {
  age: 2,
};
console.log(cat);

const cat1 = { age: 2, name: "야옹이", color: "white" };
cat1 = { age: 3, name: "야옹이", color: "black" }; // index.js:22 Uncaught TypeError: Assignment to constant variable. at index.js:22:6
// 객체는 let 또는 const로 초기화해도 프로퍼티 업데이트는 가능
