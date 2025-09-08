// 함수 스코프

// let : 블록스코프
// var : 함수스코프

/*
let num = 10;
let num = 100; // 오류

console.log(num);
*/

var num = 10;
var num = 100;

console.log(num); // 100 출력
/*
var 키워드
- 같은 이름의 변수를 여러번 사용 가능, 기존에 선언된 동일한 변수는 무시
- 오래된 변수 선언 방식 (JS초기 버전에 도입됨)
- 함수 스코프를 가짐

let / const
- JS es6버전에 도입된 키워드
- 블록 스코프를 가짐
*/
