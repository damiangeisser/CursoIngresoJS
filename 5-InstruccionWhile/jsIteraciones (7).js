function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta ='si';
	var ingresoInteger;

	while (respuesta == 'si') {

		ingresoInteger = prompt("Ingrese el número a sumar:");

		ingresoInteger = parseInt(ingresoInteger);

		acumulador = acumulador + ingresoInteger;
 		
  		contador++;

  		respuesta = prompt("Ingrese si para ")
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN