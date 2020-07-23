function addingValues (){
    var Val1 =prompt("Enter your first value","First value here");
    var sign =prompt("Enter operator here","Operator must be sign");
    var Val2 =prompt("Enter your second value","last value here");

    console.log(Val1+sign+Val2)
    if (sign === '+'){
        document.write((+Val1)+(+Val2))
    }else if(sign === '-'){
        document.write( Val1 - Val2)
    }else if(sign === '*'){
        document.write( Val1 * Val2)
    }else if(sign === '/'){
        document.write( Val1 / Val2)
    }else if(sign === '%'){
        document.write( Val1/Val2*100 + "%" )
    }
}
addingValues();