const displayBook = () => {
  const qdispBook = document.querySelector('#displayBook');

  let spelare = document.forms['bokning']['spelare'].value;
  let fnamn = document.forms['bokning']['fnamn'].value;
  let enamn = document.forms['bokning']['enamn'].value;
  let bastu = document.forms['bokning']['bastu'].value;
  let bana = document.forms['bokning']['bana'].value;
  let tid = document.forms['bokning']['tid'].value;

  if (fnamn === '' || enamn === '' || bastu === '' || bana === '' || tid === '') {
    alert('Du måste fylla i alla fält för att kunna boka...');
    return false;
  } else {
    qdispBook.style.display = 'block';

    let days = `<h1>Du har bokat:</h1>`;

    days += `Antal spelare: ${spelare} <br />`;
    days += `Förnamn: ${fnamn} <br />`;
    days += `Efternamn: ${enamn} <br />`;
    days += `Bastu: ${bastu} <br />`;
    days += `Bana: ${bana} <br />`;
    days += `Datum: ${tid} <br />`;

    qdispBook.innerHTML = days;

    document.getElementById('fnamn').value = '';
    document.getElementById('enamn').value = '';

    return false;
  }
};
