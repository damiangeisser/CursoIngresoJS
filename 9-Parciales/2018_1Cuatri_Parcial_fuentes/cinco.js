function mostrar()
{

	var planeta;
	var mensaje;

	planeta = prompt("Por favor ingrese el nombre de un planeta en minúsculas y presione aceptar:");

	switch(planeta)
	{
		case "mercurio":
		case "venus":
			mensaje = "Acá hace calor";
			break;
		case "tierra":
			mensaje = "Acá vivimos";
			break;
		case "marte":
		case "júpiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "plutón":
			mensaje = "Acá hace frío."
			break;
		default:
			mensaje = "No ingresó un planeta válido o no fue escrito en minúsculas o con tildes, por ejemplo: júpiter";
			break;
	}

	alert(mensaje);

}
