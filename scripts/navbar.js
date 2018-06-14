var flag = -1;
var flag2 = -1;
function display(){
    if(flag == -1) flag = 0;
    var x = document.getElementsByClassName("menuContent");
    if(document.getElementById("navbarBurger").style.display == "none") return ;
    if(x[0].style.display == "none") {
        for(var i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
        x ^= 1;
    }
    else {
        for(var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    }
}

function displaytypes(){
    if(flag2 == -1) flag2 = 0;
    var x = document.getElementsByClassName("subContent");
    if(document.getElementById("navbarBurger").style.display == "none") return ;
    if(x[0].style.display == "none") {
        for(var i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
        x ^= 1;
    }
    else {
        for(var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    }
}