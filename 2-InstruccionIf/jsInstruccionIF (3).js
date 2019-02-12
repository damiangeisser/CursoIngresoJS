function mostrar()
{

	var edadIngresada;

	//tomo la edad	

	edadIngresada = edad.value;
	edadIngresada = parseInt(edadIngresada);
	
	if(edadIngresada <= 17)
	{

		alert("La persona es menor de edad.");

	}else{

		alert("La persona es mayor de edad.");

	}

	// if(edadIngresada <= 17)
	// {

	// 	alert("La persona es menor de edad.");

	// }

	// if(edadIngresada > 17)
	// {

	// 	alert("La persona es mayor de edad.");

	// }


}//FIN DE LA FUNCIÓN