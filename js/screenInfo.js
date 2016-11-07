function screenInfo() {
    var w = screen.width;
    var vw = screen.availWidth;
    var h = screen.height;
    var vh = screen.availHeight;
    var cd = screen.colorDepth;
    var pd = screen.pixelDepth;
    var output =
        "<p>Your Computer Info: <br/>" +
        "screen size: " + w + "x" + h +
        "<br/>browser size:" + vw + "x" + vh + "<br/>color depth: " + cd +
        "<br/>pixel depth: " + pd + "</p>";
    
    var myscreen = document.getElementById("screen");
    myscreen.innerHTML = output;
    myscreen.style.left = (vw - 200)/2 + "px";
    myscreen.style.top = (vh - 200)/2 + "px";
    myscreen.style.display = "block";
}

function disappearInfo() {
    var myscreen = document.getElementById("screen");
    myscreen.style.display = "none";
}

function createEventListeners() {
    document.getElementById("home").onmouseover=screenInfo;
    document.getElementById("home").onmouseout=disappearInfo;

}

window.onload = createEventListeners;