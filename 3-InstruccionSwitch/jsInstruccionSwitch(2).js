function mostrar()
{
//tomo el mes
	var mesDelAnio = document.getElementById('mes').value;
	var mensaje;

	switch(mesDelAnio)
	{
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno.";
			break;
		case "Julio":
		case"Agosto":
			mensaje = "Abrigate que hace frío.";
			break;
		default:
			mensaje = "¡Ya pasamos el frío, ahora calor!";
			break;
	}

	alert(mensaje);

	// var mesDelAnio = document.getElementById('mes').value;
	// var mensaje;

	// switch(mesDelAnio)
	// {
	// 	case "Septiembre":
	// 	case "Octubre":
	// 	case "Noviembre":
	// 	case "Diciembre":
	// 	case "Enero":
	// 	case "Febrero":
	// 		mensaje = "¡Ya pasamos el frío, ahora calor!";
	// 		break;
	// 	case "Marzo":
	// 	case "Abril":
	// 	case "Mayo":
	// 	case "Junio":
	// 		mensaje = "Falta para el invierno.";
	// 		break;
	// 	case "Julio":
	// 	case"Agosto":
	// 		mensaje = "Abrigate que hace frío.";
	// 		break;
	// }

	// alert(mensaje);

}//FIN DE LA FUNCIÓN