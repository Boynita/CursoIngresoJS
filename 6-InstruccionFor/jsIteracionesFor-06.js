function mostrar()
{
	
	var cantidadDeRepeticiones;
	var contadorDePares = 0;


	do{
		cantidadDeRepeticiones = prompt("Ingrese los numeros");
		cantidadDeRepeticiones =parseInt(cantidadDeRepeticiones);
	}while(cantidadDeRepeticiones < 1 || isNaN(cantidadDeRepeticiones));
		
	for(var i=2;i<cantidadDeRepeticiones;i+=2){

		if(i % 2==0){
			//Es Par
			console.log(i);
			contadorDePares++;
		}
	}
	

}//FIN DE LA FUNCIÓN