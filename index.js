// html 요소
const $day = document.querySelector('.day');
const $date = document.querySelector('.date');
const $month = document.querySelector('.month');
const $year = document.querySelector('.year');

// 테이블 바디를 추가하기 위한 사전 작업
let $table = document.querySelector('.calendar');
let $tbody = document.createElement('tbody');
$table.appendChild($tbody);

// 날짜 계산 또는 달력 표현에 필요한 변수들
const today = new Date();
const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const oneDayMiliSec = new Date(2021,10,2) - new Date(2021,10,1);

// 오늘 년/월/일/요일을 변수로 할당
const year = today.getFullYear();
const month = today.getMonth(); // 0:1월, 1월: 2월 ...
const date = today.getDate();
const day = today.getDay(); //0:일요일, 1:월요일, 2:화요일 ...



/**** index.html 파일 실행 시 ****/
changeName(year, month, date, day);
console.log(year, month);
returnDayAndDates(year, month);



/**** 이름 변경 함수 ****/
function changeName(yr, mon, dt, d) { //연도, 월, 일, 요일
  $year.textContent = yr;
  $month.textContent = monthNames[mon];
  $date.textContent = dt;
  $day.textContent = dayNames[d];
}



/**** 날짜 계산 함수 ****/
//returnDayAndDates(2021,9);
function returnDayAndDates(yr, mon) { //1일이 무슨 요일인지, 해당월은 총 몇일인지 return해준다.
  // 0:1월, 1월: 2월 ...  0:일요일, 1:월요일, ...
  const firstDay = new Date(yr, mon, 1).getDay();

  // (해당월 총 일수) = {(다음달 1일) - (이번달 1일)} / (하루에 해당하는 miliseconds) 
  // new Date()를 사칙연산 하면 밀리초 값으로 반환해줌
  const totalDates = (new Date(yr, mon+1, 1) - new Date(yr,mon, 1)) / oneDayMiliSec;

  console.log(firstDay, totalDates);
  returnArray(firstDay, totalDates);
}


/**** 배열 생성 함수 ****/
function returnArray(start, total) {
  const arr = [];
  for (let i=0; i < start; i++) arr.push('');
  for (let i=0; i < total; i++) arr.push(i+1);

  console.log(arr);

  while(arr.length) {
    drawCalendar(arr.splice(0,7));
    console.log(arr);
  }
}



/**** 달력 표현 함수 ****/
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

  // $tr_1 노드를 $tbody 노드의 자식 노드로 추가
  $tbody.appendChild($tr);
}





