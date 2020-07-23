function zoomIn() {
    var abc = document.getElementById("text");
    var currHeight = abc.clientHeight;
    abc.style.height = (currHeight + 40) + "px";
}
function zoomOut() {
    var abc = document.getElementById("text");
    var currHeight = abc.clientHeight;
    abc.style.height = (currHeight - 40) + "px";
} 