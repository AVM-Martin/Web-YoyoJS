// scripts/tutorial.js

var activeSlider;

// re-align all sliders
function alignAllSlidersForDesktop(names){
    var width = $(".tutorial.desktop").width();
    var height = $(".tutorial.desktop").height();
    var navbarHeight = $(".desktop .tutorialNavbar").height();
    var radioHeight = $(".desktop .tutorialGuidance#radio").height();
    $(".desktop .tutorialGuidance#leftArrow").css({ height: height-navbarHeight });
    $(".desktop .tutorialGuidance#rightArrow").css({ height: height-navbarHeight });
    $(".desktop .tutorialContainer").css({ width: width, height: height-navbarHeight-radioHeight-25 });
    $(".desktop .step").css({ width: width });
    for (var i = names.length - 1; i >= 0; i--) {
        var num = $(".desktop " + names[i] + " .step").length;
        $(".desktop " + names[i] + ".stepsContainer").css({ width: width*num });
    }
}

function alignAllSlidersForMobile(names){
    var width = $(".tutorial.mobile .tutorialContainer").width();
    var height = $(".tutorial.mobile .tutorialContainer").height();
    var radioHeight = $(".desktop .tutorialGuidance#radio").height();
    $(".mobile .tutorialGuidance#leftArrow").css({ height: height + radioHeight + 25 });
    $(".mobile .tutorialGuidance#rightArrow").css({ height: height + radioHeight + 25 });
    $(".mobile .step").css({ width: width });
    for (var i = names.length - 1; i >= 0; i--) {
        var num = $(".mobile " + names[i] + " .step").length;
        $(".mobile " + names[i] + ".stepsContainer").css({ width: width*num });
    }
}

// move the slider based on step
function moveSlider(type, step){
    //setup
    var obj = $(type + " .stepsContainer.active");
    var width = $(type + " .tutorialContainer").width();
    var num = $(type + " .active > .step").length;
    var widthAll = $(type + " .stepsContainer.active").width();
    var position = parseInt(obj.css("right"));
    var nth1 = Math.round(position/width + 1 + step)%num;
    if(nth1===0)nth1=num;
    var nth0 = nth1-1;
    //go
    obj.animate(
        /* direction */{
            right: (nth0%num)*width
        },
        1000,
        function(){
            $(type + " input[type='radio']:nth-child("+nth1+")").prop("checked", true);
        }
    );
}

// toggle the active tutorial tab
function showTutorial(obj){
    $(".desktop .tutorialType.active").removeClass("active");
    $(obj).addClass("active");
    window.clearInterval(activeSlider);
    var name = "#" + $(obj).html().replace(/ /g,'').toLowerCase();
    activeSlider = slider(".desktop", name);
}

// set active slider based on active tutorial tab
function slider(type, name){
    //toggle
    $(type + " .stepsContainer.active").removeClass("active");
    $(type + " " + name + ".stepsContainer").addClass("active");
    //setup
    var num = $(type + " .active > .step").length;
    $(type + " .radioContainer").html("");
    for(var i=0; i<num; i++){
        $(type + " .radioContainer").html($(type + " .radioContainer").html()+"<input type=\"radio\" name=\"slideNumber" + type + name + "\" disabled>");
    }
    $(type + " input[type='radio']:first-child").prop("checked", true);
    $(type + " .stepsContainer.active").css("right", "");

    return setInterval(
        function(){
            moveSlider(type, 1);
        },
        8000
    );
}

//================================================================
// main

$(document).ready( function(){
    var tutorialTypes = ["#elevator","#forwardpass","#longsleeper","#rocket","#rockthebaby"];
    alignAllSlidersForDesktop(tutorialTypes);
    alignAllSlidersForMobile(tutorialTypes);
    if(window.innerWidth > 550){
        activeSlider = slider(".desktop", "#elevator");
    }
    else{
        for (var i = tutorialTypes.length - 1; i >= 0; i--) {
            slider(".mobile" + tutorialTypes[i], tutorialTypes[i]);
        }
    }
} );

// EOF