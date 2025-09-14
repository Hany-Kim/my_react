// 객체의 속성 사용방법 : 점 표기법, 괄호 표기법
let car = {
  name: "붕붕",
  model: "morning",
  color: "black",
};

// 점 표기법
console.log(car.name);
console.log(car.color);

// 괄호 표기법
console.log(car["name"]);
console.log(car["color"]);

const getValue = (key) => {
  console.log(car[key]);
};
getValue("color");
