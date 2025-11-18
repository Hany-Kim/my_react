// innerHTML
// innerHTML을 활용해서 특정 요소를 추가하면 기존의 모든 자식 요소들은 제거가 되고 추가한 새로운 요소로 대체된다.
// innerHTML을 사용하면 새로운 요소를 쉽게 설정하고 변경할 수 있는 장점이 있지만,
// 성능이나 보안에 문제가 있는 위험이 있다.
// 왠만하면 createElement나 textContent와 같은 DOM API를 활용하는 것이 좋다.

let $animalInfo = document.querySelector("div.animal-info");
console.log($animalInfo.innerHTML);
//   <div class="info-item" id="name">강아지</div>
//   <div class="info-item" id="color">갈색</div>
//   <div class="info-item" id="age">2살</div>

$animalInfo.innerHTML = `
    <div class="info-item" id="name">고양이</div>
`;
console.log($animalInfo.innerHTML);
// <div class="info-item" id="name">고양이</div>
