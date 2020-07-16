/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
   var fahrenheit;
   var centigrados;
   
   
   temperatura = txtIdTemperatura.value;

   temperatura = parseInt(temperatura);

   centigrados = 5/9*(fahrenheit - 32);

   alert ("Los temperatura en grados es: " + fahrenheit);

    



}

function CentigradosFahrenheit () 
{
    
    

    var temperatura;
    var fahrenheit;
    
    
    temperatura = txtIdTemperatura.value;

    temperatura = parseInt(temperatura);
 
    fahrenheit = (temperatura * 9/5) + 32;
 
    alert ("La temperatura en fahrenheit es: " + fahrenheit);

 


}
