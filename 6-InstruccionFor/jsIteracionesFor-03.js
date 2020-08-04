function mostrar()
{	

	var cantidadDeRepeticiones;

	do{
		cantidadDeRepeticiones = prompt("Ingrese cantidad de repeticiones");
		cantidadDeRepeticiones = parseInt(cantidadDeRepeticiones);
	}while(cantidadDeRepeticiones < 1 || isNaN(cantidadDeRepeticiones));
	
	for(var i =0; i < cantidadDeRepeticiones; i++){
		alert("Hola UTN FRA");
	}
}//FIN DE LA FUNCIÓN