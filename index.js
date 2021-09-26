// html 요소
const $day = document.querySelector('.day');
const $date = document.querySelector('.date');
const $month = document.querySelector('.month');
const $year = document.querySelector('.year');
const $before = document.querySelector('.before');
const $after = document.querySelector('.after');
const $tbody = document.querySelector('.calendar');

// 날짜 계산 또는 달력 표현에 필요한 변수들
const today = new Date();
const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const oneDayMiliSec = new Date(2021,10,2) - new Date(2021,10,1);

// 오늘 년/월/일/요일을 변수로 할당함
const year = today.getFullYear();
const month = today.getMonth(); // 0:1월, 1월: 2월 ...
const date = today.getDate();
const day = today.getDay(); //0:일요일, 1:월요일, 2:화요일 ...

//달력에서 보여주고 있는 연도/월/요일을 변수로 할당함. 변경될 수 있으므로 let 키워드로 선언
let currentYear = year;
let currentMonth = month;
let currentDay = day;




/**** 첫 실행 시 ****/
changeName(year, month, date, day);
returnDayAndDates(year, month);



/**** 이름 변경 함수 ****/
function changeName(yr, mon, dt, d) { //연도, 월, 일, 요일
  $year.textContent = yr;
  $month.textContent = monthNames[mon];
  $date.textContent = dt;
  $day.textContent = dayNames[d];
}


/********************************************/
/************ 달력 출력 과정 시작 ************/
// 0. (화살표 버튼 클릭 시에만 실행됨) currentMonth값이 유효한지 확인하고 아래 단계들을 거친다.
// 1. 해당연도와 월을 인수로 받아 1일이 무슨 요일인지, 총 일수를 계산한다.
// 2. 1번 함수에서 요일과 총 일수를 받아 배열로 나타내고,
//    배열을 길이 7로 잘라 테이블 생성함수에 넘겨준다.
// 3. 2번 함수에서 길이가 7인 배열을 받아 테이블로 나타낸다.



/**** 0. 달력 생성 함수 ****/
function newCalendar() {
  // 달력을 새로 만들기 위해, tbody 자식노드들인 tr 모두 제거
  $tbody.querySelectorAll('tr').forEach(function(e){e.remove()});

  if(year == currentYear && month == currentMonth) changeName(currentYear, currentMonth, date, day);
  else changeName(currentYear, currentMonth, 1, currentDay);

  returnDayAndDates(currentYear, currentMonth);
}



/**** 1. 날짜 계산 함수 ****/
function returnDayAndDates(yr, mon) { //1일이 무슨 요일인지, 해당월은 총 몇일인지 return해준다.
  // 0:1월, 1월: 2월 ...  0:일요일, 1:월요일, ...
  const firstDay = new Date(yr, mon, 1).getDay();

  // (해당월 총 일수) = {(다음달 1일) - (이번달 1일)} / (하루에 해당하는 miliseconds) 
  // new Date()를 사칙연산 하면 밀리초 값으로 반환해줌
  const totalDates = (new Date(yr, mon+1, 1) - new Date(yr,mon, 1)) / oneDayMiliSec;

  returnArray(firstDay, totalDates);
}



/**** 2. 배열 생성 함수 ****/
function returnArray(start, total) {
  const arr = [];
  currentDay = start;

  //1일 시작하기 전 요일은 빈칸으로 채워주기
  for (let i=0; i < start; i++) arr.push('');
  for (let i=0; i < total; i++) arr.push(i+1);

  while(arr.length) {
    drawCalendar(arr.splice(0,7));
  }
}



/**** 3. 달력 표현 함수 ****/
function drawCalendar(arr) { // 배열
  let $tr = document.createElement('tr');

  arr.forEach(date => {
    // 1. $td 노드 생성
    let $td = document.createElement('td');
    // 2. $td 노드 텍스트 수정
    $td.textContent = date;
    // 3. $td 노드를 $tr_1 노드의 자식 노드로 추가
    $tr.appendChild($td);
  });

  // $tr 노드를 $tbody 노드의 자식 노드로 추가
  $tbody.appendChild($tr);
}

/************ 달력 출력 과정 끝 ************/
/******************************************/






/**** 화살표 클릭 시 동작 메소드 ****/
$before.addEventListener('click', function () {
  currentMonth--;
  if (currentMonth == -1) { //(-1)월일 경우 (0일때 1월이므로..)
    currentYear--;
    currentMonth = 11;
  }
  newCalendar();
});

$after.addEventListener('click', function () {
  currentMonth++;
  if (currentMonth == 12) { // 13월일 경우 (0일때 1월이므로..)
    currentYear++;
    currentMonth = 0;
  }
  newCalendar();
});