function mostrar()
{

	var acumuladorPositivos=0;
	var acumuladorNegativos=0;

	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;

	var promedioPositivos;
	var promedioNegativos;

	var diferenciaPositivosNegativos;

	var ingresoInteger;

	var respuesta = "si";

	while (respuesta !== 'no') {

		ingresoInteger = prompt("Ingrese un número y presione aceptar:");

		ingresoInteger = parseInt(ingresoInteger);

		if(ingresoInteger > 0){

			acumuladorPositivos = acumuladorPositivos + ingresoInteger;
			contadorPositivos++;

		}else{

			if(ingresoInteger < 0){

				acumuladorNegativos = acumuladorNegativos + ingresoInteger;
				contadorNegativos++;

			}else{

				contadorCeros++;
			}
		}

		if(ingresoInteger % 2 == 0){

			contadorPares++;
		}
	
  		respuesta = prompt("Ingrese no para finalizar el ingreso de números y presione aceptar.")
	}

	promedioPositivos = acumuladorPositivos / contadorPositivos;
	promedioNegativos = acumuladorNegativos / contadorNegativos;
	diferenciaPositivosNegativos = acumuladorPositivos - acumuladorNegativos;

	// alert("Suma de los números positivos ingresados: " + acumuladorPositivos);

	// alert("Suma de los números negativos ingresados: " + acumuladorNegativos);

	// alert("Cantidad de números positivos ingresados: " + contadorPositivos);

	// alert("Cantidad de números negativos ingresados: " + contadorNegativos);

	// alert("Cantidad de ceros ingresados: " + contadorCeros);

	// alert("Cantidad de números pares ingresados: " + contadorPares);

	// alert("Promedio de los números positivos ingresados: " + promedioPositivos);

	// alert("Promedio de los números negativos ingresados: " + promedioNegativos);

	// alert("Diferencia entres los números positivos y negativos ingresados: " + diferenciaPositivosNegativos);

	// Un único alert que muestre todo lo requerido.

	alert("Suma de los números positivos ingresados: " + acumuladorPositivos +
	'\n' + "Suma de los números negativos ingresados: " + acumuladorNegativos +
	'\n' + "Cantidad de números positivos ingresados: " + contadorPositivos +
	'\n' + "Cantidad de números negativos ingresados: " + contadorNegativos +
	'\n' + "Cantidad de ceros ingresados: " + contadorCeros +
	'\n' + "Cantidad de números pares ingresados: " + contadorPares +
	'\n' + "Promedio de los números positivos ingresados: " + promedioPositivos +
	'\n' + "Promedio de los números negativos ingresados: " + promedioNegativos +
	'\n' + "Diferencia entres los números positivos y negativos ingresados: " + diferenciaPositivosNegativos);


}//FIN DE LA FUNCIÓN