// function upperWord(){

// var word = prompt("Enter any sentence in small alphabats");
// var firstChar = word.slice(0,1);
// var secondChar = word.slice(1);
// firstChar = firstChar.toUpperCase();
// secondChar = secondChar.toLowerCase();
// var word = firstChar + secondChar;
// alert(word)

// }
// upperWord();



function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
alert(uppercase("my name is owais and i am learning javascript"));