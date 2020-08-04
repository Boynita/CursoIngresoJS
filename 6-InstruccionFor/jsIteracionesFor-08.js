function mostrar()
{
	var numerosPrimos = 0;
	var esPrimo;
	var noEsPrimo;


	numerosPrimos = prompt("Ingrese un numero");
	numerosPrimos = parseInt (numerosPrimos);


	while (numerosPrimos > 0) {

		esPrimo = 1;

        for (esPrimo = 2; esPrimo < numerosPrimos; ++esPrimo) {

            if (numerosPrimos % esPrimo == 0) {
                esPrimo = 0;
                break;
            }
	}

}
        
console.log("La cantidad de numeros primos son." + esPrimo);
		
}//FIN DE LA FUNCIÓN