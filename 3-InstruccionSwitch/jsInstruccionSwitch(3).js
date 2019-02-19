function mostrar()
{
	//tomo el mes
	var mesDelAnio = document.getElementById('mes').value;
	var mensaje;

	switch(mesDelAnio)
	{
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
			break;
		default:
			mensaje = "Este mes tiene 30 o más días.";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN