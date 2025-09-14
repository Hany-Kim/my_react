// 함수 선언식 vs 함수 표현식 - 호이스팅

// 함수 선언식 : 호이스팅으로 정상 동작
hoisted1();

function hoisted1() {
  console.log("hoisting");
} // hoisting 출력

// 함수 표현식 : hoisted2라는 변수에 함수를 할당하는 형태, const 변수의 경우 선언시점에 TDZ에 올라가 있기때문에, 호이스팅되지 않는다.
hoisted2(); // index.js:11 Uncaught ReferenceError: Cannot access 'hoisted2' before initialization at index.js:11:1

const hoisted2 = function () {
  console.log("hoisting");
};
