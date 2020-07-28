function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);
	
	switch(destinoIngresado){
		case "Bariloche":
			alert("Frio");
			break;
		case "Cataratas":
			alert("Calor");
			break;
		case "Mar del plata":
			alert("Frio y calor");
			break;
		case "Ushuaia":
			alert("Frio");
			break;
				
	}

}//FIN DE LA FUNCIÓN