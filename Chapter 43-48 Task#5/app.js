var interval;
var mili = 0;

var minDigit = document.getElementById('min');
var secDigit = document.getElementById('sec');
var miliDigit = document.getElementById('mili');
var interval;

function timer() {
    mili++
    miliDigit.innerHTML = mili;
    if (mili >= 1000) {
        alert("Counter Reached its Increase limit")
    }
}

function decreaseTimer() {
    mili--
    miliDigit.innerHTML = mili;
    if (mili <= -1000) {
        alert("Counter Reached its Decrease limit")
    }
}


function Increase() {
    interval = setInterval(timer, 1000);
    document.getElementById('Increase').disabled = true;
}

function Reset() {
    mili = 0;
    miliDigit.innerHTML = mili;
    clearInterval(interval)
}

function Decrease() {
    interval = setInterval(decreaseTimer, 1000);
    document.getElementById('Decrease').disabled = true;
}
