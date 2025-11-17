// querySelectorAll : 전달받은 class이름을 가진 여러 요소를 찾아 반환
// getElementsByClassName : class이름만으로 여러 요소를 반환
// getElementsByTagName : 특정 Html 태그로 이루어진 모든 요소들을 반호나

let $infoItem1 = document.querySelectorAll("div.info-item");
console.log($infoItem1);

let $infoItem2 = document.getElementsByClassName("info-item");
console.log($infoItem2);

let $infoItem3 = document.getElementsByTagName("div");
console.log($infoItem3);
