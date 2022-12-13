setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  const dayIndex = d.getDay();
  const days = {
    0: 'Dimanche',
    1: 'Lundi',
    2: 'Mardi',
    3: 'Mercredi',
    4: 'Jeudi',
    5: 'Vendredi',
    6: 'Samedi',
  }
  const dayName = days[dayIndex];
  const date = d.getDate();
  const monthIndex = d.getMonth();
  const months = {
    0: 'Janvier',
    1: 'Fevrier',
    2: 'Mars',
    3: 'Avril',
    4: 'Mai',
    5: 'Juin',
    6: 'Juillet',
    7: 'Aout',
    8: 'Septembre',
    9: 'Octobre',
    10: 'Novembre',
    11: 'Decembre'
  }
  const monthName = months[monthIndex]
  const year = d.getFullYear();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const second = d.getSeconds();
  
  /*document.getElementById("demo").innerHTML = d.toUTCString();*/

  document.getElementById("day").innerHTML = dayName;
  document.getElementById("date").innerHTML = date;
  document.getElementById("month").innerHTML = monthName;
  document.getElementById("year").innerHTML = year;
  document.getElementById("hour").innerHTML = hour + " : " + minute + " : " + second;
/*  document.getElementById("minute").innerHTML = minute + " : ";
  document.getElementById("second").innerHTML = second;*/




} 

