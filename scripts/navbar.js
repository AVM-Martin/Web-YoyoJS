// scripts/navbar.js

function displayMenu(){
    if($("#navbarBurger").css("display") == "none"){
        return;
    }
    if($("#navbarMenu").css("display") == "none"){
        $("#navbarMenu").css("display", "inline-block");
    }
    else{
        $("#navbarMenu").css("display", "none");
        $(".subContent").css("display", "none");
        $("div.menuContent").css({ height: "initial" });
    }
}

function displaySubMenu(){
    if($("#navbarBurger").css("display") == "none"){
        return;
    }
    if($(".subContent").css("display") == "none"){
        var height = $("div.menuContent").height();
        $(".subContent").css("display", "inline-block");
        $("div.menuContent").css({ height: "auto" });
    }
    else{
        $(".subContent").css("display", "none");
        $("div.menuContent").css({ height: "initial" });
    }
}

// EOF