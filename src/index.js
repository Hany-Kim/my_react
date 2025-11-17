// querySelector : getElementById처럼 단 하나 요소 반환

let $animalInfo = document.querySelector("div.animal-info"); // 요소들 중 class명을 통해 특정요소를 찾을 때 -> .
let ageElement = document.querySelector("div#age"); // 요소들 중 id명을 통해 특정요소를 찾을 때 -> #
console.log($animalInfo);
// <div class="animal-info">
//   <div id="name">강아지</div>
//   <div id="color">갈색</div>
//   <div id="age">2살</div>
// </div>
console.log(ageElement); // <div id="age">2살</div>
