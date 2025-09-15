// 생성자 함수
// 특징 : new 키워드를 사용항

let obj = new Object();
let arr = new Array();

const person1 = {
  name: "홍길동",
  age: 30,
  job: "Manager",
  sayHi: function () {
    console.log("안녕하세요! " + this.name + "입니다.");
  },
};
const person2 = {
  name: "김철수",
  age: 25,
  job: "Designer",
  sayHi: function () {
    console.log("안녕하세요! " + this.name + "입니다.");
  },
};
console.log(person1.name);
console.log(person2.age);
person1.sayHi();
person2.sayHi();
