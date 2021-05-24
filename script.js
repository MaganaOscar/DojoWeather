function city() {
    alert("Loading weather report...");
}

function acceptCookie() {
    var elem = document.getElementById("cookie");
    elem.remove();
}

function convertTemp(elem) {
    var temps = document.querySelectorAll(".temp");
    if(elem.value === "\u00B0F"){
        for(var i = 0; i < temps.length; i++) {
            var temp = parseFloat(temps[i].innerHTML);
            temps[i].innerHTML = Math.round(((temp * (9/5)) + 32)) + "\u00B0";
        }
    } else {
        for(var i = 0; i < temps.length; i++) {
            var temp = parseFloat(temps[i].innerHTML);
            temps[i].innerHTML = ((temp - 32) * (5/9)).toFixed(1) + "\u00B0";
        }
    }
}