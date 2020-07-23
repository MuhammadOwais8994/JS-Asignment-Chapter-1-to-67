function signUp() {
    var name = document.getElementById('name');
    var country = document.getElementById('country');
    var phonenum = document.getElementById('phonenum');
    var email = document.getElementById('email');
    var pass = document.getElementById('pass');
    document.write("You have Sucessfully Signed Up")
    document.write("<br> Name: " + name.value);
    document.write("<br> Country: " + country.value);
    document.write("<br> Phone No: " + phonenum.value);
    document.write("<br> Email: " + email.value);
}