function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	

	contador=0;
	acumulador=0;

	while(contador < 5){
		numeroIngresado = prompt("Ingrese un número. ");

		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Ingrese un número válido. ");

			numeroIngresado = parseInt(numeroIngresado);
			
		}

		acumulador = acumulador + numeroIngresado;

		contador++;
		
	 }
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN