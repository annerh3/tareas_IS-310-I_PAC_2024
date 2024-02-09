/* El combustible:
Escriba un programa que solicite al usuario ingresar el número de kilómetros recorridos
por su carro y el número de litros consumidos . El script debe mostrar el consumo de
combustible por kilómetro.  */
let kmRecorridos = parseFloat(prompt("Ingresa el el número de kilómetros recorridos por su carro : "));
let litrosConsumidos = parseFloat(prompt("Ingresa el número de litros consumidos: "));

let relacion = litrosConsumidos/kmRecorridos;

alert("El consumo de combustible por kilómetro es: " + relacion.toFixed(2) + " litros/km");
