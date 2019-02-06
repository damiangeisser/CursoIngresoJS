/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
	var primerSumando;
	var segundoSumando;
	var resultadoSuma;

	//primerSumando = parseInt(numeroUno.value , 10);
	//segundoSumando = parseInt(numeroDos.value , 10);

	primerSumando = numeroUno.value;
	primerSumando = parseInt(primerSumando , 10);
	segundoSumando = numeroDos.value;
	segundoSumando = parseInt(segundoSumando , 10);

	resultadoSuma = primerSumando + segundoSumando;

	alert("La suma es: " + primerSumando + " + " + segundoSumando + " = " + resultadoSuma);

}

function restar()
{
	
	var minuendo;
	var sustraendo;
	var resultadoResta;

	//minuendo = parseInt(numeroUno.value , 10);
	//sustraendo = parseInt(numeroDos.value , 10);

	minuendo = numeroUno.value;
	minuendo = parseInt(minuendo , 10);
	sustraendo = numeroDos.value;
	sustraendo = parseInt(sustraendo , 10);

	resultadoResta = minuendo - sustraendo;

	alert("La resta es: " + minuendo + " - " + sustraendo + " = " + resultadoResta);

}

function multiplicar()
{ 
	
	var primerFactor;
	var segundoFactor;
	var resultadoProducto;

	//primerFactor = parseInt(numeroUno.value , 10);
	//segundoFactor = parseInt(numeroDos.value , 10);

	primerFactor = numeroUno.value;
	primerFactor = parseInt(primerFactor , 10);
	segundoFactor = numeroDos.value;
	segundoFactor = parseInt(segundoFactor , 10);

	resultadoProducto = primerFactor * segundoFactor;

	alert("La multiplicación es: " + primerFactor + " x " + segundoFactor + " = " + resultadoProducto);


}

function dividir()
{

	var dividendo;
	var divisor;
	var resultadoDivision;

	//dividendo = parseInt(numeroUno.value , 10);
	//divisor = parseInt(numeroDos.value , 10);

	dividendo = numeroUno.value;
	dividendo = parseInt(dividendo , 10);
	divisor = numeroDos.value;
	divisor = parseInt(divisor , 10);

	//if(divisor != 0){

		resultadoDivision = dividendo/divisor;

		alert("La división es: " + dividendo + " / " + divisor + " = " + resultadoDivision);

	//}else{

	//alert("No es posible dividir por cero, por favor ingrese otro número en el segundo campo.");
	//}
}

