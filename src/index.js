// 객체의 속성 삭제방법 : 점 표기법, 괄호 표기법

const cat = { age: 2, name: "야옹이", color: "white" };
delete cat.color;
delete cat["age"];

console.log(cat); // {name: '야옹이'}

const person = {
  name: "홍길동",
  age: 23,
  print: function () {
    console.log("제 이름은 ${this.name}입니다. ");
  },
};

person.print();
person["print"]();
