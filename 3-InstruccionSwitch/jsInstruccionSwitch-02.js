function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	switch(mesDelAño){
		case "Julio":
		case "Agosto":
			alert(" Abrigate que hace frio ");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, Ahora calor!");
		default:
			break;						
	}


}//FIN DE LA FUNCIÓN