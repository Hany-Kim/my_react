// createElement : 새로운 요소 생성

let $type = document.createElement("div");
$type.className = "info-item";
$type.id = "type";

// 방법 1
// $type.textContent = "말티즈";
// console.log($type); // <div class=​"info-item" id=​"type">​말티즈​</div>​

// 방법 2
let $typeText = document.createTextNode("말티즈");
console.log($type); // <div class=​"info-item" id=​"type"></div>​
console.log($typeText); // 말티즈

// appendChild : 요소 추가
let $animalInfo = document.querySelector("div.animal-info");
$animalInfo.appendChild($type);
$type.appendChild($typeText);
console.log($type); // <div class=​"info-item" id=​"type">​말티즈​</div>
