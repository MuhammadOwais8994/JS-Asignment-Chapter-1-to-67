function palindrome(){

    var word = prompt("Enter Your Word");
    var check = "";
    for (var i = word.length - 1; i >= 0; i--){
    check += word[i]
}
if (word === check){
    alert( word + " is a palindrome word")
}else if (word != check){
    alert(word + " is not a palindrome word")
}
}

palindrome();