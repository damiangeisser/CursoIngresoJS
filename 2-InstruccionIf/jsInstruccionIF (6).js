function mostrar()
{
	
	var edadIngresada;

	//tomo la edad	

	edadIngresada = edad.value;
	edadIngresada = parseInt(edadIngresada);
	
	if(edadIngresada < 13)
	{

		alert("La persona es menor de edad.");

	}
	else
	{

		if(edadIngresada >= 13 && edadIngresada <= 17)
		{

		alert("La persona es adolescente.");

		}
		else
		{
			alert("La persona es mayor de edad.");
		}

	}

	// if(edadIngresada < 13)
	// {

	// 	alert("La persona es menor de edad.");

	// }

	// if(edadIngresada >= 13 && edadIngresada <= 17)
	// {

	// 	alert("La persona es adolescente.");

	// }

	// if(edadIngresada > 17)
	// {

	// 		alert("La persona es mayor de edad.");

	// }


}//FIN DE LA FUNCIÓN