// 배열 수정
const animal = ["cat", "dog", "hamster"];

//animal = ["cat", "rabbit", "hamster"]; // -> 에러 발생, index.js:4 Uncaught TypeError: Assignment to constant variable. at index.js:4:8
animal[2] = "parrot"; // -> 통과

console.log(animal); //
