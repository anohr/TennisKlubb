const dummyDate = new Date();
let dummyData = [];

const activity = ["Träning", "Tävling", "Träning", "Underhåll", "F16 Träning", "P14 Träning"];

let dummyYear = dummyDate.getFullYear();
let dummyMonth = dummyDate.getMonth() + 1;
let dummyDay = dummyDate.getDate();

dummyDate.setDate(dummyDate.getDate() - 3);

for (let i = 0; i < 7; i++) {
  dummyMonth = dummyDate.getMonth() + 1;
  dummyDay = dummyDate.getDate();

  let addDataArray = {
    date: {
      date: dummyYear + "-" + dummyMonth + "-" + dummyDay,
      time: Math.floor(Math.random() * 10 + 7) + ":00",
    },
    activity: activity[Math.floor(Math.random() * activity.length)],
  };

  dummyData.push(addDataArray);

  dummyDate.setDate(dummyDate.getDate() + Math.floor(Math.random() * 3));
}

const date = new Date();
const year = date.getFullYear();

const checkToday = (dateToCheck) => {
  for (let i = 0; i < dummyData.length; i++) {
    if (dateToCheck === dummyData[i].date.date) {
      return true;
    }
  }
};

const displayActivity = (year, month, day) => {
  let dateToDummy = year + "-" + month + "-" + day;

  var myElem = document.querySelector(".activityDiv");
  if (myElem !== null) {
    myElem.remove();
  }

  const refDiv = document.querySelector(".days");
  let activityDiv = document.createElement("div");

  activityDiv.className = "activityDiv";

  let activityDay = `<h1>Aktiviteter ${dateToDummy}</h1>`;

  for (let i = 0; i < dummyData.length; i++) {
    if (dummyData[i].date.date === dateToDummy) {
      activityDay += dummyData[i].date.time;
      activityDay += " ";
      activityDay += dummyData[i].activity;
      activityDay += "<br />";
    }
  }

  activityDiv.innerHTML = activityDay;

  refDiv.parentNode.insertBefore(activityDiv, refDiv.nextSibling);
};

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayIndex = date.getDay() - 1;
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex - 1;
  const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

  document.querySelector(".menu .center").innerHTML = "<h5>" + date.getFullYear() + "</h5>" + months[date.getMonth()];

  let days = `<div class="dayLabel">Måndag</div>
  <div class="dayLabel">Tisdag</div>
  <div class="dayLabel">Onsdag</div>
  <div class="dayLabel">Torsdag</div>
  <div class="dayLabel">Fredag</div>
  <div class="dayLabel">Lördag</div>
  <div class="dayLabel">Söndag</div>`;

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="day disable"></div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    const checkDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + i;
    if (checkToday === checkDate) {
      console.log(checkToday, checkDate);
    }
    if (year === date.getFullYear() && i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="day today ${checkToday(checkDate) ? "booked" : ""}" ${checkToday(checkDate) ? ' onClick="displayActivity(' + year + ", " + (date.getMonth() + 1) + ", " + i + ')"' : ""}>${i}</div>`;
    } else {
      days += `<div class="day ${checkToday(checkDate) ? "booked" : ""}" ${checkToday(checkDate) ? ' onClick="displayActivity(' + year + ", " + (date.getMonth() + 1) + ", " + i + ')"' : ""}>${i}</div>`;
    }
  }

  if (nextDays > 0) {
    for (let j = 1; j <= nextDays; j++) {
      monthDays.innerHTML = days;
    }
  } else {
    monthDays.innerHTML = days;
  }
};

document.querySelector(".previous").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
