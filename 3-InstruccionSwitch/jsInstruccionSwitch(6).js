function mostrar()
{
	//tomo la hora
	var laHora;
	var mensaje;

	laHora = document.getElementById('hora').value;

	switch(laHora)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje = "Es de mañana.";
			break;
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			mensaje = "Es de tarde.";
			break;
		case "20":
		case "21":
		case "22":
		case "23":
		case "24":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
			mensaje = "Es de noche.";
			break;
		default:
			mensaje = "Debe ingresar un número entre 1 y 24";
			break;
	}

	alert(mensaje);

	// Una alternativa con if:

	// var mensaje;
	// laHora = parseInt(laHora);

	// if(laHora >=7 && laHora <= 11)
	// {
	// 	mensaje = "Es de mañana";
	// }
	// else
	// {
	// 	if(laHora >= 12 && laHora <= 19)
	// 	{
	// 		mensaje = "Es de tarde.";
	// 	}
	// 	else
	// 	{
	// 		mensaje = "Es de noche";
	// 	}
	// }

	// alert(mensaje);

}//FIN DE LA FUNCIÓN