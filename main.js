function toggleDisplay(x, y) {
    var element = document.getElementById(x);
    var button = document.getElementById(y);
    if (element.style.display == "inline-block") {
        element.style.display = "none";
        button.innerHTML = "Open Video";
    } else {
        element.style.display = "inline-block"; 
        button.innerHTML = "Close Video";
    }    
}


