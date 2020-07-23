function greet (){
    var firstName = prompt("Enter your first name","First name here");
    var lastName = prompt("Enter your last name","last name here");
    var fullName = firstName + " " + lastName;
    document.write("Welcome to JS land " + fullName);
}
greet();