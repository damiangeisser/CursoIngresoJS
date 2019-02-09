function mostrar()
{

	var numeroIngresado;
	var limite;
	var primo; //Booleano

	primo = true;

	numeroIngresado = prompt("Ingrese el número que desea determinar si es primo:");

	limite = Math.floor(Math.sqrt(numeroIngresado));

// La siguiente línea descarta a los números pares, el 1, el 0 y los negativos sin necesidad de cálculos.

	if(numeroIngresado % 2 == 0 || numeroIngresado <= 1){

		primo = !primo;

	}else{
	
		for ( i = 3; i <= limite; i++) {
		//for ( i = 3; i <= Math.floor(Math.sqrt(numeroIngresado)); i++) { //Opción sin la variable limite.

			if(numeroIngresado % i == 0){
	
				primo = !primo;
	
				//break; //Parece no ser necesario.
	
			}

			//No funciona:

			// else{

			// 	alert(numeroIngresado + " es primo.");

			// 	break;
			// }
		}		
	}

	if (primo){

		alert(numeroIngresado + " es primo.");

	}else{

		alert(numeroIngresado + " no es primo.");
	}


}//FIN DE LA FUNCIÓN