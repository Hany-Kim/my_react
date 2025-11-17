let $color = document.getElementById("color");

console.log($color.classList);
// classList : class name처럼 특정 요소의 클래스 속성에 접근가능한 프로퍼티면서, 여러 메서드(add, remove, ...)를 제공

$color.classList.add("dog-color");
console.log($color); // <div class="info-item dog-color" id="color">갈색</div>
// .add : 값을 변경하는게 아니라 전달한 요소를 기존 요소에 추가

$color.classList.remove("info-item");
console.log($color); // <div class="dog-color" id="color">갈색</div>
// .remove : 제거
