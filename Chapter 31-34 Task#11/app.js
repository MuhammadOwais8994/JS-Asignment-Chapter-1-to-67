var currentDate = new Date();
var date = new Date("Sun Jun 21 2020 13:43:50 GMT+0500 (Pakistan Standard Time)")
var Todaymilli = currentDate.getTime();
var todaySec = currentDate.getSeconds();
var diff = currentDate - date;
var diffSec = diff/(1000*60*60);
var accurateSec = Math.floor(diffSec);

 document.write("Current Date: " + currentDate)

document.write("<br> " + accurateSec + " hour ago since Sun Jun 21 2020 13:43:50 GMT+0500 (Pakistan Standard Time)")