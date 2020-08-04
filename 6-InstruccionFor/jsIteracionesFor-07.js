function mostrar()
{	
	var numeroUno;
	var numeroDos;
	var repeticiones;

	numeroUno=0;
	numeroDos=0;

	repeticiones =prompt("Ingrese un numero");
	
	while(isNaN(repeticiones)){
		repeticiones = prompt ("Incorrecto. Ingrese un numero solo numero");
	}

	for(numeroUno=1; numeroUno<=repeticiones; numeroUno++){

		if (repeticiones%numeroUno==0){
			console.log(numeroUno);
			numeroDos++;
		}
	}

	console.log("La contidad de numero divisiores es" + numeroDos);

}//FIN DE LA FUNCIÓN