const firstNames = ['Maria', 'Erik', 'Anna', 'Lars', 'Elisabeth', 'Anders', 'Eva', 'Johan', 'Kristina', 'Per'];
const lastNames = [
  'Nilsson',
  'Persson',
  'Andersson',
  'Jönsson',
  'Olsson',
  'Svensson',
  'Johansson',
  'Larsson',
  'Persdotter',
  'Hansson',
  'Dalmark',
  'Hagwik',
  'Hammarhamn',
  'Järnhed',
  'Korshage',
  'Rudslott',
  'Skönbacka',
  'Skönedal',
  'Talllund',
  'Widedhal',
];

let generatedDummyData = [];

let toDayDate = new Date();

singelDummyData = {
  players: 2,
  firstname: 'John',
  lastname: 'Danielsson',
  saunatime: 0,
  courtNr: 2,
  date: {
    bookDate: toDayDate.getFullYear() + '-' + (toDayDate.getMonth() + 1) + '-' + toDayDate.getDate(),
    bookTime: toDayDate.getHours + ':00',
  },
};

generatedDummyData.push(singelDummyData);

singelDummyData = {
  players: 3,
  firstname: 'Adam',
  lastname: 'Johnsson',
  saunatime: 1,
  courtNr: 1,
  date: {
    bookDate: toDayDate.getFullYear() + '-' + (toDayDate.getMonth() + 1) + '-' + toDayDate.getDate(),
    bookTime: toDayDate.getHours + ':00',
  },
};

generatedDummyData.push(singelDummyData);

for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 20; j++) {
    let dupe = false;

    let thisYear = toDayDate.getFullYear();
    let thisMonth = toDayDate.getMonth() + 1;
    let thisDay = toDayDate.getDate();

    let thisHour = Math.floor(Math.random() * 10 + 7);

    let fieldPlayers = Math.floor(Math.random() * 3 + 2);
    let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    let saunaTime = Math.floor(Math.random() * 2);
    let courtNr = Math.floor(Math.random() * 3 + 1);
    let genDate = thisYear + '-' + thisMonth + '-' + thisDay;
    let genTime = thisHour + ':00';

    for (let x = 0; x <= generatedDummyData.length - 1; x++) {
      if (generatedDummyData[i].courtNr === courtNr) {
        if (generatedDummyData[x].date.bookDate == genDate && generatedDummyData[x].date.bookTime == genTime) {
          dupe = true;
        }
      }
    }

    if (!dupe) {
      let singelDummyData = {
        players: fieldPlayers,
        firstname: firstName,
        lastname: lastName,
        saunatime: saunaTime,
        courtNr: courtNr,
        date: {
          bookDate: genDate,
          bookTime: genTime,
        },
      };

      generatedDummyData.push(singelDummyData);
    }
  }

  toDayDate.setDate(toDayDate.getDate() + 1);
}

const checkForActivity = (year, month, day, courtNr, hour) => {
  let checkDate = year + '-' + month + '-' + day;
  let checkTime = hour + ':00';

  for (let i = 0; i < generatedDummyData.length; i++) {
    if (checkDate === generatedDummyData[i].date.bookDate && checkTime === generatedDummyData[i].date.bookTime && +courtNr === generatedDummyData[i].courtNr) {
      return true;
    }
  }
};

const date = new Date();
const year = date.getFullYear();

const renderCalendar = (choosenCourt) => {
  const monthDays = document.querySelector('.kalender');

  let court = choosenCourt;

  const dayName = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];

  let days = ``;
  let x = 0;

  for (let j = 0; j < 7; j++) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    days += `<div class="days">`;
    days += `<div class="day"><h2>${dayName[date.getDay()]}</h2><h5><span>${year}-${month}-</span>${day}</h5></div>`;
    for (let i = 1; i <= 11; i++) {
      let hour = i + 6;
      if (!checkForActivity(year, month, day, court, hour)) {
        days += `<input type="radio" id="${x}" name="tid" value="${year}-${month}-${day} ${i + 6}:00" ${checkForActivity(year, month, day, court, hour) ? 'disabled' : ''}><label class="${
          checkForActivity(year, month, day, court, hour) ? 'taken' : ''
        }" for="${x}">${hour}:00</label>`;
        x++;
      }
    }
    days += `</div>`;
    date.setDate(date.getDate() + 1);
  }

  monthDays.innerHTML = days;

  date.setDate(date.getDate() - 7);
};

document.querySelector('.previous').addEventListener('click', () => {
  if (date.getFullYear() === new Date().getFullYear() && date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
    alert('Du kan ju inte boka dagar som redan passerat...');
  } else {
    date.setDate(date.getDate() - 7);
    renderCalendar();
  }
});

document.querySelector('.next').addEventListener('click', () => {
  date.setDate(date.getDate() + 7);
  renderCalendar();
});

let choosenCourt = document.getElementById('court').value;

renderCalendar(choosenCourt);
