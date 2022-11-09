const date = new Date();
const year = date.getFullYear();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayIndex = date.getDay() - 1;
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex - 1;
  const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

  document.querySelector(".menu .center").innerHTML = months[date.getMonth()] + "<br /><h5>" + date.getFullYear() + "</h5>";

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
    if (year === date.getFullYear() && i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="day today">${i}</div>`;
    } else {
      days += `<div class="day">${i}</div>`;
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
