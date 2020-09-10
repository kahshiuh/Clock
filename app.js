const hourElem = document.getElementById("hour");
const minuteElem = document.getElementById("minute");
const secondElem = document.getElementById("seconds");
const ampm = document.getElementById("half");
const but = document.getElementById("but");
const dayOfWeekElem = document.getElementById("dayOfWeek");
const dayElem = document.getElementById("day");
const monthElem = document.getElementById("month");
const yearElem = document.getElementById("year");
var twelveHourClock = false;
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
const daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function setTime() {
  var date = new Date();
  let h = check0(date.getHours());
  if (twelveHourClock) {
    h = checkHour(check0(date.getHours()));
  }
  let m = check0(date.getMinutes());
  let s = check0(date.getSeconds());
  hourElem.innerHTML = `${h}:`;
  minuteElem.innerHTML = `${m}:`;
  secondElem.innerHTML = `${s}`;
  ampm.innerHTML = date.getHours() >= 12 ? "PM" : "AM";
  dateSet(date);
  var t = setTimeout(function () {
    setTime();
  }, 500);
}

function dateSet(date) {
  let year = date.getFullYear();
  yearElem.innerHTML = year;
  let mon = months[date.getMonth()];
  monthElem.innerHTML = `${mon}`;
  let getDay = daysInWeek[date.getDay()];
  dayOfWeekElem.innerHTML = `${getDay}, `;
  let d = date.getDate();
  dayElem.innerHTML = `${d}`;
}
function check0(t) {
  return t < 10 ? "0" + t : t;
}
function checkHour(h) {
  return h > 12 ? h - 12 : h;
}
but.addEventListener("click", () => {
  twelveHourClock = !twelveHourClock;
});

setTime();
