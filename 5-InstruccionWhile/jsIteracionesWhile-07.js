/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;
	contador=0;
	acumulador=0;
	respuesta=true;


	while(respuesta){


		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero)){
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);	
		}

		acumulador+=numero;
		contador++;

		respuesta = confirm("Desea continuar?");
	}

	

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN