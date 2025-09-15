// 반복문 - 객체 탐색

let person = {
  name: "홍길동",
  age: 25,
  height: 180,
};

// Object.keys(person) : 객체의 key값을 배열형태로 반환
console.log(Object.keys(person));

let newArray = Object.keys(person);
for (let i = 0; i < newArray.length; i++) {
  let nowKey = newArray[i];
  console.log(`key: ${nowKey}, value: ${person[nowKey]}`);
}
