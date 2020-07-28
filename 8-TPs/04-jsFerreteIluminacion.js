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
     
 //  var cantidadLamparas;
  // var marcaLampara;
 //  var precioConDescuento; 
 //  var precioSinDescuento;
  // var ingresosBrutos;
  // var precioFinal;
   


  // cantidadLamparas = parseInt(cantidadLamparas);
  // ingresosBrutos = precioConDescuento * 10 / 100;
  // precioFinal = 35;
   
   

  // cantidadLamparas = txtIdCantidad.value;
   //marcaLampara = Marca.value;

  // 
   // if (cantidadLamparas == 6){
  //      precioConDescuento = (cantidadLamparas * precioFinal) * 50 / 100;
  //  }else if (cantidadLamparas == 5 && marcaLampara == "ArgentinaLuz"){
   //     precioConDescuento = (cantidadLamparas * precioFinal) * 40 / 100;   
  //  }else if (cantidadLamparas == 5 && marcaLampara != "ArgentinaLuz"){
  //      precioConDescuento = (cantidadLamparas * precioFinal) * 30 /100;
  //  }else if (cantidadLamparas == 4 && marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas"){
  //      precioConDescuento = (cantidadLamparas * precioFinal) * 25 / 100;
  //  }else if(cantidadLamparas == 4 && marcaLampara != "ArgentinaLuza" || marcaLampara != "FelipeLamparas"){
  //      precioConDescuento = (cantidadLamparas * precioFinal) * 20 / 100;
   // }else if (cantidadLamparas == 3 && marcaLampara == "ArgentinaLuz"){
   //     precioConDescuento = (cantidadLamparas * precioFinal) * 15 /100;
  //  }else if(cantidadLamparas == 3 && marcaLampara == "FelipeLamparas"){
   //     precioConDescuento = (cantidadLamparas * precioFinal) * 10 / 100;
   // }else if (cantidadLamparas == 3 && marcaLampara != "ArgentinaLuza" || marcaLampara != "FelipeLamparas"){
  //      precioConDescuento = (cantidadLamparas * precioFinal) * 5 / 100;
   // }
    
  //  if (precioConDescuento >= 120){
   //     precioConDescuento = precioConDescuento * ingresosBrutos;{
   //         alert("Uste pagó" - ingresosBrutos - "De ingresos brutos");
   //     }
   // }

   // precioConDescuento = txtIdprecioDescuento.value;



    var lamparitas;
    var marcaDeLampara;
    var descuento;
    var total;
    var impuestos;
    descuento = 0;
    lamparitas = txtIdCantidad.value;
    marcaDeLampara = Marca.value;
    

    //revisa la cantidad de lamparas y el descuento correspondiente de la marca
   // if (lamparitas>5){
   //    descuento = 0.5;
   // } 

    //este switch revisa un numero particular de lamparas compradas y su marca para asignar descuento
  //  switch (lamparitas){  
     //  case 5:
     //     if (marcaDeLampara == "ArgentinaLuz"){
      //       descuento =0.4;
     //     } else {
     //        descuento =0.3;
     //     } break;
     //   case 4:
     //      if (marcaDeLampara=="ArgentinaLuz" || marcaDeLampara=="FelipeLamparas") {
     //         descuento = 0.25;
    //      } else {
     //         descuento = 0.2;
     //     } break;
     //   case 3:
    //       if (marcaDeLampara == "ArgentinaLuz"){
    //          descuento = 0.15;
    //       } else if (marcaDeLampara == "FelipeLamparas"){
   //           descuento = 0.1;
   //        } else {
      //        descuento = 0.05;
  //         }

  //  }

         //calcula el total y aplica descuentos
        // total = (lamparitas * 35);
        // total = total - (total*descuento);
    
         //revisa si es mayor de 120 y aplica impuestos
        // if (total>120){
       //     impuestos = total*0.1;
       //     total = total+impuestos;
        //     alert("IIBB Usted pago "+impuestos+"$");
       //  }
    
         
     //    txtIdprecioDescuento.value=total+"$";



     var precioLampara;
     precioLampara = 35;
     var cantidadDeLamparasCompradas;
     cantidadDeLamparasCompradas = parseInt(txtIdCantidad.value);
     var marcaLampara;
     marcaLampara = Marca.value;
     var subTotal;
     subTotal = cantidadDeLamparasCompradas * precioLampara;
     var precioConDescuento;
     precioConDescuento = subTotal;
     txtIdPrecioDescuento.value = precioConDescuento;
     var iibb;
     var precioTotal;
 
 
     if (cantidadDeLamparasCompradas>=6) {
         precioConDescuento = subTotal * 0.50;
     } else {
         if (cantidadDeLamparasCompradas===5) {
             switch(marcaLampara) {
                 case "ArgentinaLuz":
                     precioConDescuento = subTotal * 0.60;
                     break;
                 default:
                     precioConDescuento = subTotal * 0.70;
                     break;
             }
         } else {
             if (cantidadDeLamparasCompradas===4) {
                 switch (marcaLampara) {
                     case "ArgentinaLuz":
                     case "FelipeLamparas":
                         precioConDescuento = subTotal * 0.75;
                         break;
                     default:
                          precioConDescuento = subTotal * 0.80;
                          break;
                 }
             } else {
                 if (cantidadDeLamparasCompradas===3) {
                     switch (marcaLampara) {
                         case "ArgentinaLuz":
                             precioConDescuento = subTotal * 0.85;
                             break;
                         case "FelipeLamparas":
                             precioConDescuento = subTotal * 0.90;
                             break;
                         default:
                             precioConDescuento = subTotal * 0.95;
                             break;
                     }
                 }
              }
         }
     }
 
     //tema IIBB
     if (precioConDescuento>=120) {
         iibb = precioConDescuento * 0.10;
         alert("Usted pago " + iibb + " de IIBB.")
     } else {
         iibb = 0;
     }
 
     precioTotal = precioConDescuento + iibb;
     
    
   


    
}
    //if (condition){

    //} else if (condition){

    //}else if (condition){
        
    //}
