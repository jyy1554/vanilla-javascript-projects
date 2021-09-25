const $enter = document.querySelector('.enter-btn');
const $start = document.querySelector('.start-btn');

const $input1 = document.querySelector('#input1');
const $input2 = document.querySelector('#input2');
const $input3 = document.querySelector('#input3');

const $strike = document.querySelector('#strike-score');
const $ball = document.querySelector('#ball-score');
const $out = document.querySelector('#out-score');

const $nth = document.querySelector('#nth-num');

//random number가 생성될때마다 매번 바뀌어야하고 원시값이 할당되므로 let키워드로 선언
let randomNum = '';




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

  console.log("Input Number: " + inputNum);
  return inputNum;
}

// Input 초기화 함수
function resetInput() {
  //input 태그는 .textContent가 아닌 .value로 값을 바꿔줘야됨
  $input1.value = '';
  $input2.value = '';
  $input3.value = '';
}



/**** 문제풀이 관련 함수 ****/

// 점수 계산하는 함수
function score(input) {
  let strike = 0;
  let ball = 0;
  let out = 0;

  // strike 계산 : 자리와 숫자가 같은 경우
  strike = (input[0] == randomNum[0]) + (input[1] == randomNum[1]) + (input[2] == randomNum[2]);
  // 정답!
  if(strike == 3) {
    correct();
    //return 함수 써주지 않으면 불필요하게 console.log(strike, ball, out);가 실행됨
    return true;
  }
  $strike.textContent = strike;

  // ball 계산 : 자리는 다르나 숫자가 같은 경우
  ball = (input[0] == randomNum[1]) + (input[0] == randomNum[2])
                     + (input[1] == randomNum[0]) + (input[1] == randomNum[2])
                     + (input[2] == randomNum[0]) + (input[2] == randomNum[1]);
  $ball.textContent = ball;

  // Out
  if(strike + ball == 0) out++;
  $out.textContent = out;

  console.log(strike, ball, out);
  return false;
}

function correct() {
  alert("Correct!");
  reset();
}

function fail() {
  alert("Fail!");
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

  if ($nth.textContent == 10) {
    //마지막 시도에 정답일 경우
    if(score(input)) return;
    else fail(); //시도한 횟수가 10을 넘어가면 실패
  }
  else if (input.length != 3)  {
    alert("중복되지 않은 숫자 3개를 입력해주세요!");
    resetInput();
  }
  else {
    ++$nth.textContent;
    score(input);
    console.log($nth.textContent);
  }

});

// Start/Restart 버튼
$start.addEventListener('click', function () {
  //Start 버튼 누르면
  $start.textContent = 'Restart';
  $start.style.backgroundColor = 'gray';
  $start.style.border = 'gray';

  //reset 동작
  reset();
});