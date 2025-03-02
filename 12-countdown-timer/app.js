const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items  = document.querySelectorAll('.deadline-format h4');
console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2025, 3, 27, 11, 30); // Sun Apr 27 2025 11:30:00 GMT+0900 (4월임!!!! Month is zero base.)
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0); 
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();  // ms로 반환해줌
console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  // calculate all values
  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / oneSecond);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    } else {
      return item;
    }
  }
  
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown); // setInterval()을 호출하여 생성한 타이머에 의해 반복되는 작업을 취소
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has exprired.</h4>`;
  }
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);

// getRemainingTime();