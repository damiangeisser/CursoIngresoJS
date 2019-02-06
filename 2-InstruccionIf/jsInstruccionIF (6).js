function mostrar()
{
	
	var edadIngresada;

	//tomo la edad	

	edadIngresada = edad.value;
	
	if(edadIngresada < 13){

		alert("La persona es menor de edad.");

	}else{

		if(edadIngresada >= 13 && edadIngresada <= 17){

		alert("La persona es adolescente.");

		}else{
			alert("La persona es mayor de edad.");
		}

	}


}//FIN DE LA FUNCIÓN