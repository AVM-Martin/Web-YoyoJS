// scripts/product.js

function loadPage(){
	var viewportWidth = window.innerWidth;
	if(viewportWidth > 650){
		document.getElementById("products").style.width = Math.floor(viewportWidth/300) * 300 + "px";
	}
}

// EOF