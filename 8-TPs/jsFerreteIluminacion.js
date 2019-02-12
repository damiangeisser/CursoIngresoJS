/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

	var cantidadLamparas;
	var marcaLamparas;
 	var total;
 	var ingresosBrutos;
 	var totalFinal;

 	cantidadLamparas = Cantidad.value;
 	cantidadLamparas = parseInt(cantidadLamparas);
 	marcaLamparas = Marca.value;

 	total = 35 * cantidadLamparas;

 	if(cantidadLamparas >= 3 && <=5 )
 	{
 		switch(cantidadLamparas)
 		{
 		case "3":
 			if(marcaLamparas == "ArgentinaLuz")
 			{
 				total = total * 0.85;
 			}
 			if(marcaLamparas == "FelipeLamparas")
 			{
 				total = total * 0.9;
 			}
 			else
 			{
 				total = total * 0.95;
 			}
 		break;
 		case "4":
 			if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
 			{
 				total = total * 0.75;
 			}
 			else
 			{
 				total = total * 0.8;
 			}
 		break;
 		case "5":
 			if(marcaLamparas == "ArgentinaLuz")
 			{
 				total = total * 0.6;
 			}
 			else
 			{
 				total = total * 0.7;
 			}
 		break;
 		default:
 		}
 	}

 	if(cantidadLamparas >= 6)
 	{
 		total = total * 0.5;
 	}

 	if(total > 120)
 	{
 		ingresosBrutos = total * 0.1;
 		totalFinal = total + ingresosBrutos;

 		precioDescuento.value = "El precio final es: $" + totalFinal + ".- IIBB usted pagó: $" + ingresosBrutos + ".-";
 	}
 	else
 	{
 		totalFinal = total;
 	}


}
