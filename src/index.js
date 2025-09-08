// 블록 스코프

function print() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i); // Uncaught ReferenceError: i is not defined at print (index.js:7:15) at index.js:10:1
}

print();
