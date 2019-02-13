function mostrar()
{

	var cantidadProductos;
	var montoCompra;
	var descuentoCantidad;
	var descuentoMonto;
	var recargoTarjeta;
	var precioFinal;
	var pagaConTarjeta;

	descuentoCantidad = 0.9;

	descuentoMonto = 0.85;

	recargoTarjeta = 1.1;

	cantidadProductos = prompt("Por favor ingrese la cantidad de productos comprados y presione aceptar:");
	cantidadProductos = parseInt(cantidadProductos);

	montoCompra = prompt("Por favor ingrese el monto de la compra y presione aceptar:");
	montoCompra = parseInt(montoCompra);

	precioFinal = montoCompra;

	pagaConTarjeta = prompt("Por favor, si el pago es con tarjeta ingrese si:");

	if(cantidadProductos > 2)
	{
	
		precioFinal = montoCompra * descuentoCantidad;
		
		if(montoCompra > 2000)
		{

		precioFinal = precioFinal * descuentoMonto;

		}
	
	}


	if(pagaConTarjeta == 'si')
	{

		precioFinal = precioFinal * recargoTarjeta;

	 	alert("Se compraron " + cantidadProductos + " productos por un total de $" + montoCompra + " a pagar con tarjeta siendo el monto final $" + precioFinal + " incluyendo los descuentos aplicables y un recargo de 10% por el método de pago.");

	}
	else
	{

		alert("Se compraron " + cantidadProductos + " productos por un total de " + montoCompra + " a pagar en efectivo siendo el total" + precioFinal + "incluyendo los descuentos aplicables.");

	}



}
