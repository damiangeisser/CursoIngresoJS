function mostrar()
{
	//tomo el mes
	var mesDelAnio = document.getElementById('mes').value;
	var mensaje;

	switch(mesDelAnio)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 días.";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 días.";
			break;
		default:
			mensaje = "Este mes tiene 31 días.";
			break;
	}

	alert(mensaje);

	// var mesDelAnio = document.getElementById('mes').value;
	// var mensaje;

	// switch(mesDelAnio)
	// {
	// 	case "Febrero":
	// 		mensaje = "Este mes tiene 28 días.";
	// 		break;
	// 	case "Abril":
	// 	case "Junio":
	// 	case "Septiembre":
	// 	case "Noviembre":
	// 		mensaje = "Este mes tiene 30 días.";
	// 		break;
	// 	case "Enero":
	// 	case "Marzo":
	// 	case "Mayo":
	// 	case "Julio":
	// 	case "Agosto":
	// 	case "Octubre":
	// 	case "Diciembre":
	// 		mensaje = "Este mes tiene 31 días.";
	// 		break;
	// }

	// alert(mensaje);

}//FIN DE LA FUNCIÓN