var text = "Ali and Sami are best friends. They play cricket and football together."
var replaceText = text.replace( /and/g ,"&")

document.write("Before replacement: Ali and Sami are best friends. They play cricket and football together. <br>")
document.write("After Replacement of 'and' to '&' : " + replaceText )