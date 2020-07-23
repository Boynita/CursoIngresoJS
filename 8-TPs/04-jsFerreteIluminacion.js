/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están 
en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca 
"ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca 
"ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca 
"ArgentinaLuz"  el descuento es del 15%, si es  
“FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

E.	Si el importe final con descuento suma más 
de $120  se debe sumar un 10% de ingresos brutos 
en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
     
   var cantidadLamparas;
   var marcaLampara;
   var precioConDescuento; 
   var precioSinDescuento;
   var ingresosBrutos;
   var precioFinal;
   


   cantidadLamparas = parseInt(cantidadLamparas);
   ingresosBrutos = precioConDescuento * 10 / 100;
   precioFinal = 35;
   
   

   cantidadLamparas = txtIdCantidad.value;
   marcaLampara = Marca.value;

   
    if (cantidadLamparas == 6){
        precioConDescuento = (cantidadLamparas * precioFinal) * 50 / 100;
    }else if (cantidadLamparas == 5 && marcaLampara == "ArgentinaLuz"){
        precioConDescuento = (cantidadLamparas * precioFinal) * 40 / 100;   
    }else if (cantidadLamparas == 5 && marcaLampara != "ArgentinaLuz"){
        precioConDescuento = (cantidadLamparas * precioFinal) * 30 /100;
    }else if (cantidadLamparas == 4 && marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas"){
        precioConDescuento = (cantidadLamparas * precioFinal) * 25 / 100;
    }else if(cantidadLamparas == 4 && marcaLampara != "ArgentinaLuza" || marcaLampara != "FelipeLamparas"){
        precioConDescuento = (cantidadLamparas * precioFinal) * 20 / 100;
    }else if (cantidadLamparas == 3 && marcaLampara == "ArgentinaLuz"){
        precioConDescuento = (cantidadLamparas * precioFinal) * 15 /100;
    }else if(cantidadLamparas == 3 && marcaLampara == "FelipeLamparas"){
        precioConDescuento = (cantidadLamparas * precioFinal) * 10 / 100;
    }else if (cantidadLamparas == 3 && marcaLampara != "ArgentinaLuza" || marcaLampara != "FelipeLamparas"){
        precioConDescuento = (cantidadLamparas * precioFinal) * 5 / 100;
    }
    
    if (precioConDescuento >= 120){
        precioConDescuento = precioConDescuento * ingresosBrutos;{
            alert("Uste pagó" - ingresosBrutos - "De ingresos brutos");
        }
    }

    precioConDescuento = txtIdprecioDescuento.value;
   


    
}
    //if (condition){

    //} else if (condition){

    //}else if (condition){
        
    //}
