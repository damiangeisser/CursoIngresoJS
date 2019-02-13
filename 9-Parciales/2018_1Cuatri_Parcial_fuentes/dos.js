function mostrar()
{
  
	var precioLista;
	var recargoTarjeta;
	var precioTarjeta;

	precioLista = prompt("Por favor ingrese el precio de lista y presione aceptar:");
	precioLista = parseInt(precioLista);

	recargoTarjeta = precioLista * 0.1;

	precioTarjeta = precioLista + recargoTarjeta;

	alert("El precio del producto en efectivo es: $" + precioLista + ", con tarjeta tiene un recargo del 10% que sería $" + recargoTarjeta + " de recargo, costándole final $" + precioTarjeta);

}
