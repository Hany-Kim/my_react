// 반복문 - 객체 탐색

let person = {
  name: "홍길동",
  age: 25,
  height: 180,
};

// Object.values(person) : 객체의 value값을 배열형태로 반환
console.log(Object.values(person));

let newArray = Object.values(person);
for (let i = 0; i < newArray.length; i++) {
  let nowValue = newArray[i];
  console.log(`value: ${nowValue}`);
}
