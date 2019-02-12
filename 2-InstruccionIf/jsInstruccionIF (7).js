function mostrar()
{

	var edadIngresada;
	var estadoCivilIngresado;
	//tomo la edad  

	edadIngresada = edad.value;
	estadoCivilIngresado = estadoCivil.value;

	if(edadIngresada < 18 && estadoCivilIngresado != "Soltero")
	{

		alert("Es muy pequeño para NO ser soltero.")
	}
	


}//FIN DE LA FUNCIÓN