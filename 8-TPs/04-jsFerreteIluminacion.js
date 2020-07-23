/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     
    //A
    var lamparas;
    var cantidadDeLamparas;
    var marc;
    var descueto;
    var importeFinal;

    mar = Marca.value;
    cantidadDeLamparas = txtIdCantidad.value;
    

    cantidadDeLamparas = parseInt(lamparas);

    if(cantidadDeLamparas >= 6){
        txtIdprecioDescuento.value = (cantidadDeLamparas * descuento) * 0.50;
    }else if(cantidadDeLamparas == 5 && marc == "ArgentinaLuz"){
        txtIdprecioDescuento.value = (cantidadDeLamparas * descuento) * 0.60;
    }else if (cantidadDeLamparas == 5){
        txtIdprecioDescuento.value = (cantidadDeLamparas * descuento) * 0.70;
    }else if (cantidadDeLamparas == 4 && != "ArgentinaLuz")||(cantidadDeLamparas == 4 && marc == "FelipeLamparas"))








    var lamparas;
    var cantidadDeLamparas;
    var mar;
    var descueto;
    var importeFinal;

    mar = Marca.value;
    cantidadDeLamparas = txtIdCantidad.value;
    

    cantidadDeLamparas = parseInt(lamparas);

    if(cantidadDeLamparas>=6){
        descueto = cantidadDeLamparas * lamparas * 0.50;}            
    else if (cantidadDeLamparas>=5 && mar == "ArgentinaLuz"){
        descueto = cantidadDeLamparas * lamparas * 0.40;
    }
    else{descuento = cantidadDeLamparas * lamparas * 0.30;}
    
     if(cantidadDeLamparas ==4 && mar == "ArgentinaLuz" || mar == "FelipeLamparas"){
        descuento = cantidadDeLamparas * lamparas * 0.25;
    }else {
        descuento = cantidadDeLamparas * lamparas * 0.20;
    }
    if(cantidadDeLamparas == 3 && mar == "ArgentinaLuz"){
        descuento = cantidadDeLamparas * lamparas * 0.15;
    }
    if(cantidadDeLamparas ==3 && mar == "FelipeLamparas"){
        descuento = cantidadDeLamparas * lamparas * 0.10;
    }else{
        descuento = cantidadDeLamparas * lamparas * 0.5;
    } 
    if(descuento > 120){
        iibb = (descuento * 0.10);
        descuento = descuento + iibb;
        alert("Usted pagó" + iibb + " de IIBB. " );
    }
    descuento = txtIdprecioDescuento.value;

    
}
    //if (condition){

    //} else if (condition){

    //}else if (condition){
        
    //}
