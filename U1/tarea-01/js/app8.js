/* Cálculo del promedio:
Solicite tres números y calcule su promedio. */
let n1 = parseInt(prompt("Ingresa el Primer Numero:"));
let n2 = parseInt(prompt("Ingresa el Segundo Numero:"));
let n3 = parseInt(prompt("Ingresa el Tercero Numero:"));

const promedio = ((n1+n2+n3)/3).toFixed(2);
alert('El promedio de estos 3 numeros es: ' + promedio + '%');