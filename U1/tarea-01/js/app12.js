/* Calculadora simple:
Cree una calculadora que permita al usuario realizar operaciones básicas (suma, resta,
multiplicación, división) con dos números.*/
alert("CALCULADORA DE OPERACIONES BASICAS")
const op = parseInt(prompt("Elija la operacion a realizar: \n1. Sumar.\n2. Restar\n3. Multiplicar.\n4. Dividir."));

let num1 = parseFloat(prompt("Ingresa el Primer Numero:"));
let num2 = parseFloat(prompt("Ingresa el Segundo Numero:"));

switch(op)
{
    case 1:
        const suma = num1 + num2; 
        alert('La suma de ' + num1 +' y ' + num2 + ' es: ' + suma);
        break;
    case 2:
        const resta = num1 - num2; 
        alert('La resta de ' + num1 +' y ' + num2 + ' es: ' + resta);
        break;
    case 3: 
        const multi = num1 * num2; 
        alert('La multiplicacion de ' + num1 +' y ' + num2 + ' es: ' + multi);
        break;
    case 4: 
        const div = num1 / num2; 
        alert('La division de ' + num1 +' y ' + num2 + ' es: ' + div);
        break;
        default: 
        alert("Opcion no valida. Ingrese nuevamente, refrescando la pagina.");
}