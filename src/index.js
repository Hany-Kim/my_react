// 함수 스코프

function print() {
  // var는 let과 다르게 함수스코프를 가짐
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i); // 10 출력 (오류발생x)
}

print();
