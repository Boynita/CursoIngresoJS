/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var aumento;
	var resultado;

	sueldo = txtIdSueldo.value;

	sueldo = parseInt(sueldo);

	aumento = (sueldo *10) /100;

	resultado = sueldo + aumento;

	txtIdResultado.value = resultado;

	//EJEMPLOS (regla de 3 simples)
	//100% -------------> sueldo
	//10% --------------> X = 10% * sueldo = 0.1 * sueldo = 0.1 * sueldo
	//                                100%
	//total = sueldo + X

	//100% --------------> sueldo
	//110% --------------> X = 100% * sueldo

	//total = (110* sueldo) / 100;
	// total = 1.1 * sueldo;


}
