// scripts/registration.js

var lastResult = false;

function validate(){
	var form=document.forms["registration"].elements;
	var name=form["name"].value;
	var email=form["email"].value;
	var pass1=form["pass1"].value;
	var pass2=form["pass2"].value;
	var address=form["address"].value;
	var city=form["city"].value;
	var gender=form["gender"].value;
	var error="";
	if(name==""){
		error="Enter your name";
	}
	else if(email==""){
		error="Enter your email";
	}
	else if(pass1==""){
		error="Enter Your Password";
	}
	else if(pass1.length<8){
		error="Your password should 8-20 characters length"
	}
	else if(pass1.length>20){
		error="Your password should 8-20 characters length"
	}
	else if(pass2==""){
		error="Repeat your password";
	}
	else if(pass2!=pass1){
		error="Password does not match";
	}
	else if(address==""){
		error="Enter your address";
	}
	else if(city==""){
		error="Choose your city";
	}
	else if(gender==""){
		error="Choose your gender";
	}
	else{
		if(lastResult == true)return true;
		document.getElementById("background").style.display="block";
		document.getElementById("dialog-box").style.display="block";
		document.getElementById("dialog-box").innerHTML="Registration Success !";
		lastResult = true;
		return false;
	}
	document.getElementById('error').innerHTML=error;
	lastResult=false;
	return false;
}

function clean(){
	var form=document.forms["registration"].elements;
	form["name"].value="";
	form["email"].value="";
	form["pass1"].value="";
	form["pass2"].value="";
	form["address"].value="";
	form["city"].value="";
	form["gender"].value="";
}


function exit(){
	console.log(document.forms["registration"].method);
	document.getElementById("background").style.display="none";
	document.getElementById("dialog-box").style.display="none";
	console.log(document.getElementById("registration").submit);
	clean();
}

// EOF