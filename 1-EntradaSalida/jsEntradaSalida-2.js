/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreCompleto;
	nombreCompleto = prompt("Por favor ingrese su nombre completo y haga click en Aceptar:", "Nombre");
	alert("El nombre ingresado fue: " + nombreCompleto);
}