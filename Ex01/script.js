let date1 = new Date();

let dateBruxelles = date1.toLocaleString('fr-FR',{
    timeZone:"Europe/Brussels",
    weekday: 'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric'});
document.getElementById("bruxelles").innerHTML = 'Bruxelles : '+ dateBruxelles;


let date2= new Date ();

let dateAnchorage = date2.toLocaleString('fr-FR',{
    timeZone:'America/Anchorage',
    weekday: 'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric'});
document.getElementById("anchorage").innerHTML = 'Anchorage : '+ dateAnchorage;

let date3= new Date ();

let dateReykjavik = date3.toLocaleString('fr-FR',{
    timeZone:'Iceland',
    weekday: 'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric'});
document.getElementById("reykjavik").innerHTML = 'Reykjavik : '+ dateReykjavik;

let date4= new Date ();

let dateSaintPetersbourg = date4.toLocaleString('fr-FR',{
    timeZone:'Europe/Moscow',
    weekday: 'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric'});
document.getElementById("saint-petersbourg").innerHTML = 'Saint-Petersbourg : '+ dateSaintPetersbourg;
