/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
var temperaturaIngresada;
var centigrados;

temperaturaIngresada = Temperatura.value;
temperaturaIngresada = parseInt(temperaturaIngresada);

centigrados = temperaturaIngresada * (9/5) + 32;

temperaturaIngresada = temperaturaIngresada

alert(temperaturaIngresada + "º Fahrenheit equivalen a " + centigrados + "º Centígrados" );



}

function CentigradosFahrenheit () 
{
	
var temperaturaIngresada;
var fahrenheit;

temperaturaIngresada = Temperatura.value;
temperaturaIngresada = parseInt(temperaturaIngresada);

fahrenheit = (temperaturaIngresada - 32) * (5/9);


alert(temperaturaIngresada + "º Fahrenheit equivalen a " + centigrados + "º Centígrados" );
}
