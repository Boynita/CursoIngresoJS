
function mostrar()
{//Debemos realizar 
//la carga de una compra 
//de 5(cinco) productos de prevención de contagio,

//de cada una debo obtener los siguientes datos:
//el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,

//el precio (validar entre 100 y 300),
//la cantidad de unidades
//(no puede ser 0 o negativo y no debe superar las 1000 unidades),

//la Marca y el fabricante.
//Se debe Informar al usuario lo siguiente:
//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
//b) Del tipo de producto con más unidades en total 
//de la compra, el promedio por compra
//c) Cuántas unidades de Barbijos se compraron en total
	var contador = 0;
	var tipiDeProducto;
	var precio;
	var cantidadDeUnidades;
	var fabricante;
	var marca;
	var precioMaxJabon;
	var contadorDeJabones = 0;
	var cantidadDeUnidadesJabonesMaximo;
	var cantidadDeUnidades;
	var fabricanteDeJabonesMaximo;
	var cantidadesMaximasTotales = 0;
	var acumuladorDeBarbijos = 0;
	var acumuladorDeJabones = 0;
	var acumuladorDeAlcohol = 0;
	var promedioPorCompra;
	var contadorCompraAlcohol;
	var contadorCompraBarbijos;
	var contadorCompraJabon;


	while(contador < 5){
		contador++;
		
	do{
			tipiDeProducto = prompt("Ingrese el producto");
	}while(tipiDeProducto != "barbijo"
			&& tipiDeProducto != "jabon"
			&& tipiDeProducto != "alcohol");

	do{
			precio = prompt("Ingrese un precio");
			precio = parseInt(precio);
	}while(precio < 100 || > 300 || isNaN(precio));

	do{
		cantidadDeUnidades = prompt("Ingrese cantidad");
		cantidadDeUnidades = parseInt (cantidadDeUnidades);
	}while(cantidadDeUnidades < 1 || cantidadDeUnidades > 1000 || isNaN(cantidadDeUnidades));

	do{
		marca = prompt("Ingrese marca");
	}while(marca == true);

	do{
		fabricante = prompt("Ingrese fabricante");
	}while(fabricante == true);

	if(tipiDeProducto == "jabon"){
		contadorDeJabones++;
		if(contadorDeJabones == 1){
			precioMaxJabon = precio;
			cantidadDeUnidadesJabonesMaximo = cantidadDeUnidades;
			fabricanteDeJabonesMaximo = fabricante;
		}else{
			if(precio > precioMaxJabon){
				precioMaxJabon = precio;
				cantidadDeUnidadesJabonesMaximo = cantidadDeUnidades;
				fabricanteDeJabonesMaximo = fabricante;
			}
		}
	}
	//if(cantidadDeUnidades > cantidadesMaximasTotales){
	//	cantidadesMaximasTotales = cantidadDeUnidades;
	//}


	switch(tipiDeProducto){
		case "alcohol":
			acumuladorDeAlcohol += cantidadDeUnidades;
			contadorCompraAlcohol++;
			break;
		case "barbijo":
			acumuladorDeBarbijos += cantidadDeUnidades;
			contadorCompraBarbijos++;
			break;
		case "jabon":
			acumuladorDeJabones += cantidadDeUnidades;
			contadorCompraJabon++;
			break;		
	}


	}//en while principio


		if(acumuladorDeAlcohol > acumuladorDeBarbijos
			&& acumuladorDeAlcohol > acumuladorDeJabones){
				promedioPorCompra = 
			}else if(acumuladorDeBarbijos > acumuladorDeJabones){
				promedioPorCompra = acumuladorDeAlcohol/cantidadDeUnidades;
			}else{
				promedioPorCompra = acumuladorDeJabones/cantidadDeUnidades;
			}

}


