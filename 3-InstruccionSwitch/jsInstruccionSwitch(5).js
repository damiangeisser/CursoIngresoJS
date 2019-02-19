function mostrar()
{
//tomo la hora  
	var laHora = document.getElementById('hora').value;
	var mensaje;

	switch(laHora)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje = "Es de mañana";
			break;
	}

	alert(mensaje);

	// Una alternativa con if:

	// laHora = parseInt(laHora);

	// if(laHora >=7 && laHora <= 11){
	// 	alert("Es de mañana");
	// }
	
	
}//FIN DE LA FUNCIÓN