/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldoActual;
	var aumento;
	var sueldoConAumento;

	//Creé una variable aumento sólo para poder cambiar el porcentaje desde la variable.

	//sueldoActual = parseInt(sueldo.value , 10);

	sueldoActual = sueldo.value;
	sueldoActual = parseInt(sueldoActual);
	aumento = 1.1;

	//sueldoConAumento = (sueldoActual * aumento).toFixed(2);

	sueldoConAumento = sueldoActual * aumento;
	sueldoConAumento = sueldoConAumento.toFixed(2);

	//.toFixed determina la cantidad de decimales.

	resultado.value = sueldoConAumento;

	//alert(sueldoConAumento);

	
	
}
