/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var contador = 0;

	claveIngresada = prompt("Ingrese la clave.");

	while(claveIngresada != "utn750"){
		contador++;

		if(contador == 3){
			alert("Ya no tiene mas intentos. ");
			break;
		}
		
		claveIngresada = prompt("Error! Ingrese la clave correcta. ");
	}


}//FIN DE LA FUNCIÓN
