function mostrar()
{

	var maximo;
	var minimo;
	var respuesta='si';

	//Una primera entrada y asignación de datos fuera del while
	//para inicializar las variables maximo y minimo y evitar la posibilidad de 
	//que estas variables no puedan ser comparadas a los valores cargados o,
	//en caso de ser incializadas en 0 durante su declaración, que si el usuario
	//ingresa sólo números negativos o mayores que cero, el máximo o el mínimo de la
	//serie sea 0, es decir, un número no ingresado por el usuario.

	ingresoInteger = prompt("Ingrese un número y presione aceptar:");

	ingresoInteger = parseInt(ingresoInteger);

	maximo = ingresoInteger;

	minimo = ingresoInteger;

	while(respuesta !='no'){
		
		ingresoInteger = prompt("Ingrese un número y presione aceptar:");

		ingresoInteger = parseInt(ingresoInteger);

		if(ingresoInteger > maximo){

			maximo = ingresoInteger;

		}

		if(ingresoInteger < minimo){

			minimo = ingresoInteger;

		}

  		respuesta = prompt("Ingrese no para finalizar el ingreso de números y presione aceptar.")
	
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN