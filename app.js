
let $calendar = document.querySelector("#form-calendar"),
  $monthTitle = document.querySelector(".monthTitle"),
  $yearTitle = document.querySelector(".yearTitle"),
  $calendarDays= document.querySelector(".calendar-dayColumns")

const months = [
  "January",
  "February",
  "March",
  "april",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const changeDate = (month, year) => {
  let date = new Date(year, month);
  console.log(date);
  let firstDayOfMonth = date.getDay();
  let lastDate = new Date(year, month + 1, 0).getDate();
  let lastDay = new Date(year, month, lastDate).getDay();
  $monthTitle.textContent = months[month];
  $yearTitle.textContent = year;

  setDaysInCalendar(firstDayOfMonth, lastDate, lastDay);
};

const setDaysInCalendar = (firstDay, lastDate, lastDay) => {
$calendarDays.innerHTML=""
  let days = [
    {
      day: "Mon",
      number: [],
    },
    {
      day: "Tuey",
      number: [],
    },
    {
      day: "Wed",
      number: [],
    },
    {
      day: "Thu",
      number: [],
    },
    {
      day: "Fri",
      number: [],
    },
    {
      day: "Sat",
      number: [],
    },
    {
      day: "Sun",
      number: [],
    },
  ];
  let adjustedFirstDay= (firstDay+6)%7;
  let nextDay= adjustedFirstDay;
  let currentDate = 1;

  while ( currentDate <= lastDate) {

    days[nextDay].number.push(currentDate);
    nextDay = (nextDay + 1) % 7;
    currentDate++;

  }
  
  days.forEach(day=>{
    $calendarDays.innerHTML+= renderDays(day)
  })
  
};

const renderDays= (day)=>{
let datesHtml= day.number.map(num=>`<div>${num}</div>`).join("")
return `
       <div class="column" id=${day.day}>
                <div >${day.day}</div>
                <div >${datesHtml}</div>
            </div>`
}


document.addEventListener("DOMContentLoaded", (e)=>{
  
  $calendar.addEventListener("submit", (e) => {
  e.preventDefault();
  let $month = parseInt(document.querySelector("#monthList").value);
  let $year = parseInt(document.querySelector("#yearInput").value);
  changeDate($month, $year);
});

})

