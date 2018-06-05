// scripts/slider.js

var obj = document.getElementById("slider");

setInterval(imageSlider,10000);
function imageSlider(){
    var img = obj.style.backgroundImage;
    var num = ( parseInt(img.charCodeAt(22))+1 ) % 5;
    obj.style.backgroundImage = "url('../assets/slider" + num + ".png')";
}