//ingresar 4 importes del pizarron moostrar el mayor, mostrar total,
//si supera 100 aplicar 10% descuento al total, si supera 50 descuento 5%,
//si menor a 50 sumar 15% al total 

function mostrar()
{

	var precioUno;
	var precioDos;
	var precioTres;
	var precioCuatro;
	var modificadorTotal;
	var mensajeMayor;
	var total;
	var totalFinal;
	var mensaje;


	precioUno = prompt("Por favor ingrese el primer monto y presione aceptar.");
	precioUno = parseInt(precioUno);

	precioDos = prompt("Por favor ingrese el segundo monto y presione aceptar.");
	precioDos = parseInt(precioDos);

	precioTres = prompt("Por favor ingrese el tercer monto y presione aceptar.");
	precioTres = parseInt(precioTres);

	precioCuatro = prompt("Por favor ingrese el cuarto monto y presione aceptar.");
	precioCuatro = parseInt(precioCuatro);
	

	if(precioUno > precioDos && precioUno > precioTres && precioUno > precioCuatro)
	{
		mensajeMayor = " Y $" + precioUno + " es el mayor de los montos.";
	}
	else
	{
		if(precioDos > precioTres && precioDos > precioCuatro)
		{
			mensajeMayor = " Y $" + precioDos + " es el mayor de los montos.";
		}
		else
		{
			if(precioTres > precioCuatro)
			{
			
				mensajeMayor = " Y $" + precioTres + " es el mayor de los montos.";

			}
			else
			{
				mensajeMayor = " Y $" + precioCuatro + " es el mayor de los montos.";

			}// if precioTres > precioCuatro
		}// if precioDos > precioTres && precioDos > precioCuatro
	}// if precioUno > precioDos && precioUno > precioTres && precioUno > precioCuatro

	total = precioUno + precioDos + precioTres + precioCuatro;

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
