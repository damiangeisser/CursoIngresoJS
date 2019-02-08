function mostrar()
{
//tomo el mes
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAnio); //Causa que el código no cumpla la función y mostrar el nombre del mes no es parte del enunciado.

switch(mesDelAnio){

	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	case "Enero":
	case "Febrero":
	alert("¡Ya pasamos el frío, ahora calor!");
	break;
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	alert("Falta para el invierno.");
	break;
	case "Julio":
	case"Agosto":
	alert("Abrigate que hace frío.");
	break;
	default:
	
	}



}//FIN DE LA FUNCIÓN