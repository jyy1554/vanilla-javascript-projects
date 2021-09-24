//좌측 화살표 클릭시 이전 이미지 보여주기
//우측 화살표 클릭시 다음 이미지 보여주기
const $previous_btn = document.querySelector('.previous');
const $next_btn = document.querySelector('.next');
const $image = document.querySelector('.image');

let index = 1;

function imageSrc(index) {
  return '/images/image-' + index + '.png';
};

//$image.src = "/images/image-5.png";
$previous_btn.addEventListener('click', function () {
  --index;
  $image.src = imageSrc(index);
});

$next_btn.addEventListener('click', function () {
  ++index;
  $image.src = imageSrc(index);
});