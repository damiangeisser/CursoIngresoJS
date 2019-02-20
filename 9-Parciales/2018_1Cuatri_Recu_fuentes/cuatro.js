//ingresar 4 importes del pizarron moostrar el mayor, mostrar total,
//si supera 100 aplicar 10% descuento al total, si supera 50 descuento 5%,
//si menor a 50 sumar 15% al total 

function mostrar()
{

	var numeroUno;
	var numeroDos;
	var numeroTres;
	var numeroCuatro;
	var modificadorTotal;
	var mensajeMayor;
	var total;
	var totalFinal;
	var mensaje;


	numeroUno = prompt("Por favor ingrese el primer monto y presione aceptar.");
	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Por favor ingrese el segundo monto y presione aceptar.");
	numeroDos = parseInt(numeroDos);

	numeroTres = prompt("Por favor ingrese el tercer monto y presione aceptar.");
	numeroTres = parseInt(numeroTres);

	numeroCuatro = prompt("Por favor ingrese el cuarto monto y presione aceptar.");
	numeroCuatro = parseInt(numeroCuatro);
	

	if(numeroUno > numeroDos && numeroUno > numeroTres && numeroUno > numeroCuatro)
	{
		mensajeMayor = " Y $" + numeroUno + " es el mayor de los montos.";
	}
	else
	{
		if(numeroDos > numeroTres && numeroDos > numeroCuatro)
		{
			mensajeMayor = " Y $" + numeroDos + " es el mayor de los montos.";
		}
		else
		{
			if(numeroTres > numeroCuatro)
			{
			
				mensajeMayor = " Y $" + numeroTres + " es el mayor de los montos.";

			}
			else
			{
				mensajeMayor = " Y $" + numeroCuatro + " es el mayor de los montos.";

			}// if numeroTres > numeroCuatro
		}// if numeroDos > numeroTres && numeroDos > numeroCuatro
	}// if numeroUno > numeroDos && numeroUno > numeroTres && numeroUno > numeroCuatro

	total = numeroUno + numeroDos + numeroTres + numeroCuatro;

	if(total > 100)
	{
		modificadorTotal = 0.9;
	}
	else
	{
		if(total > 50)
		{
			modificadorTotal = 0.95;
		}
		else
		{
			modificadorTotal = 1.15;
		}
	}

	totalFinal = total * modificadorTotal;

	mensaje = "El total de la compra es: $" + totalFinal;

	alert(mensaje + mensajeMayor);

}
