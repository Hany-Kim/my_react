// 변수 호이스팅

//console.log(num1); // index.js:3 Uncaught ReferenceError: Cannot access 'num1' before initialization at index.js:3:13
// 함수 호이스팅과 다르게 선언부보다 호출이 먼저있을때, 오류가 발생한다.
//let num1 = 123;
/*
호이스팅이 발생하지 않아서 오류가 발생했다? → X

JS는 실제로 let키워드의 변수를 아래와 같이 해석한다.

let num1; → JS는 초기화되지 않은 let,const변수를 초기화되기 전까지 TDZ(Temporal Dead Zone)에 보관한다.
console.log(num2); -> 이 시점에 num1은 TDZ에 머물러 있다. 오류 발생 원인
num1 = 123;
*/

console.log(num2); // undefined
// var키워드를 사용한 변수에서는 undefined가 발생한다.
var num2 = 456;
/*
JS는 실제로 var키워드의 변수를 아래와 같이 해석한다.
var num2;
console.log(num2); -> 이 시점에 num2는 값이 초기화되지 않은 정의되지 않은 상태
num2 = 456;
*/

/*
var VS let / const

- var키워드는 변수가 초기화되지 않아도 선언시점에 메모리에 변수 공간을 할당한다.
- let / const 키워드는 변수가 초기화되기 전까지 선언시점에 메모리에 변수 공간을 할당받지 못한다.
*/
