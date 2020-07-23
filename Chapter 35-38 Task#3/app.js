function addingValues (){
    var firstvalue = +prompt("Enter your first value","First value here");
    //var operator = prompt("Enter operator here","Operator must be '+' sign");
    var secondvalue = +prompt("Enter your second name","last value here");
    var afterAddition = firstvalue + secondvalue;
    document.write("Addition of " + firstvalue + " and " + secondvalue + " is: "  + afterAddition);
}
addingValues();