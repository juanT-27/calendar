// necesitamos primero invocar los elementos html necesarios
// saber cual es el primer día de ese mes y el ultimo día
let $calendar = document.querySelector("#calendar"),
  $monthTitle = document.querySelector(".monthTitle"),
  $yearTitle = document.querySelector(".yearTitle");

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
  let date = new Date();
  date.setMonth(month);
  date.setFullYear(year);

  let firstDayOfMonth= date.getDay(1)
  let lastDate= new Date(year, month +1, 0).getDate()
  let lastDay= new Date(year, month, lastDate).getDay()
  $monthTitle.textContent = months[month];
  $yearTitle.textContent= year

  setDaysInCalendar(firstDayOfMonth, lastDate, lastDay)
};

const setDaysInCalendar=(firstDay, lastDate, lastDay)=>{
    for(let i=1; i<lastDate;i++){
        console.log(i)
    }

    

}

$calendar.addEventListener("submit", (e) => {
  e.preventDefault();
  let $month = document.querySelector("#monthList").value;
  let $year = document.querySelector("#yearInput").value;
  changeDate($month, $year);
});
