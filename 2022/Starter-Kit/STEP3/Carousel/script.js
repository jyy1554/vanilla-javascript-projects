/*

  다음과 같은 조건을 만족하는 캐로우셀을 완성해주세요!

  📌 좌측 화살표 클릭했을 때 이전 이미지를 보여주세요.
  📌 우측 화살표 클릭했을 때에는 다음 이미지를 보여주세요.
  📌 마지막 이미지에서 우측 화살표를 누를 경우, 첫번째 이미지를 보여주세요.
  📌 첫번째 이미지에서 좌측 화살표를 누를 경우, 마지막 이미지를 보여주세요.
  📌 이미지 하단의 점을 누를 경우, 해당 순번의 이미지를 보여주세요.

*/

const $dotList = document.querySelector(".dot-list");
const $dotNodes = [...$dotList.children];
const $images = document.querySelectorAll("img");
const $leftArrow = document.querySelector(".fa-arrow-left");
const $rightArrow = document.querySelector(".fa-arrow-right");

const imageSrcArray = []; //image소스 html에서 받아와 이 변수에 저장
$images.forEach((img) => imageSrcArray.push(img.src));

let index = 0; // 사진 인덱스

const changeImage = (i) => {
    $images[0].src = imageSrcArray[i];
};

$dotList.addEventListener("click", function (e) {
    //태그명 대문자로 써야됨
    if (e.target.tagName === "LI") {
        index = $dotNodes.indexOf(e.target);

        changeImage(index);
    }
});

$leftArrow.addEventListener("click", function () {
    index = index <= 0 ? 0 : index - 1;

    changeImage(index);
});

$rightArrow.addEventListener("click", function () {
    index = index >= 4 ? 4 : index + 1;

    changeImage(index);
});
