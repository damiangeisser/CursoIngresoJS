function mostrar()
{
	//tomo el mes  
	var mesDelAnio = document.getElementById('mes').value;
	var mensaje;

	switch(mesDelAnio)
	{
		case "Enero":
			mensaje = "¡Que comiences bien el año!";
			break;
		case "Marzo":
			mensaje = "¡A clases!";
			break;
		case "Julio":
			mensaje = "¡Se vienen las vacaciones!";
			break;
		case "Diciembre":
			mensaje = "¡Felices fiestas!";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN