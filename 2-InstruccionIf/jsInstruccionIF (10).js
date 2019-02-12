function mostrar()
{
	var numeroAzar;

	//Genero el número RANDOM entre 1 y 10

	numeroAzar = Math.floor((Math.random() * 10) + 1);

	if(numeroAzar >= 9)
	{

		alert("Nota: " + numeroAzar + " EXCELENTE");

	}else{

		if(numeroAzar > 4){

			alert("Nota: " + numeroAzar + " APROBÓ");
			
		}else{

			alert("Nota: " + numeroAzar + " Vamos, la proxima se puede.");
		}
	}

}//FIN DE LA FUNCIÓN