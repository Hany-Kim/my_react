// 반복문 - 객체 탐색

let person = {
  name: "홍길동",
  age: 25,
  height: 180,
};

// Object.entries(person) : 객체의 key와 value 쌍을 배열형태로 반환
console.log(Object.entries(person));

let newArray = Object.entries(person);
for (let i = 0; i < newArray.length; i++) {
  console.log(`key: ${newArray[i][0]}, value: ${newArray[i][1]}`);
}
