/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

	var precio1;
	var precio2;
	var precio3;
	var resultadoSuma;

	// precio1 = document.getElementsById("PrecioUno");
	// precio2 = document.getElementsById("PrecioDos");
	// precio3 = document.getElementsById("PrecioTres");

	precio1 = PrecioUno.value;
	precio2 = PrecioDos.value;
	precio3 = PrecioTres.value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	resultadoSuma = precio1 + precio2 + precio3;

	alert("El total de la suma es: " + resultadoSuma);

}
function Promedio () 
{
	
	var precio1;
	var precio2;
	var precio3;
	var resultadoSuma;
	var resultadoPromedio;

	// precio1 = document.getElementsById("PrecioUno");
	// precio2 = document.getElementsById("PrecioDos");
	// precio3 = document.getElementsById("PrecioTres");

	precio1 = PrecioUno.value;
	precio2 = PrecioDos.value;
	precio3 = PrecioTres.value;



	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	resultadoSuma = precio1 + precio2 + precio3;

	resultadoPromedio = resultadoSuma / 3;

	alert("El promedio de los precios es: " + resultadoPromedio);

}
function PrecioFinal () 
{
	
	var precio1;
	var precio2;
	var precio3;
	var resultadoSuma;
	var iva;
	var precioConIva;

	// precio1 = document.getElementsById("PrecioUno");
	// precio2 = document.getElementsById("PrecioDos");
	// precio3 = document.getElementsById("PrecioTres");

	precio1 = PrecioUno.value;
	precio2 = PrecioDos.value;
	precio3 = PrecioTres.value;


	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	iva = 1.21;

	resultadoSuma = precio1 + precio2 + precio3;

	precioConIva = resultadoSuma * iva;

	alert("El precio final es: " + precioConIva);

}