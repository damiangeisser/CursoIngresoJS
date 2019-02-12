function mostrar()
{

	var edadIngresada;

	//tomo la edad	

	edadIngresada = edad.value;
	edadIngresada = parseInt(edadIngresada);
	
	if(edadIngresada < 13 || edadIngresada > 17)
	{

		alert("La persona no es adolescente.");

	}

	//Una alternativa:

	//if((edadIngresada >= 13 && edadIngresada <= 17) == false){

	//	alert("La persona no es adolescente");

	//}

}//FIN DE LA FUNCIÓN