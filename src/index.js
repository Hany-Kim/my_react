// 생성자 함수
// 특징 : new 키워드를 사용항

let obj = new Object();
let arr = new Array();

// 생성자함수는 일반적으로 동일한 구조의 여러 객체를 쉽게 생성하기 위해 사용
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayHi = function () {
    console.log("안녕하세요! " + this.name + "입니다.");
  };
}

const person1 = new Person("홍길동", 30, "Manager");
const person2 = new Person("김철수", 25, "Designer");

console.log(person1.name);
console.log(person2.age);
person1.sayHi();
person2.sayHi();
