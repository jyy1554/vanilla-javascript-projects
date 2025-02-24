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

const now = new Date();
let deadline = new Date(now.setDate(now.getDate() + 10));
deadline.setHours(11);
deadline.setMinutes(30);
deadline.setSeconds(0);
const deadlineText = `${weekdays[deadline.getDay()]}, ${deadline.getDate()} ${months[deadline.getMonth()]} ${deadline.getFullYear()}`;

console.log(deadline);
console.log(deadlineText);

const date = document.getElementById('date');
date.innerHTML = deadlineText;

function updateTimer() {
  const diff = deadline - new Date();

  const secs = Math.floor(diff / 1000);
  const mins = Math.floor(diff / 1000 * 60);
  const hours = Math.floor(diff / 1000 * 60 * 60);
  const days = Math.floor(diff / 1000 * 60 * 60 * 24);
}