function myFunction() {
    document.getElementById("demo").innerHTML = "Hello Javascript!";
    document.getElementById("jQuery").style.display = "block";
    alert("Goodbye content");
}

//jQuery
$(document).ready(function() {
    document.getElementById("jQuery").style.display = "none"
});