function mostrar()
{
   /* Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento 
sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento 
sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/


    var tipo;//validad("arena";"cal";"cemento")
    var cantidadDeBolsas;
    var precioPorBolsa;
    var respuesta;
    var acumuladorDeBolsas;
    var precioBrutoProducto;
    var precioBrutoTotal;
    var porcentaje;
    var descuento;
    var precioConDescuento;
    var acumuladorCal;
    var acumuladorArena;
    var acumuladorCemento;
    var tipoConMasunidades;
    var banderaDelPrimerProducto;
    var tipoMasCaro;
    var tipoMasCaroPrecio;

    banderaDelPrimerProducto= "es el primero";
    acumuladorCal=0;
    acumuladorArena=0;
    acumuladorCemento=0;
    acumuladorDeBolsas=0;
    precioBrutoTotal=0;
    respuesta=="s"

    while(respuesta =="s"){
        tipo = prompt("Ingrese el tipo");
        while(tipo != "arena"&& != "cal"&& != "cemento"){
        tipo = prompt("Error, ingrese el tipo");
        }

        //Cantidad de bolsas,
        cantidadDeBolsas= prompt("Ingrese cantidad de bolsas");
        cantidadDeBolsas= parseInt(cantidadDeBolsas);
        while(cantidadDeBolsas<1){
        cantidadDeBolsas= prompt("Error, ingrese cantidad de bolsas");
        cantidadDeBolsas= parseInt(cantidadDeBolsas);
        }

        //Precio por bolsa (más de cero ),
        precioPorBolsa= prompt("Ingrese cantidad de bolsas");
        precioPorBolsa= parseInt(precioPorBolsa);
        while(precioPorBolsa<1){
        precioPorBolsa= prompt("Error, ingrese cantidad de bolsas");
        precioPorBolsa= parseInt(precioPorBolsa);
        }

        acumuladorDeBolsas=acumuladorDeBolsas+cantidadDeBolsas;
        precioBrutoProducto=cantidadDeBolsas*precioPorBolsa;
        precioBrutoTotal=precioBrutoTotal+precioBrutoProducto;

        if(banderaDelPrimerProducto=="es el primero"){

            banderaDelPrimerProducto=="ya paso";
            tipoMasCaro=tipo;
            tipoMasCaroPrecio=precioPorBolsa;
        }else{
            if(precioPorBolsa>tipoMasCaroPrecio){
            tipoMasCaro=tipo;
            tipoMasCaroPrecio=precioPorBolsa;
            }
        }

        switch(tipo){
            case "arena"
            acumuladorArena=acumuladorArena+cantidadDeBolsas;
            break;
            case "cal"
            acumuladorCal=acumuladorCal+cantidadDeBolsas;
            break;
            case "cemento"
            acumuladorCemento=acumuladorCemento+cantidadDeBolsas;
            break;
        }








        respuesta=prompt("Desea seguir?");
    }

    if(acumuladorArena>acumuladorCemento&&acumuladorArena>acumuladorCal){

        tipoConMasunidades="arena";
    }else{
        if(acumuladorCal>acumuladorArena){
            tipoConMasunidades="cal";
        }else{
            tipoConMasunidades="cemento";
        }
    }

    if(acumuladorDeBolsas>30){

        porcentaje=25;

    }else{

        if(acumuladorDeBolsas>10){

            porcentaje=15;

        }else{
            porcentaje=0;
        }
    }
    if(porcentaje!=0){

        descuento=precioBrutoTotal*porcentaje/100;
        precioConDescuento=precioBrutoTotal-descuento;
        console.log("pagar con descuento: "+precioBrutoTotal);
        console.log("el tipo mas comprado es: "+tipoConMasunidades)
    }

    //a) El importe total a pagar , bruto sin descuento
    console.log("bruto sin descuento: "+precioBrutoTotal);
   


}
