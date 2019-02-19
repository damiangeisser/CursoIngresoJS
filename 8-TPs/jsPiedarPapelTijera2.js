var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	
	eleccionMaquina = Math.floor((Math.random() * 3) + 1);

	//Valores de eleccionMaquina: 1 piedra, 2 papel, 3 tijera.


}//FIN DE LA FUNCIÓN
function piedra()
{
	
	if(eleccionMaquina == 1)
	{
		mensaje = "El ordenador eligió piedra. Empate.";

		ContadorDeEmpates++;
	}
	else
	{
		if(eleccionMaquina == 2)
		{
			mensaje = "El ordenador eligió papel. Perdió.";

			ContadorDePerdidas++;
		}
		else
		{
			mensaje = "El ordenador eligió tijera. Ganó.";

			ContadorDeGanadas++;
		}

	}

	alert(mensaje);

	//Llamo a la función para que muestre el resultado.
	mostrarResultado();

	//Vuelvo a generar un valor al azar para que el usuario no la conozca.
	eleccionMaquina = Math.floor((Math.random() * 3) + 1);

}//FIN DE LA FUNCIÓN
function papel()
{

	if(eleccionMaquina == 1)
	{
		mensaje = "El ordenador eligió piedra. Ganó.";

		ContadorDeGanadas++;
	}
	else
	{
		if(eleccionMaquina == 2)
		{
			mensaje = "El ordenador eligió papel. Empate.";

			ContadorDeEmpates++;
		}
		else
		{
			mensaje = "El ordenador eligió tijera. Perdió.";

			ContadorDePerdidas++;
		}

	}

	alert(mensaje);

	//Llamo a la función para que muestre el resultado.
	mostrarResultado();

	//Vuelvo a generar un valor al azar para que el usuario no la conozca.
	eleccionMaquina = Math.floor((Math.random() * 3) + 1);

}//FIN DE LA FUNCIÓN
function tijera()
{
	
	if(eleccionMaquina == 1)
	{
		mensaje = "El ordenador eligió piedra. Perdió.";

		ContadorDePerdidas++;
	}
	else
	{
		if(eleccionMaquina == 2)
		{
			mensaje = "El ordenador eligió papel. Ganó.";

			ContadorDeGanadas++;
		}
		else
		{
			mensaje = "El ordenador eligió tijera. Empate.";

			ContadorDeEmpates++;
		}

	}

	alert(mensaje);

	//Llamo a la función para que muestre el resultado.
	mostrarResultado();

	//Vuelvo a generar un valor al azar para que el usuario no la conozca.
	eleccionMaquina = Math.floor((Math.random() * 3) + 1);

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

	ganadas.value="Ganadas: " + ContadorDeGanadas;
	perdidas.value="Perdidas: " + ContadorDePerdidas;
	empatadas.value="Empatadas: " + ContadorDeEmpates;

}