
// Exercise 6
function validate() {
	var error = 0;
	var letters = /^[A-Za-z]+$/;
	var letterNumber = /^[0-9a-zA-Z]+$/;

	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail").value.indexOf("@");

	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail"); 

	var errorAddress = document.getElementById("errorAddress"); 
	var errorLastN = document.getElementById("errorLastN"); 
	var errorPassword = document.getElementById("errorPassword"); 
	var errorPhone = document.getElementById("errorPhone"); 

	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || fName.value.length < 3 || fName.value.match(letters) !== true){
		document.getElementById("fName").style.border="2px solid red";
		errorName.style.display = 'block';
		error++;
	}

	if(fLastN.value == "" || fLastN.value.length < 3 || fLastN.value.match(letters) !== true){
		document.getElementById("fLastN").style.border="2px solid red";
		errorLastN.style.display = 'block';
		error++;
	}

	if(fAddress.value == "" || fAddress.value.length < 3){
		document.getElementById("fAddress").style.border="2px solid red";
		errorAddress.style.display = 'block';
		error++;
	}


	if(fEmail == "" || fEmail.length < 3 || fEmail == -1){
		document.getElementById("fEmail").style.border="2px solid red";
		errorEmail.style.display = 'block';
		error++;
	}

	if(fPassword.value == "" || fPassword.value.length < 3 || fPassword.value.match(letterNumber) !== true){
		document.getElementById("fPassword").style.border="2px solid red";
		errorPassword.style.display = 'block';
		error++;
	}


	if(fPhone.value == "" || fPhone.value.length < 3 || isNaN(fPhone.value)){
		document.getElementById("fPhone").style.border="2px solid red";
		errorPhone.style.display = 'block';
		error++;
	}
	

	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
