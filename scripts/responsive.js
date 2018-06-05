// scripts/responsive.js

function openMenu(){
    var navbarBurger = document.getElementById("navbarMenu").style.display;
    console.log(navbarBurger);
    if(navbarBurger!="inline-block")document.getElementById("navbarMenu").style.display="inline-block";
    else document.getElementById("navbarMenu").style.display="none";
}