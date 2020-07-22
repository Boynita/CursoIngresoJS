function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numeroRandom;
	var maximo;
	var minimo;

	maximo = 11;
	minimo = 1;

	numeroRandom = Math.floor(Math.random()*(maximo - minimo)) + minimo;

	alert(numeroRandom);
	console.log(numeroRandom);
}//FIN DE LA FUNCIÓN