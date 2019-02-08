function mostrar()
{

	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

while (respuesta == 'si') {

		ingresoInteger = prompt("Ingrese un número > 0 para sumarlo y < 0 para multiplicarlo:");

		ingresoInteger = parseInt(ingresoInteger);

		if(ingresoInteger > 0){

			positivo = positivo + ingresoInteger;

		}else{

			negativo = negativo * ingresoInteger;

		}
	
  		respuesta = prompt("Ingrese si para continuar ingresando números y presione aceptar.")
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN