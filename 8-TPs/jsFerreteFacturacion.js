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

	precio1 = document.getElementsByClassName("PrecioUno");
	precio2 = document.getElementsByClassName("PrecioDos");
	precio3 = document.getElementsByClassName("PrecioTres");

	resultadoSuma = precio1 + precio2 + precio3;

	alert("El total de la suma es: " + resultadoSuma);

}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}