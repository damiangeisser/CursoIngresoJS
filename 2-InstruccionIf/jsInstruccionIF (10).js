function mostrar()
{
	var numeroAzar;
	var mensaje;

	//Genero el número RANDOM entre 1 y 10

	numeroAzar = Math.floor((Math.random() * 10) + 1);

	if(numeroAzar >= 9)
	{

		mensaje = "Nota: " + numeroAzar + " EXCELENTE";

	}
	else
	{

		if(numeroAzar >= 4)
		{

			mensaje = "Nota: " + numeroAzar + " APROBÓ";

		}
		else
		{

			mensaje = "Nota: " + numeroAzar + " Vamos, la proxima se puede.";
		}
	}

	alert(mensaje);

	// if(numeroAzar >= 9)
	// {

	// 	alert("Nota: " + numeroAzar + " EXCELENTE");

	// }
	// else
	// {

	// 	if(numeroAzar >= 4)
	// 	{

	// 		alert("Nota: " + numeroAzar + " APROBÓ");

	// 	}
	// 	else
	// 	{

	// 		alert("Nota: " + numeroAzar + " Vamos, la proxima se puede.");
	// 	}
	// }

	// if(numeroAzar >= 9)
	// {

	// 	alert("Nota: " + numeroAzar + " EXCELENTE");

	// }

	// if(numeroAzar >= 4){

	// 	alert("Nota: " + numeroAzar + " APROBÓ");
			
	// }
	// if(numeroAzar < 4)
	// {

	// 	alert("Nota: " + numeroAzar + " Vamos, la proxima se puede.");
		
	// }

}//FIN DE LA FUNCIÓN