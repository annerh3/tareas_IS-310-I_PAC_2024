/* Cambio de moneda:
Pida al usuario una cantidad en dólares y convertirla a lempiras utilizando el tipo de
cambio actual.  */
alert('CONVERSOR DE DOLAR A LEMPIRA');
let dolar = parseFloat(prompt("Ingresa Monto en Dolar ($): "));
let montoEnLempiras = dolar * 24.71;
alert(dolar + ' dolares equivalen a ' + montoEnLempiras.toFixed(2) + ' Lempiras.');