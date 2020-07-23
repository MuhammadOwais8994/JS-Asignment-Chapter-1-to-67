var currentDate = new Date("Sun Jun 21 2020 13:43:50 GMT+0500 (Pakistan Standard Time)");
var date = new Date("Sun Jun 21 1921 13:43:50 GMT+0500 (Pakistan Standard Time)")
var Todaymilli = currentDate.getTime();
var todaySec = currentDate.getSeconds();
var diff = currentDate - date;
var diffSec = diff/(1000*60*60*24*30*12);
var accurateDate = Math.floor(diffSec);

 document.write("Current Date: " + currentDate)

document.write("<br> " + accurateDate + " years back, it was Sun Jun 21 1920 13:43:50 GMT+0500 (Pakistan Standard Time) ")