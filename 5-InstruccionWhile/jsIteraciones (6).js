function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var ingresoInteger;

	while (contador < 5) {

		ingresoInteger = prompt("Ingrese el número a sumar:");

		ingresoInteger = parseInt(ingresoInteger);

		acumulador = acumulador + ingresoInteger;
 		
  		contador++;
	}

// Una variante:

	// var contador = 1;
	// var acumulador = 0;

	// while (contador <= 5) {

	// 	acumulador = acumulador + parseInt(prompt("Ingrese el " + contador + "º de 5 números a sumar:"));
 		
 	//  contador++;
	// }



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN