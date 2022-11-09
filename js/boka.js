const date = new Date();
const year = date.getFullYear();

const renderCalendar = () => {
  const monthDays = document.querySelector(".kalender");

  const day = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

  let days = ``;
  let x = 0;

  for (let j = 0; j < 7; j++) {
    days += `<div class="days">`;
    days += `<div class="day"><h2>${day[date.getDay()]}</h2><h5>${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}</h5></div>`;
    for (let i = 1; i <= 11; i++) {
      let r = Math.floor(Math.random() * 10) + 1;
      if (r < 7) {
        if (i < 4) {
          days += `<input type="radio" id="radioApple${x}" name="radioFruit" value="${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 0${i + 6}:00"><label for="radioApple${x}">0${i + 6}:00</label>`;
        } else {
          days += `<input type="radio" id="radioApple${x}" name="radioFruit" value="${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${i + 6}:00"><label for="radioApple${x}">${i + 6}:00</label>`;
        }
      } else {
        if (i < 4) {
          days += `<input type="radio" id="radioApple${x}" name="radioFruit" value="${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 0${i + 6}:00" disabled><label class="taken" for="radioApple${x}">0${i + 6}:00</label>`;
        } else {
          days += `<input type="radio" id="radioApple${x}" name="radioFruit" value="${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${i + 6}:00" disabled><label class="taken" for="radioApple${x}">${i + 6}:00</label>`;
        }
      }
      x++;
    }
    days += `</div>`;
    date.setDate(date.getDate() + 1);
  }

  monthDays.innerHTML = days;

  date.setDate(date.getDate() - 7);
};

document.querySelector(".previous").addEventListener("click", () => {
  if (date.getFullYear() === new Date().getFullYear() && date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
    alert("Du kan ju inte boka dagar som redan passerat...");
  } else {
    date.setDate(date.getDate() - 7);
    renderCalendar();
  }
});

document.querySelector(".next").addEventListener("click", () => {
  date.setDate(date.getDate() + 7);
  renderCalendar();
});

renderCalendar();
