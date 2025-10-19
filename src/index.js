// 구조 분해 할당

let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};

// 일반 적인 객체 분해 할당
let c1 = colors.c1;
let c2 = colors.c2;
let c3 = colors.c3;

console.log(c1);
console.log(c2);
console.log(c3);

// 객체 구조 분해 할당 방법 1
let ncolors = {
  nc1: "green",
  nc2: "blue",
  nc3: "purple",
};

let { nc1, nc2, nc3 } = ncolors;

console.log(nc1);
console.log(nc2);
console.log(nc3);

// 객체 구조 분해 할당 2
// 객체 프로퍼티의 값을 할당하는 변수가 객체 프로퍼티의 키 값과 다를 때, 비구조 할당 사용
let { c1: color1, c2: color2, c3: color3 } = colors;

console.log(color1);
console.log(color2);
console.log(color3);

// 변수의 수가 객체 프로퍼티 수보다 많을 때, 기본값 설정
let nncolors = {
  nnc1: "green",
  nnc2: "blue",
  nnc3: "purple",
};
let { nnc1, nnc2, nnc3, nnc4 = "yellow" } = nncolors;

console.log(nnc1);
console.log(nnc2);
console.log(nnc3);
console.log(nnc4);
