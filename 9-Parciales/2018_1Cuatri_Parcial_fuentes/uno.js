
function mostrar()
{

	var nombre1;
	var nombre2;
	var edad1;
	var edad2;
	var sumaEdades;

	nombre1 = prompt("Por favor ingrese el primer nombre y presione aceptar:");

	edad1 = prompt("Por favor ahora ingrese la edad de " + nombre1 +" y presione aceptar:" );
	edad1 = parseInt(edad1);

	nombre2 = prompt("Por favor ingrese el segundo nombre y presione aceptar:");

	edad2 = prompt("Por favor ahora ingrese la edad de " + nombre2 +" y presione aceptar:" );
	edad2 = parseInt(edad2);

	sumaEdades = edad1 + edad2;

	alert("Ustedes son " + nombre1 + " y " + nombre2 + ", sus edades son " + edad1 + " y " + edad2 + ", y la suma de sus edades es " + sumaEdades);


// var altura;
// var anchura;
// var perimetro;

// altura = prompt("Por favor ingrese el alto del rectángulo y presione aceptar.");

// altura = parseInt(altura);

// anchura = prompt("Por favor ingrese el ancho del rectángulo y presione aceptar.");

// anchura = parseInt(anchura);

// perimetro = (anchura + altura) * 2;

}
