// scripts/product.js

$(document).ready( function(){
    var viewportWidth = window.innerWidth;
    if(viewportWidth > 650){
        $("#products").css({ width: Math.floor(viewportWidth/300)*300 });
    }
} );

// EOF