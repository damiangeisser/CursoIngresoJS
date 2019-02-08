function mostrar()
{

	var numero = prompt("Ingrese un número entre 0 y 9 y presione aceptar.");

	numero = parseInt(numero);

	while (numero < 0 || numero >9) {

 		alert("No ingresó un número entre 0 y 9, inténtelo nuevamente.");

  		var numero = prompt("Ingrese un número entre 0 y 9 y presione aceptar.");

  		numero = parseInt(numero);
	}

document.getElementById('Numero').value=numero;

// No es parte de la consigna, pero sirve para saber que no ha ocurrido otro error.
//alert("Ingresó un número válido.");


}//FIN DE LA FUNCIÓN