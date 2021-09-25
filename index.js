const $previous_btn = document.querySelector('.previous');
const $next_btn = document.querySelector('.next');
const $image = document.querySelector('.image');

const $dot1 = document.querySelector('.dot1');
const $dot2 = document.querySelector('.dot2');
const $dot3 = document.querySelector('.dot3');
const $dot4 = document.querySelector('.dot4');
const $dot5 = document.querySelector('.dot5');

let pre_index = 1;
let index = 1;

//초기 셋팅
$dot1.style.backgroundColor = '#102738'; //첫번째 점 선택

function changeImage(i) {
  //이전에 선택된 점 해제
  document.querySelector('.dot'+pre_index).style.backgroundColor = '#2973a5';
  
  index = i;
  //이전에 선택된 점을 해제하려면 이전 위치값을 가지고 있어야 한다.
  pre_index = index;

  //새로 선택된 점 색깔 바꾸기
  document.querySelector('.dot'+index).style.backgroundColor = '#102738';
  //깃헙페이지에서 이미지가 보이도록 src에 .을 붙여줌
  //$image.src = './images/image-' + i + '.png';  //로컬 경로 사용시 요걸 이용하기
  $image.src = 'https://jyy1554.github.io/carousel/images/image-' + i + '.png';
};

//좌측 화살표 클릭시 이전 이미지 보여주기
$previous_btn.addEventListener('click', function () {
  if(index == 1) changeImage(5);
  else changeImage(--index);

  console.log(index);
});

//우측 화살표 클릭시 다음 이미지 보여주기
$next_btn.addEventListener('click', function () {
  if(index == 5) changeImage(1);
  else changeImage(++index);

  console.log(index);
});




/* 이미지 하단의 Dot를 누를 경우, 해당 순번의 이미지 보여주기 */
$dot1.addEventListener('click', function () {
  changeImage(1);
  console.log(index);
});

$dot2.addEventListener('click', function () {
  changeImage(2);
  console.log(index);
});

$dot3.addEventListener('click', function () {
  changeImage(3);
  console.log(index);
});

$dot4.addEventListener('click', function () {
  changeImage(4);
  console.log(index);
});

$dot5.addEventListener('click', function () {
  changeImage(5);
  console.log(index);
});
