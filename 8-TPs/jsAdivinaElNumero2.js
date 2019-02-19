/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto;
var numeroIngresado; 
var contadorIntentos;
var mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor((Math.random() * 100) + 1);
	//numeroSecreto = 10; //Valor fijo para verificar el funmcionamiento del algoritmo.

	contadorIntentos = 0;
	

}

function verificar()
{

	numeroIngresado = numero.value;
	numeroIngresado = parseInt(numeroIngresado);

	contadorIntentos++;

	if(numeroSecreto == numeroIngresado )
	{
		if(contadorIntentos < 11)
		{
			switch(contadorIntentos){
		
				case 1:
				mensaje = "Adivinó en " + contadorIntentos + " intentos. Usted es un psíquico.";
				break;
				case 2:
				mensaje = "Adivinó en " + contadorIntentos + " intentos. Excelente percepción.";
				break;
				case 3:
				mensaje = "Adivinó en " + contadorIntentos + " intentos. Esto es suerte.";
				break;
				case 4:
				mensaje = "Adivinó en " + contadorIntentos + " intentos. Excelente técnica.";
				break;
				case 5:
				mensaje = "Adivinó en " + contadorIntentos + " intentos. Usted está en la media.";
				break;
				default:
				mensaje = "Adivinó en " + contadorIntentos + " intentos. Falta técnica.";
			}
		}
		else
		{
			mensaje = "Adivinó en " + contadorIntentos + " intentos ¡Afortunado en el amor!";	
		}
	}
	else
	{
		if(numeroSecreto < numeroIngresado)
		{
			mensaje = "Se pasó del número secreto.";
		}
		else
		{
			mensaje = "Falta para el número secreto.";
		}
	}

	alert(mensaje);

	intentos.value = contadorIntentos;
	
}