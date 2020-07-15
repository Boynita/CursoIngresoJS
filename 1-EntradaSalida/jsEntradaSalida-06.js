/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	
	
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	
	suma = numeroUno + numeroDos;
	
	//COMENTARIOS DE CALSE 15-07
	//suma = parseInt(numeroUno) + parseInt(numeroDos);
	//Ejemplo
	//alert("La suma es: " (parseInt (numeroUno) + parseInt (numeroDos));

	
	
	alert("La suma es: " + suma);
}	


