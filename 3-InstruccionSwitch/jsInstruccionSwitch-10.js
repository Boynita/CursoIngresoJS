function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	alert(estacionIngresada);

	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
					alert("Si se viaja");
					break;
					default:
					alert ("No se viaja");
					break;	
			}
			break;
		case "Verano":
			switch(destinoIngresado){
				case "Cataratas":
				case "Mar del plata":
					break;
				default:
					alert("No se viaja");		
			}
			break;
		case "Otoño":
			alert("Se viaja a todos los destinos");
			break;
		case "Primavera":
			switch(destinoIngresado){
				case "Bariloche":
					alert("No se viaja");
					break;
					default:
					alert("Si se viaja");
					break;	
			}			
	}

}//FIN DE LA FUNCIÓN