function mostrar()
{

var clave = prompt("ingrese el número clave.");

	while (clave != "utn750") {
 		alert("Clave incorrecta, por favor intente nuevamente y presione aceptar.");
  		var clave = prompt("ingrese el número clave.");
	}

// No es parte de la consigna, pero sirve para saber que no ha ocurrido otro error.
alert("Clave correcta.");

}//FIN DE LA FUNCIÓN
