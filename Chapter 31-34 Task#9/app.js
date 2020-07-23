var ramadan = new Date("Thu Jun 18 2015 00:00:00 GMT+0500 (Pakistan Standard Time)");
var Todaymilli = ramadan.getTime();
var todayMin = ramadan.getMinutes();
var diff = Todaymilli - todayMin;
var diffMin = diff/(1000*60*60*24);
var accurateDay = Math.floor(diffMin);

 

document.write(accurateDay + " days have passed since 1st Ramadam, 2015")