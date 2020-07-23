var refDate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500 (Pakistan Standard Time)");
var date = new Date("Thu Jan 01 2015 00:00:00 GMT+0500 (Pakistan Standard Time)")
var Todaymilli = refDate.getTime();
var todaySec = refDate.getSeconds();
var diff = refDate - date;
var diffSec = diff/(1000*60);
var accurateSec = Math.floor(diffSec);

 

document.write("On reference date Sat Dec 05 2015 22;50;16 GMT+0500 (PST), <br> "+ accurateSec + " seconds had passed since" )