function mostrar()
{

	var numeroUno;
	var numeroDos;
	var suma;
	var resta;
	var mensaje;

	numeroUno = prompt("Por favor ingrese el valor del 1er número y presione aceptar:");
	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Por favor ingrese el valor del 2do número y presione aceptar:");
	numeroDos = parseInt(numeroDos);

	if(numeroUno == numeroDos)
	{
		mensaje = numeroUno + "" + numeroDos;
	}
	else
	{
		if(numeroUno > numeroDos)
		{
			resta = numeroUno - numeroDos;

			mensaje = "La resta da: " + resta;

		}
		else
		{
			suma = numeroUno + numeroDos;
			if(suma > 10)
			{
				mensaje = "La suma es " + suma + " y superó el 10.";
			}
			else
			{
				mensaje = "La suma da: " + suma;
			}// if suma > 10
		}// if numeroUno > numeroDos
	}// if numeroUno == numeroDos

	alert(mensaje);

	//Código del parcial anterior:

	// var cantidadProductos;
	// var montoCompra;
	// var descuentoCantidad;
	// var descuentoMonto;
	// var recargoTarjeta;
	// var precioFinal;
	// var pagaConTarjeta;
	// var mensaje;

	// descuentoCantidad = 0.9;

	// descuentoMonto = 0.85;

	// recargoTarjeta = 1.1;

	// cantidadProductos = prompt("Por favor ingrese la cantidad de productos comprados y presione aceptar:");
	// cantidadProductos = parseInt(cantidadProductos);

	// mensaje = "Usted compró " + cantidadProductos + " productos";

	// montoCompra = prompt("Por favor ingrese el monto de la compra y presione aceptar:");
	// montoCompra = parseInt(montoCompra);

	// precioFinal = montoCompra;

	// //pagaConTarjeta = prompt("Por favor, si el pago es con tarjeta ingrese si:");

	// pagaConTarjeta = prompt("Por favor, si el pago es con tarjeta ingrese 1 de lo contario, ingrese 0:");
	// pagaConTarjeta = parseInt(pagaConTarjeta);

	// if(cantidadProductos > 2)
	// {
	
	// 	precioFinal = montoCompra * descuentoCantidad;
	// 	precioFinal = precioFinal.toFixed(2);

	// 	mensaje = mensaje + " (10% de descuento por cantidad)";
		
	// 	if(montoCompra > 2000)
	// 	{

	// 	precioFinal = precioFinal * descuentoMonto;
	// 	precioFinal = precioFinal.toFixed(2);

	// 	mensaje = mensaje + ", superando los $2000 (15% de descuento adicional)";

	// 	}
	
	// }


	// //if(pagaConTarjeta == 'si')
	// if(pagaConTarjeta)
	// {

	// 	precioFinal = precioFinal * recargoTarjeta;
	// 	precioFinal = precioFinal.toFixed(2);

	// 	mensaje = mensaje + " y paga con tarjeta (10% de recargo)";

	// }
	
	// alert(mensaje + ". Monto final: $" + precioFinal);


}
