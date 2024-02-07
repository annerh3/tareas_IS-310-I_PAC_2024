let num1 = parseFloat(prompt("Ingresa el Primer Numero:"));
let num2 = parseFloat(prompt("Ingresa el Segundo Numero:"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingresa números válidos.");
} else {
    let resultado = num1 - num2;
    alert(`La resta de ${num1} y ${num2} es: ${resultado}`);
}
