/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento;

	importe = txtIdImporte.value;
	importe = parseInt (importe);

	resultado = 0.75 * importe;

	txtIdResultado.value = resultado;

	





}
