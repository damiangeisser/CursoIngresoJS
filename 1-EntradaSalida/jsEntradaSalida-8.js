/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	
	var dividendo;
	var divisor;
	var restoDivision;

	dividendo = parseInt(numeroDividendo.value , 10);
	divisor = parseInt(numeroDivisor.value , 10);

	if(divisor != 0){

		restoDivision = dividendo % divisor;

		alert("El resto de la división: " + dividendo + " / " + divisor + " es: " + restoDivision);

	}else{

	alert("No es posible dividir por cero, por favor ingrese otro número en el segundo campo.");
	}

}
