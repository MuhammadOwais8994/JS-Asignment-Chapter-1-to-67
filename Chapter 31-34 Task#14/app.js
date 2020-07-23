var customerName = prompt("Enter your name to see your K-E bill","Enter Name Here..");
document.write("Customer Name; " + customerName +"<br>");
var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var now = new Date();
var theMonth = now.getMonth();
var nameOfMonth = monthName[theMonth];
if (theMonth === 0){
    document.write("<br>Current Month: January ")
}else if( theMonth === 1){
    document.write("Current Month: Febuary ")
}else if( theMonth === 2){
    document.write("Current Month: March ")
}else if( theMonth === 3){
    document.write("Current Month: April ")
}else if( theMonth === 4){
    document.write("Current Month: May ")
}else if( theMonth === 5){
    document.write("Current Month: June ")
}else if( theMonth === 6){
    document.write("Current Month: July ")
}else if( theMonth === 7){
    document.write("Current Month: August ")
}else if( theMonth === 8){
    document.write("Current Month: September ")
}else if( theMonth === 9){
    document.write("Current Month: October ")
}else if( theMonth === 10){
    document.write("Current Month: November ")
}else if( theMonth === 11){
    document.write("Current Month: December ")
}

var numOfUnits = 410;
var chargePerUnit = 16;
var netAmountPayableWIDD = numOfUnits * chargePerUnit;
var latePayment = 350;
var grossAmountPayableADD = netAmountPayableWIDD + latePayment;


//document.write("<br> Current Month: " + theMonth);
document.write("<br> Numbers Of Units: " + numOfUnits );
document.write("<br> Charges Per Unit: " + chargePerUnit);
document.write("<br> Net Amount Payable (Within Due Date): " + netAmountPayableWIDD );
document.write("<br> Gross Amount Payable (After Due Date): " + grossAmountPayableADD)