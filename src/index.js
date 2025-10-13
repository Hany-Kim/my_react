// 반복문 - for-in문
// 객체의 모든 프로퍼티 참조

let person = {
  name: "홍길동",
  age: 25,
  height: 180,
};

for (let key in person) {
  console.log(`key ${key}, value : ${person[key]}`);
}

// 출력
// key name, value : 홍길동
// key age, value : 25
// key height, value : 180
