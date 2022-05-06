const today = new Date();
const thisYear = today.getFullYear();
const thisMonth = today.getMonth();
const thisDate = today.getDate();
const thisDay = today.getDay(); //요일: 0-월, 1-화, ...
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
];

const $day = document.querySelector(".cal-day");
const $date = document.querySelector(".cal-date");
const $month = document.querySelector(".cal-month");
const $year = document.querySelector(".cal-year");
const $ths = document.querySelectorAll("tbody > tr > th");
const $leftArrow = document.querySelector(".left-arrow");
const $rightArrow = document.querySelector(".right-arrow");

let year = thisYear; //year 변수 초기값
let month = thisMonth; //month 변수 초기값

//달력 위에 요일을 보여주는 함수
const showDay = (year, month, firstDay) => {
    if (year === thisYear && month === thisMonth) {
        $day.textContent = days[thisDay];
    } else {
        $day.textContent = days[firstDay];
    }
};

//달력 위에 날짜를 보여주는 함수
const showDate = (month) => {
    if (thisMonth === month) {
        $date.textContent = thisDate;
    } else {
        $date.textContent = 1;
    }
};

//해당 월의 1일이 무슨 요일인지 알려주는 함수
const getFirstDay = (year, month) => {
    const date = new Date(year, month, 1);
    console.log(date);

    return date.getDay();
};

//해당 월의 마지막일이 몇일인지 알려주는 함수
const getLastDate = (year, month) => {
    const date = new Date(year, month + 1, 0);

    return date.getDate();
};

//달력을 만들어주는 함수
const showCalendar = (year, month) => {
    const ths = [...$ths]; //배열로 변환
    const firstDay = getFirstDay(year, month);
    const lastDate = getLastDate(year, month);
    let d = 1; //달력에 들어갈 날짜 변수

    for (let i = 0; i < ths.length; i++) {
        //1일은 특정 요일에 시작함
        if (i >= firstDay && d <= lastDate) {
            ths[i].textContent = d;
            d++;
        } else {
            ths[i].textContent = "";
        }
    }

    $year.textContent = year;
    $month.textContent = months[month];
    showDate(month);
    showDay(year, month, firstDay);
};

//왼쪽 화살표를 눌렀을 때 동작하는 함수
const clickLeft = () => {
    if (month <= 0) {
        year--;
        month = 11;
    } else {
        month--;
    }

    showCalendar(year, month);
};

//오른쪽 화살표를 눌렀을 때 동작하는 함수
const clickRight = () => {
    if (month >= 11) {
        year++;
        month = 0;
    } else {
        month++;
    }

    showCalendar(year, month);
};

//첫 실행 시 실행되는 함수
showCalendar(thisYear, thisMonth);

$leftArrow.addEventListener("click", clickLeft);
$rightArrow.addEventListener("click", clickRight);
