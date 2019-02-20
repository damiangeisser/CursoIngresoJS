function mostrar()
{

	var clave;

	clave = prompt("Por favor ingrese la clave y presione aceptar.");

		while (clave != "utn750")
		{
	 		alert("Clave incorrecta, por favor intente nuevamente y presione aceptar.");

	  		clave = prompt("Por favor ingrese la clave y presione aceptar.");
		}

	// No es parte de la consigna, pero sirve para saber que no ha ocurrido otro error.
	alert("Clave correcta.");

}//FIN DE LA FUNCIÓN
