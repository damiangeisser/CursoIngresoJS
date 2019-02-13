/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var numeroIngresado; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	//numeroSecreto = Math.floor((Math.random() * 2) + 1);
	numeroSecreto = 10;

	contadorIntentos = 0;
	

}

function verificar()
{

	numeroIngresado = numero.value;
	numeroIngresado = parseInt(numeroIngresado);

	contadorIntentos++;

	if(numeroSecreto == numeroIngresado )
	{
		alert("¡Usted es un ganador! Y en solo " + contadorIntentos + " intentos.");
	}
	else
	{
		if(numeroSecreto < numeroIngresado)
		{
			alert("Se pasó del número secreto.");
		}
		else
		{
			alert("Falta para el número secreto.");
		}
	}

	intentos.value = contadorIntentos;
	
}