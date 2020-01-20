







function validation(){

	var user = document.form.username.value
	var pass = document.form.passwd.value

	var passwd= pass.length

	var country =document.form.country.value
	var gender=document.form.gender.value
	var language=document.form.language.value

	if (user==null || user=="") 
	{
		alert ("please Enter a User Name");

		return false;
	}


	/*if (passwd!=null || passwd!="") {

		 if (passwd<7 || passwd>8){
		 	alert("please Enter a password with no. of characters in range 7<=c<=8");
		 	return false;
		 }

	}*/
	}


