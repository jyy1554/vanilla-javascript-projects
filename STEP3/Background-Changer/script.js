/*

  다음과 같은 조건을 만족하는 화면을 만들어 주세요!
  
  📌 버튼 클릭시 랜덤한 HEX CODE가 배경 색으로 변경되어야 합니다.
  📌 현재 HEX CODE가 <p> 태그의 텍스트로 표시되어야 합니다.

*/

const buttonElement = document.querySelector("button");
const wrapperElement = document.querySelector(".wrapper");
const pElement = document.querySelector("p");

chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const changeRandomColor = () => {
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }

    wrapperElement.style.backgroundColor = color;
    pElement.textContent = `HEX CODE: ${color}`;
};

buttonElement.addEventListener("click", changeRandomColor);
