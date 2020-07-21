function mostrar()
{
	//tomo la edad 
	var edad; 
	

	edad = txtIdEdad.value;
	

	if (edad >= 18) {

		alert("Es mayor de edad");
	} else {
		if (edad >= 13){
			alert ("Es adolescente");
		
		} else {
			alert ("Es un niño");
		}
	}




}
