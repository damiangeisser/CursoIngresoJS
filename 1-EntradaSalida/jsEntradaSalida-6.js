/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	var primerNumero;
	var segundoNumero;
	var resultadoSuma;

	primerNumero = numeroUno.value;
	primerNumero = parseInt(primerNumero);
	segundoNumero = numeroDos.value;
	segundoNumero = parseInt(segundoNumero);

	//primerNumero = parseInt(primerNumero , 10);
	//segundoNumero = parseInt(segundoNumero , 10);

	//parseInt(primerNumero , 10);
	//parseInt(segundoNumero , 10);

	//primerNumero = parseInt(numeroUno.value , 10);
	//segundoNumero = parseInt(numeroDos.value , 10);

	resultadoSuma = primerNumero + segundoNumero;

	alert("Respuesta: " + primerNumero + " + " + segundoNumero + " = " + resultadoSuma);

}

