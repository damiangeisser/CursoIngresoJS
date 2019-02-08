function mostrar()
{

	var sexo = prompt("Ingrese f o m");

	while (sexo != "f" && sexo != "m") {

 		alert("El valor ingresado no es válido. Por favor ingrese f o m");

  		var sexo = prompt("Ingrese f o m");
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN