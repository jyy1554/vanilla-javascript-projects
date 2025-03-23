const $enter = document.querySelector('.enter-btn');
const $restart = document.querySelector('.restart-btn');

const $inputs = document.querySelector('.blanks');
const $input1 = document.querySelector('#input1');
const $input2 = document.querySelector('#input2');
const $input3 = document.querySelector('#input3');

const $strike = document.querySelector('#strike-score');
const $ball = document.querySelector('#ball-score');
const $out = document.querySelector('#out-score');

const $nth = document.querySelector('#nth-num');

//random number가 생성될때마다 매번 바뀌어야하고 원시값이 할당되므로 let키워드로 선언
let randomNum = '';

//index.html 파일이 열리면 초기화 reset 실행
window.onload = reset();


/**** 초기 셋팅  함수 ****/

// 3자리 random number 생성 함수
function generateRandomNum() {
  //array는 원시값이 아닌 객체이므로 const키워드로 선언해도 값이 변경가능
  const arr = [1,2,3,4,5,6,7,8,9];
  let num = '';

  for (let i=0; i < 3; i++) {
    //0 이상 arr.length 미만 random 정수 생성하기
    const index = Math.floor(Math.random() * arr.length);
    num += arr[index];
    // 배열 요소 삭제. splice(시작점, 삭제 개수)
    arr.splice(index,1);
  }

  console.log("Random Number: " + num);
  return num;
}




/**** Input 관련 함수 ****/

// input을 받아 return 하는 함수
function returnInput() {
  const inputNum = $input1.value + $input2.value + $input3.value;

  return inputNum;
}

// Input 초기화 함수
function resetInput() {
  //input 태그는 .textContent가 아닌 .value로 값을 바꿔줘야됨
  $input1.value = '';
  $input2.value = '';
  $input3.value = '';
}

// 올바른 input을 넣었는지 확인하는 함수
function isValidate(input) {
  if (isNaN(input * 1) || input[0] == input[1] || input[0] == input[2]) {
    //숫자가 아닌 문자를 입력하거나 중복된 숫자를 입력한 경우
    //input*1은 Number타입으로 바꿔주기 위해. NaN === NaN은 false
    alert("1에서 9 사이의 중복되지 않은 숫자를 넣어주세요.");
    resetInput();
    return false;
  }
  else if (input.length != 3)  {
    //숫자를 3개를 입력하지 않았을 경우
    alert("중복되지 않은 숫자 3개를 입력해주세요.");
    resetInput();
    return false;
  }
  else return true;
}



/**** 문제풀이 관련 함수 ****/

// 점수 계산하는 함수
function score(input) {
  // strike 계산 : 자리와 숫자가 같은 경우
  const strike = (input[0] == randomNum[0]) + (input[1] == randomNum[1]) + (input[2] == randomNum[2]);

  // ball 계산 : 자리는 다르나 숫자가 같은 경우
  const ball = (input[0] == randomNum[1]) + (input[0] == randomNum[2])
                     + (input[1] == randomNum[0]) + (input[1] == randomNum[2])
                     + (input[2] == randomNum[0]) + (input[2] == randomNum[1]);

  // Out 계산 : strike와 ball이 둘다 0이면 out은 1. boolean값을 숫자로 만들어주기 위해 곱하기 1해줌
  const out = !(strike + ball) * 1;

  $strike.textContent = strike;
  $ball.textContent = ball;
  $out.textContent = out;

  console.log(strike, ball, out);
  return strike;  //정답인 경우는 strike가 3인 경우이므로 strike 값만 돌려주면 됨
}

function correct() {
  alert("Correct!");
  console.log("correct");
  reset();
}

function fail() {
  alert("Fail!");
  console.log("fail");
  reset();
}

function reset() {
  // random number 생성
  randomNum = generateRandomNum();
  //input 초기화
  resetInput();
  //score 초기화
  $strike.textContent=0; $ball.textContent=0; $out.textContent=0;
  //횟수 초기화
  $nth.textContent = 1;
}



/**** 버튼 클릭 시 동작 ****/

// Enter 버튼
$enter.addEventListener('click', function () {
  const input = returnInput();

  if(isValidate(input)) {
    //플레이어가 올바른 값을 입력한 경우

    if ($nth.textContent == 10) {
      //마지막 시도에서 정답일 경우
      if(score(input) == 3) correct();
      else fail();
    }
    else {
      $nth.textContent++;
      if(score(input) == 3) correct();
    }
  }
});

// Restart 버튼
$restart.addEventListener('click', reset);