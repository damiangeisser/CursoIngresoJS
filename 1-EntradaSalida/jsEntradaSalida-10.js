/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	var importeActual;
	var descuento;
	var importeConDescuento;

	//Creé una variable descuento sólo para poder cambiar el porcentaje desde la variable.

	importeActual = parseInt(importe.value , 10);
	descuento = 0.75;

	importeConDescuento = (importeActual * descuento).toFixed(2);

	//.toFixed determina la cantidad de decimales.

	resultado.value = importeConDescuento;

}
