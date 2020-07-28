function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var estadiaBase = 15000;
	var estadiTotal;
	alert(estacionIngresada);

	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
				estadiTotal=estadiaBase * 1.20;
				break;
		case "Cordoba":
		case "Cataratas":
			estadiTotal=estadiaBase * 0.90;
			break;
		case "Mar del plata":
			estadiTotal=estadiaBase * 0.80;
			break;					
			}
			case "Verano":
				switch(destinoIngresado){
					case "Bariloche":
						estadiTotal=estadiaBase * 0.80;
						break;
					case "Cordoba":
					case "Cataratas":
						estadiTotal=estadiaBase * 1.10;
						break;
					case "Mar del plata":
						estadiTotal=estadiaBase * 1.20;			
				}
		case "Primavera":
		case "Otoño":
			switch(destinoIngresado){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					estadiTotal=estadiaBase * 1.10;
					break;
				case "Cordoba":
					estadiTotal=estadiaBase;
					break;			
			}
		console.log(estadiTotal);					
	}


}//FIN DE LA FUNCIÓN