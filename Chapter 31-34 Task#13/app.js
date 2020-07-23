var dob = new Date(prompt("Enter your date of birth","For e.g: Dec 01, 2006"));
var dobmili = dob.getTime();
var dobS = dob.toString();
var dobC = dobS.slice(11,16);
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili;
var diffYear = diff/(1000*60*60*24*30*12);
var accurateAge = Math.floor(diffYear);

document.write("Your age is " + accurateAge);
document.write("<br>Your birth year is " + dobC)
