// 버튼과 addEventListener

let $button = document.createElement("button");
$button.id = "new-button";
$button.classList.add("new-button");
$button.textContent = "버튼";
$button.addEventListener("click", () => {
  window.alert("클릭");
});

let $animalInfo = document.querySelector("div.animal-info");
$animalInfo.appendChild($button);

console.log($animalInfo);
