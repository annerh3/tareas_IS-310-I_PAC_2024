/* Verificación de un número primo:
Pida un número y verifique si es primo o no. */

let numero = parseFloat(prompt("Ingresa un Numero:"));
let i=0, y;
	
	for(y=1; y<= numero; y++)
	{
		if (numero % y == 0)
		{
			i++;
		}
	}
	
	if (i == 2)
	{
		alert(numero + ' SI es numero primo.');
	}
	else{
		alert(numero + ' NO es numero primo.')
	}