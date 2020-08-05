function mostrar()
{
  var respuesta;
  var tipo;
  var precio;
  var cantidad;


  do{
    precio = prompt("Ingrese un precio");
    precio = parseInt(precio);
  }while(isNaN(precio) || precio > 0);

  do{
    cantidad = prompt("ingrese la cantidad");
    cantidad = parseInt(cantidad);
  }while(isNaN(cantidad) || cantidad > 0);
}
