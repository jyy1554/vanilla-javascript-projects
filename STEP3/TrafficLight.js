/*

  < 신호등 불 켜기 >

  다음과 같은 조건을 만족하여 신호등의 불이 켜질수 있도록 만들어 주세요!
  
  📌 Stop, Pause, Go 클릭 시 빨간색, 주황색, 초록색불이 들어와야 합니다.
  📌 전체 불 끄기 버튼을 클릭하면 모든 불이 꺼져야 합니다.
  
  🚨 HTML, CSS는 건드리지 않고 JS만 수정해주세요.

*/

const buttonElement = document.querySelector("button");
const spanElement = document.querySelector("span");
const spanAllElement = document.querySelectorAll(".lightOn");

for (const sp of spanAllElement) {
    sp.addEventListener("click", function (e) {
        const color = e.target.className.split(" ")[1];
        document.querySelector(`.${color}`).style.backgroundColor = color;
    });
}

buttonElement.addEventListener("click", function () {
    for (const sp of spanAllElement) {
        sp.style.backgroundColor = "white";
    }
});
