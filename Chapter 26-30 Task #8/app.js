var userNumber =10;
var counter = 0;
var maxTries = 5;
var randomNumber = Math.floor(Math.random() * userNumber + 1);
while (attempts != randomNumber){
    var attempts = prompt("Please pick a number between 1 and " + userNumber);
    counter += 1;
    if (counter > maxTries){
        document.write("You have no more tries left. Press F5 to play again");
        break
    }
    if (attempts == randomNumber){
        document.write("Congrates you guess the correct number");
        document.write(" the random number was " + randomNumber);
        document.write(" It took you " + counter + " attempts to guess the correct number")
    }
}