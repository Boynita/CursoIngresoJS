/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var contadorNegativos=0;
	var contadorPositivos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var promedioNegativos;
	var promedioPositivos;
	var diferencia;


	//Inicio de problema

	do{
		do{
			numeroIngresado = prompt("Ingrese un numero.");
			numeroIngresado = parseInt(numeroIngresado);

		}while(isNaN(numeroIngresado));



	//Punto 1 y 4

	if (numeroIngresado<0){	

		sumaNegativos = sumaNegativos + numeroIngresado;
		contadorNegativos++;
	}else{	
		//Punto 2 y 3
		if(numeroIngresado>0){	
			sumaPositivos += numeroIngresado;
			contadorPositivos++;
		}else{	
			// Punto 5
			contadorCeros++;

		}

	}
	if(numeroIngresado %2==0){
			contadorPares++;
	}
	respuesta="si";

	respuesta=prompt("desea continuar?");
	//Punto 7
	if(contadorNegativos>0){
		promedioNegativos = sumaNegativos / contadorNegativos;
	}

	//Punto 8
	if(contadorPositivos>0){
		promedioPositivos = sumaPositivos / contadorPositivos;
	}


	}
	 

	//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);


}//FIN DE LA FUNCIÓN