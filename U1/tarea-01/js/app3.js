// Multiplicación y División:
// Solicite dos números al usuario y muestra el resultado de la multiplicación y división de
// los mismos.
let num1 = parseFloat(prompt("Ingresa el Primer Numero:"));
let num2 = parseFloat(prompt("Ingresa el Segundo Numero:"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingresa números válidos.");
} else {
    let resultadoMulti = num1 * num2;
    let resultadoDiv = num1 / num2;
    alert(`-La multiplicacion de ${num1} y ${num2} es: ${resultadoMulti}\n-La division de ${num1} y ${num2} es: ${resultadoDiv}`);
}
