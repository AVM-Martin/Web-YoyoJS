// scripts/responsive.js

function openMenu(){
    var navbarMenu = document.getElementById("navbarMenu").style.display;
    if(navbarMenu!="inline-block")document.getElementById("navbarMenu").style.display="inline-block";
    else{
        document.getElementById("navbarMenu").style.display="none";
        document.getElementsByClassName("subMenu")[0].style.display="none";
        document.getElementsByClassName("menuContent")[1].style.height = "20px";
    }
}

function openSubMenu(){
    var subMenu = document.getElementsByClassName("subMenu")[0].style.display;
    if(subMenu!="inline-block"){
        document.getElementsByClassName("subMenu")[0].style.display="inline-block";
        document.getElementsByClassName("menuContent")[1].style.height = 40*document.getElementsByClassName("subMenu")[0].childElementCount+20 + "px";
    }
    else{
        document.getElementsByClassName("subMenu")[0].style.display="none";
        document.getElementsByClassName("menuContent")[1].style.height = "20px";
    }
}

function onLoadPage(){
    var width = window.innerWidth;
    if(0 < width && width <= 550){
        //push
        document.getElementsByClassName("mainMenu")[0].setAttribute("onclick", "openSubMenu()");
    }
    else if(550 < width && width <= 1150){
        //
    }
    else{
        //
    }
}