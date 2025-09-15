// 배열 삭제
const colors = ["purple", "skyblue", "green"];
colors.pop(); // -> 뒤에서 삭제

console.log(colors); // (2) ['purple', 'skyblue']

colors.shift(); // -> 앞에서 삭제

console.log(colors); // ['skyblue']

const colors1 = ["purple", "skyblue", "green", "yellow", "orange"];
// colors1.splice(start, deleteCnt);
colors1.splice(1, 3);
console.log(colors1); // ['purple', 'orange']
console.log(colors1.length); // 2
