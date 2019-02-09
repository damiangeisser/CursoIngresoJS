function mostrar()
{

	var numeroIngresado;
	var divisores;

	numeroIngresado = prompt("Ingrese el número del cual desea hallar los divisores:")
	divisores = 0;

	for ( i = 1; i <= numeroIngresado; i++) {
	
		if(numeroIngresado % i == 0){

			alert(i + " es divisor de " + numeroIngresado);

			divisores++;

		}
	
	}

	alert("Se hallaron " + divisores + " divisores de " + numeroIngresado);


}//FIN DE LA FUNCIÓN