/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var elecccionJugador;
var mensaje;

function comenzar()
{
	
eleccionMaquina = Math.floor((Math.random() * 3) + 1);

//Valores de eleccionMaquina: 1 piedra, 2 papel, 3 tijera.

}//FIN DE LA FUNCIÓN
function piedra()
{
	
	if(eleccionMaquina == 1)
	{
		mensaje = "El ordenador eligió piedra. Empate.";
	}
	else
	{
		if(eleccionMaquina == 2)
		{
			mensaje = "El ordenador eligió papel. Perdió.";
		}
		else
		{
			mensaje = "El ordenador eligió tijera. Ganó.";
		}

	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
function papel()
{

	if(eleccionMaquina == 1)
	{
		mensaje = "El ordenador eligió piedra. Ganó.";
	}
	else
	{
		if(eleccionMaquina == 2)
		{
			mensaje = "El ordenador eligió papel. Empate.";
		}
		else
		{
			mensaje = "El ordenador eligió tijera. Perdió.";
		}

	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
function tijera()
{
	
	if(eleccionMaquina == 1)
	{
		mensaje = "El ordenador eligió piedra. Perdió.";
	}
	else
	{
		if(eleccionMaquina == 2)
		{
			mensaje = "El ordenador eligió papel. Ganó.";
		}
		else
		{
			mensaje = "El ordenador eligió tijera. Empate.";
		}

	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN