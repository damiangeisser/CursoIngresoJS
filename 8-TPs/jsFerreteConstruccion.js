/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

var base;
var altura;
var perimetroAlambre;

base = Largo.value;
altura = Ancho.value;

base = parseInt(base);
altura = parseInt(altura);

perimetroAlambre = base + altura * 2;

alert("La cantidad de alambre necesario es: " + perimetroAlambre + " mts.")


}
function Circulo () 
{

	var radioCirculo;
	var circunferenciaAlambre;

	radioCirculo = Radio.value;

	radioCirculo = parseInt(radioCirculo);

	circunferenciaAlambre = 6 * Math.PI * radioCirculo;

	circunferenciaAlambre = circunferenciaAlambre.toFixed(2);

	alert("La cantidad de alambre necesario es: " + circunferenciaAlambre + " mts.")


	
}
function Materiales () 
{
	
	var base;
	var altura;
	var superficie;
	// ¿Las siguientes dos son variables necesarias?
	// var bolsaCementoM2;
	// var bolsaCalM2;
	var cantidadCemento;
	var cantidadCal;

	base = Largo.value;
	altura = Ancho.value;

	// bolsaCementoM2 = 2;
	// bolsaCalM2 = 3;

	base = parseInt(base);
	altura = parseInt(altura);

	superficie = base * altura;

	cantidadCemento = superficie * 2;
	cantidadCal = superficie * 3;

	alert("Las bolsas de cemento necesarias son: " + cantidadCemento + "\n" +                     
		"Las bolsas de cal necesarias son: " + cantidadCal)

}