/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	sexoIngresado = sexoIngresado.toLocaleLowerCase();
	
	while(sexoIngresado != "f" && sexoIngresado != "m"){
		sexoIngresado = prompt("Ingrese sexo valido. ");
	}

	
	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN