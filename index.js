		









function validation(){

	var user = document.form.username.value
	var pass = document.form.passwd.value
	
	var passwd= pass.length

	var address=document.form.address.value

	

	if (user==null || user=="") 
	{
					alert ("please Enter a User Name");
				

		return false;
	}


	if (passwd!=null || passwd!="") {

		 if (passwd<7 || passwd>8){
		 	alert("please Enter a password with no. of characters in range 7<=c<=8 ");
		 	return false;
		 }

	}



	if (address==null || address=="") 
	{
		alert ("please Enter your address");

		return false;
	}


	}



	function hover(){
		
		

					document.getElementById('reg').style.color="green";
					return false;
		


	}


function nothover(){
		

					document.getElementById('reg').style.color="black";
					return false;
		

	}
