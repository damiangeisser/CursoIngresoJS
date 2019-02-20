function mostrar()
{

	var precio;
	var paquete;
	var formaDePago;
	var descuento;
	var precioConDescuento;

	precio = prompt("Por favor ingrese el monto del hospedaje y presione aceptar:");

	precio = parseInt(precio);

	paquete = prompt("Por favor ingrese el paquete adquirido y presione aceptar:" + '\n' + "1 - Todo Incluído." + '\n' +"2 - Sólo Desayunos." + '\n' + "3 - Otro." );

	formaDePago = prompt("Por favor ingrese la forma de pago y presione aceptar:" + '\n' + "1 - Tarjeta Visa" + '\n' +"2 - Paypal" + '\n' + "3 - MercadoPago" + '\n' + "4 - Efectivo" + '\n' + "5 - Otro");

	 switch(formaDePago)
	 {
	 	case "1": //Tarjeta Visa, sin descuentos adicionales por paquetes.
	 	case "3": //MercadoPago, sin descuentos adicionales por paquetes.
	 		descuento = "10%";
	 		precioConDescuento = precio * 0.9;
	 		break;
	 	case "2": //PayPal	
	 		switch(paquete)
	 		{
	 			case "1": //Todo incluído
	 				descuento = "25%";
	 				precioConDescuento = precio * 0.75;
	 				break;
	 			default:// Otros paquetes, sólo el descuento del medio de pago.
	 				descuento = "15%";
	 				precioConDescuento = precio * 0.85;
	 				break;
	 		}
	 		break;
	 	case "4"://Efectivo
	 		switch(paquete)
	 		{
	 			case "1": //Todo incluído
	 				descuento = "35%";
	 				precioConDescuento = precio * 0.65;
	 				break;
	 			case "2": //Sólo desayunos
	 				descuento = "30%";
	 				precioConDescuento = precio * 0.7;
	 				break;
	 			default:// Otros paquetes, sólo el descuento del medio de pago.
	 				descuento = "20%";
	 				precioConDescuento = precio * 0.8;
	 				break;
	 		}
	 		break;
	 	default:// Otro medio de pago
	 		descuento = "5%";
	 		break;

	 }

	 alert("El monto original es de $" + precio + " y accede a un descuento del " + descuento + " por el tipo de paquete y la forma de pago utilizada, abonando finalmente $" + precioConDescuento);

}
