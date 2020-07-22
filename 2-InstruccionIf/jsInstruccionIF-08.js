function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoIngresadoPorUsuario;

	edad = txtIdEdad.value;
	estadoIngresadoPorUsuario = estadoCivil.value;

		if (edad >= 18 && estadoIngresadoPorUsuario == "Soltero"){

			alert ("Es soltero y no es menor");
		}
		
	

}//FIN DE LA FUNCIÓN