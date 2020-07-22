function mostrar()
{
	//tomo la edad
	var edad;
	var estadoCivilIngresado;

	edad = txtIdEdad.value;
	estadoCivilIngresado = estadoCivil.value;

	edad = parseInt(edad);

	if (edad <=18 && estadoCivilIngresado != "Soltero"){

		alert ("Es muy pequeño para NO se soltero");
	}



}//FIN DE LA FUNCIÓN