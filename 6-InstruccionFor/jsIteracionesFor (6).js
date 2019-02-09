function mostrar()
{

	var numeroIngresado;
	var contadorPares;

	numeroIngresado = prompt("Ingrese el límite a analizar y presione aceptar:")
	contadorPares = 0;

	for ( i = 1; i <= numeroIngresado; i++) {
	
		if(i % 2 == 0){

			alert(i + " es par.");

			contadorPares++;

		}
	
	}

	alert("Se hallaron " + contadorPares + " números pares.");


}//FIN DE LA FUNCIÓN