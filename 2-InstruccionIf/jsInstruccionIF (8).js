function mostrar()
{
	
	var edadIngresada;
	var estadoCivilIngresado;
	//tomo la edad  

	edadIngresada = edad.value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivilIngresado = estadoCivil.value;

	if(edadIngresada >= 18 && estadoCivilIngresado == "Soltero")
	{

		alert("Es soltero y no es menor.")
	}
	
	//Sin concatenadores

	// if(edadIngresada >= 18)
	// {
	// 	if(estadoCivilIngresado == "Soltero")
	// 	{
	// 		alert("Es soltero y no es menor.")
	// 	}
	// }
	


}//FIN DE LA FUNCIÓN