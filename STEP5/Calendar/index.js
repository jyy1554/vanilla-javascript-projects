const today = new Date();
const thisYear = today.getFullYear();
const thisMonth = today.getMonth();
const thisDate = today.getDate();
const thisDay = today.getDay(); //요일: 0-월, 1-화, ...

const $day = document.querySelector(".cal-day");
const $date = document.querySelector(".cal-date");
const $month = document.querySelector(".cal-month");
const $year = document.querySelector(".cal-year");
const $ths = document.querySelectorAll("tbody > tr > th");

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

const showDay = (day) => {
    $day.textContent = days[day];
};

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

const showCalendar = (year, month) => {
    const ths = [...$ths];
    const firstDay = getFirstDay(year, month);
    const lastDate = getLastDate(year, month);

    console.log(firstDay + " " + lastDate);

    for (let i = firstDay, j = 1; i < lastDate; i++, j++) {
        ths[i].textContent = j;
    }

    $year.textContent = year;
    $month.textContent = months[month];
};

showDay(thisDay);
showDate(thisMonth);
showCalendar(thisYear, thisMonth);
